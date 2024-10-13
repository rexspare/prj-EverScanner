import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { ASYNC_KEYS, QR_TYPE, SCREENS } from '../../assets/constants';
import { BackeHeader, GenerateContact, GenerateEmail, GenerateInstagram, GenerateTelephone, GenerateText, GenerateTwitter, GenerateWebsite, GenerateWhatsapp, GenerateWifi, If, Layout } from '../../components';
import useStorage from '../../hooks/useStorage';
import { InitialNavigationStackParamList } from '../../navigation/rootStack';

const GenerateCodeScreen: FC = () => {
    const route: any = useRoute()
    const navigation = useNavigation<NativeStackNavigationProp<InitialNavigationStackParamList>>();
    const { saveEntryInStorage, isLoading, setisLoading } = useStorage()

    const type = route?.params?.type?.toUpperCase()
    const title = route?.params?.title?.toUpperCase()

    const handleGenerateQrCode = async (data: any) => {
        if (!data) {
            return
        }
        try {
            setisLoading(true)
            const mData = {
                type: type,
                data: data,
            }
            const res = await saveEntryInStorage(ASYNC_KEYS.HISTORY, mData)
            if (res) {
                navigation.navigate(SCREENS.QR_CODE, { data: res })
            }

        } catch (error) {
            console.log("handleGenerateQrCode ==>>", error);
        } finally {
            setisLoading(false)
        }


    }

    return (

        <Layout fixed={true} >

            <BackeHeader title={title} />

            <Layout>
                <If condition={type == QR_TYPE.TEXT}>
                    <GenerateText
                        onGenerate={(data: any) => handleGenerateQrCode(data)}
                    />
                </If>

                <If condition={type == QR_TYPE.WEBSITE}>
                    <GenerateWebsite
                        onGenerate={(data: any) => handleGenerateQrCode(data)}
                    />
                </If>

                <If condition={type == QR_TYPE.WIFI}>
                    <GenerateWifi
                        onGenerate={(data: any) => handleGenerateQrCode(data)}
                    />
                </If>

                <If condition={type == QR_TYPE.EMAIL}>
                    <GenerateEmail
                        onGenerate={(data: any) => handleGenerateQrCode(data)}
                    />
                </If>

                <If condition={type == QR_TYPE.WHATSAPP}>
                    <GenerateWhatsapp
                        onGenerate={(data: any) => handleGenerateQrCode(data)}
                    />
                </If>

                <If condition={type == QR_TYPE.TWITTER}>
                    <GenerateTwitter
                        onGenerate={(data: any) => handleGenerateQrCode(data)}
                    />
                </If>

                <If condition={type == QR_TYPE.INSTAGRAM}>
                    <GenerateInstagram
                        onGenerate={(data: any) => handleGenerateQrCode(data)}
                    />
                </If>

                <If condition={type == QR_TYPE.TELEPHONE}>
                    <GenerateTelephone
                        onGenerate={(data: any) => handleGenerateQrCode(data)}
                    />
                </If>

                {/* <If condition={type == QR_TYPE.LOCATION}>
                    <GenerateLocation
                        onGenerate={(data: any) => handleGenerateQrCode(data)}
                    />
                </If> */}

                {/* <If condition={type == QR_TYPE.EVENT}>
                    <GenerateEvents
                        onGenerate={(data: any) => handleGenerateQrCode(data)}
                    />
                </If> */}

                <If condition={type == QR_TYPE.CONTACT}>
                    <GenerateContact
                        onGenerate={(data: any) => handleGenerateQrCode(data)}
                    />
                </If>

            </Layout>

        </Layout >

    )
}

export default GenerateCodeScreen

