import React, { FC, useEffect, useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import RNQRGenerator from 'rn-qr-generator';
import { COLORS, hp } from '../../assets/stylesGuide';
import { Save, ScanHistory, Share } from '../../assets/svg';
import { BackeHeader, BodyText, Layout } from '../../components';
import { appConfigtStateSelectors, useAppConfigState } from '../../states/appConfig';
import styles from './styles.qrCode';

const QrCodeScreen: FC = () => {
    const lang = useAppConfigState(appConfigtStateSelectors.language)
    const [code, setcode] = useState<string>("")

    useEffect(() => {
        RNQRGenerator.generate({
            value: 'https://github.com/gevgasparyan/rn-qr-generator',
            height: hp(25),
            width: hp(25),
        })
            .then(response => {
                const { uri, width, height, base64 } = response;
                setcode(uri);
            })
            .catch(error => console.log('Cannot create QR code', error));

    }, [])




    return (
        <Layout fixed={true} >

            <BackeHeader title={lang['_69']} />

            <View
                style={styles.main}
            >
                <View style={styles.row}>
                    <ScanHistory width={hp(5)} height={hp(5)} />

                    <View style={styles.context}>
                        <BodyText style={styles.dataTxt}>{lang['_68']}</BodyText>
                        <BodyText style={styles.date}>https://www.youtube.com/watch?v=Zd9g7sKvgIM</BodyText>
                    </View>
                </View>


            </View>



            {/* QR CODE */}

            <View style={styles.codeContainer}>
                <Image
                    source={{ uri: code }}
                    style={styles.code}
                />
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
                        style={styles.twinBtn}
                    >
                        <Save fill={COLORS.SECONDARY} width={hp(2.2)} height={hp(2.2)} />
                    </TouchableOpacity>
                    <BodyText style={styles.twinBtnTxt}>{lang["_67"]}</BodyText>
                </View>


            </View>

        </Layout >

    )
}

export default QrCodeScreen

