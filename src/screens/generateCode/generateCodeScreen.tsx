import { BlurView } from '@react-native-community/blur';
import React, { FC } from 'react';
import { View } from 'react-native';
import { BackeHeader, CrossHeader, GenerateEmail, GenerateEvents, GenerateInstagram, GenerateLocation, GenerateTelephone, GenerateText, GenerateTwitter, GenerateWebsite, GenerateWhatsapp, GenerateWifi, If, Layout } from '../../components';
import styles from './styles.generateCode';
import { useRoute } from '@react-navigation/native';

const GenerateCodeScreen: FC = () => {
    const route = useRoute()

    const type = route?.params?.type?.toUpperCase()

    return (

        <Layout fixed={true} >

            <BackeHeader title={type} />

            <Layout>
                <If condition={type == "TEXT"}>
                    <GenerateText />
                </If>

                <If condition={type == "WEBSITE"}>
                    <GenerateWebsite />
                </If>

                <If condition={type == "WIFI"}>
                    <GenerateWifi />
                </If>

                <If condition={type == "EMAIL"}>
                    <GenerateEmail />
                </If>

                <If condition={type == "WHATSAPP"}>
                    <GenerateWhatsapp />
                </If>

                <If condition={type == "TWITTER"}>
                    <GenerateTwitter />
                </If>

                <If condition={type == "INSTAGRAM"}>
                    <GenerateInstagram />
                </If>

                <If condition={type == "TELEPHONE"}>
                    <GenerateTelephone />
                </If>

                <If condition={type == "LOCATION"}>
                    <GenerateLocation />
                </If>

                <If condition={type == "EVENT"}>
                    <GenerateEvents />
                </If>

            </Layout>

        </Layout >

    )
}

export default GenerateCodeScreen

