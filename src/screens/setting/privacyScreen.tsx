import React from 'react'
import CountryFlag from "react-native-country-flag"
import FontAwesome from 'react-native-vector-icons/FontAwesome6'
import { COLORS, hp, SIZE } from '../../assets/stylesGuide'
import { BackeHeader, Label, Layout, SettingItem } from '../../components'
import { appConfigtStateSelectors, useAppConfigState } from '../../states/appConfig'
import styles from './styles.setting'
import RenderHtml from 'react-native-render-html';
import { PRIVACY_HTML } from '../../data/privacy'

const PrivacyScreen = () => {
    const lang = useAppConfigState(appConfigtStateSelectors.language)
    const source = {
        html: PRIVACY_HTML
    };

    return (
        <Layout>
            <BackeHeader />
            <Layout
                fixed={false}
                contentContainerStyle={{ backgroundColor: COLORS.WHITE, paddingHorizontal:'5%'}}
            >
                <RenderHtml
                    contentWidth={SIZE.WIDTH}
                    source={source}
                />


            </Layout>

        </Layout>
    )
}

export default PrivacyScreen
