import React, { FC } from 'react';
import { BackeHeader, BodyText, Layout, PrimaryButton } from '../../components';
import { appConfigtStateSelectors, useAppConfigState } from '../../states/appConfig';
import { View, TouchableOpacity, Linking, Platform, Alert } from 'react-native';
import styles from './styles.openFile';
import { Copy, Delete, QRScan, ScanHistory, Share } from '../../assets/svg';
import { COLORS, hp } from '../../assets/stylesGuide';
import moment from 'moment';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { InitialNavigationStackParamList } from '../../navigation/rootStack'
import { ALERT_HEADER, ALERT_TYPES, SCREENS } from '../../assets/constants';
import { copyToClipboard, parseWiFiString, requestContactsPermission, requestFineLocationPermission, showToast } from '../../utils/myUtils';
import { PermissionsAndroid } from 'react-native';
import Contacts from 'react-native-contacts';
import vCardParser from 'vcard-parser';
import WifiManager from "react-native-wifi-reborn";

const OpenFileScreen: FC = () => {
    const lang = useAppConfigState(appConfigtStateSelectors.language)
    const navigation = useNavigation<NativeStackNavigationProp<InitialNavigationStackParamList>>();
    const route: any = useRoute()
    const QrData = route.params?.data

    const handleCopy = async () => {
        await copyToClipboard(QrData.data)
        showToast(lang["_99"])
    }

    const handleCommit = () => {
        const mData = QrData?.data?.toUpperCase()
        const DATA = QrData?.data
        try {
            if (mData?.includes("HTTP")) {
                Linking.openURL(DATA)
                return
            } else if (mData?.includes("VCARD")) {
                handleAddContact()
            } else if (mData?.includes("MAILTO")) {
                Linking.openURL(DATA)
            } else if (mData?.includes("TEL")) {
                Linking.openURL(DATA)
            } else if (mData?.includes("WIFI")) {
                handleConnectWifi()
            } else {
                handleCopy()
            }

        } catch (error) {
            showToast(lang['_102'], ALERT_TYPES.DANGER, ALERT_HEADER.DANGER)
        } finally {

        }
    }

    // HANDLE CONTACT
    const handleAddContact = async () => {
        try {
            const permission = await requestContactsPermission()
            console.log(permission);

            if (permission) {
                const parsedVCard = vCardParser.parse(QrData.data);

                if (parsedVCard) {
                    const contactInfo = parsedVCard; // The object you provided

                    // Extract fields from the parsed object
                    const givenName = contactInfo.fn?.[0]?.value || contactInfo.n?.[0]?.value?.[1] || 'Unknown';
                    const familyName = contactInfo.n?.[0]?.value?.[0] || '';
                    const organization = contactInfo.org?.[0]?.value || '';
                    const title = contactInfo.title?.[0]?.value || '';
                    const url = contactInfo.url?.[0]?.value || '';
                    const emailAddresses = contactInfo.email?.map((email: any) => ({
                        label: email.meta?.type?.join(', ') || 'work',
                        email: email.value || '',
                    })) || [];

                    // Extract phone numbers
                    const phoneNumbers = contactInfo.tel?.map((phone: any) => ({
                        label: phone.meta?.type?.join(', ') || Object.keys(phone.meta)[0] || 'mobile',
                        number: phone.value || '',
                    })) || [];

                    // Extract addresses
                    const address = contactInfo.adr?.[0]?.value || [];
                    const postalAddresses = address.length > 0 ? [{
                        label: 'work',
                        street: address[2] || '',
                        city: address[3] || '',
                        state: address[4] || '',
                        postCode: address[5] || '',
                        country: address[6] || '',
                    }] : [];

                    const newContact: any = {
                        givenName,
                        familyName,
                        phoneNumbers,
                        emailAddresses,
                        company: organization,
                        jobTitle: title,
                        urlAddresses: [{ label: 'work', url }],
                        postalAddresses,
                    };

                    await Contacts.addContact(newContact)
                    showToast(lang['_103'], ALERT_TYPES.SUCCESS, ALERT_HEADER.SUCCESS)
                } else {
                    showToast(lang['_102'], ALERT_TYPES.DANGER, ALERT_HEADER.DANGER)
                }
            } else {
                showToast(lang['_101'], ALERT_TYPES.WARNING, ALERT_HEADER.WARNING)
            }

        } catch (error) {
            showToast(lang['_102'], ALERT_TYPES.DANGER, ALERT_HEADER.DANGER)
        }


    }

    // HANDLE WIFI
    const handleConnectWifi = async () => {
        try {
            const permission = await requestFineLocationPermission()
            if (permission) {
                const wifiInfo = parseWiFiString(QrData?.data)
                if (Platform.OS === 'android') {
                    await WifiManager.connectToProtectedSSID(
                        wifiInfo.ssid,
                        wifiInfo.password,
                        wifiInfo.type == "WEP",
                        wifiInfo.hidden,

                    );
                    showToast(`Successfully connected to ${wifiInfo.ssid}`, ALERT_TYPES.SUCCESS, ALERT_HEADER.SUCCESS)
                } else if (Platform.OS === 'ios') {
                    WifiManager.setEnabled(true); // Make sure WiFi is enabled on iOS
                    const result: any = await WifiManager.connectToSSID(wifiInfo.ssid);
                    if (result) {
                        showToast(`Successfully connected to ${wifiInfo.ssid}`, ALERT_TYPES.SUCCESS, ALERT_HEADER.SUCCESS)
                    } else {
                        showToast(`Failed to connected ${wifiInfo.ssid}`, ALERT_TYPES.DANGER, ALERT_HEADER.DANGER)
                    }
                }

            }
        } catch (error) {
            showToast(`Failed to connected wifi`, ALERT_TYPES.DANGER, ALERT_HEADER.DANGER)
        }
    }

    return (
        <Layout fixed={true} >

            <BackeHeader title={lang['_63']} />

            <View
                style={styles.main}
            >
                <View style={styles.row}>
                    <ScanHistory width={hp(5)} height={hp(5)} />

                    <View style={styles.context}>
                        <BodyText style={styles.dataTxt}>{lang['_100']}</BodyText>
                        <BodyText style={styles.date}>{moment.unix(QrData?.createdAt).format('DD MMM YYYY, hh:mm A')}</BodyText>
                    </View>
                </View>

                <View style={styles.line}></View>

                <BodyText style={styles.qrdata}>{QrData?.data}</BodyText>

                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate(SCREENS.QR_CODE, { data: QrData })}
                    style={styles.btn}
                >
                    <BodyText style={styles.btnTxt}>{lang['_64']}</BodyText>
                </TouchableOpacity>

            </View>

            {/* BUTTONS */}

            <View style={styles.btnContainer}>

                <View>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.twinBtn}
                    >
                        <Share fill={COLORS.SECONDARY} width={hp(2.2)} height={hp(2.2)} />
                    </TouchableOpacity>
                    <BodyText style={styles.twinBtnTxt}>{lang["_65"]}</BodyText>
                </View>

                <View>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => handleCopy()}
                        style={styles.twinBtn}
                    >
                        <Copy fill={COLORS.SECONDARY} width={hp(2.2)} height={hp(2.2)} />
                    </TouchableOpacity>
                    <BodyText style={styles.twinBtnTxt}>{lang["_66"]}</BodyText>
                </View>


            </View>

            <PrimaryButton
                title={lang["_98"]}
                onPress={() => handleCommit()}
                style={styles.commitBtn}
            />

        </Layout >

    )
}

export default OpenFileScreen

