import { useRoute } from '@react-navigation/native';
import React, { FC } from 'react';
import { QR_TYPE } from '../../assets/constants';
import { BackeHeader, GenerateContact, GenerateEmail, GenerateEvents, GenerateInstagram, GenerateLocation, GenerateTelephone, GenerateText, GenerateTwitter, GenerateWebsite, GenerateWhatsapp, GenerateWifi, If, Layout } from '../../components';
import RNQRGenerator from 'rn-qr-generator';
import { handleDownloadMedia } from '../../utils/myUtils';

const GenerateCodeScreen: FC = () => {
    const route: any = useRoute()

    const type = route?.params?.type?.toUpperCase()
    const title = route?.params?.title?.toUpperCase()

    const handleGenerateQrCode = (data: any) => {
        if (!data) {
            return
        }
        RNQRGenerator.generate({
            value: data,
            height: 400,
            width: 400,
            base64: true,
            correctionLevel: 'H',
            padding: { top: 10, right: 10, bottom: 10, left: 10 }
        })
            .then(async (response) => {
                const { uri, width, height, base64 } = response;

                const DownloadedMedia = await handleDownloadMedia(uri)
                console.log({ DownloadedMedia });

            })
            .catch(error => console.log('Cannot create QR code', error));



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

                <If condition={type == QR_TYPE.LOCATION}>
                    <GenerateLocation
                        onGenerate={(data: any) => handleGenerateQrCode(data)}
                    />
                </If>

                <If condition={type == QR_TYPE.EVENT}>
                    <GenerateEvents
                        onGenerate={(data: any) => handleGenerateQrCode(data)}
                    />
                </If>

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

