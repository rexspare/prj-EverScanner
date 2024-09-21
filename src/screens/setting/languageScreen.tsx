import React from 'react'
import CountryFlag from "react-native-country-flag"
import FontAwesome from 'react-native-vector-icons/FontAwesome6'
import { COLORS, hp } from '../../assets/stylesGuide'
import { BackeHeader, Label, Layout, SettingItem } from '../../components'
import { appConfigtStateSelectors, useAppConfigState } from '../../states/appConfig'
import styles from './styles.setting'

const LanguageScreen = () => {
    const lang = useAppConfigState(appConfigtStateSelectors.language)

    const LANGUAGES = [
        {
            id: 1,
            title: "English",
            icon: <CountryFlag isoCode="us" size={hp(2)} />,
            onPress: () => { },
        },
        {
            id: 2,
            title: "Français",
            icon: <CountryFlag isoCode="fr" size={hp(2)} />,
            onPress: () => { },
        },
        {
            id: 2,
            title: "Español",
            icon: <CountryFlag isoCode="es" size={hp(2)} />,
            onPress: () => { },
        },
        {
            id: 2,
            title: "Deutsch",
            icon: <CountryFlag isoCode="de" size={hp(2)} />,
            onPress: () => { },
        },
        {
            id: 2,
            title: "中文",
            icon: <CountryFlag isoCode="cn" size={hp(2)} />,
            onPress: () => { },
        },
        {
            id: 2,
            title: "العربية",
            icon: <CountryFlag isoCode="sa" size={hp(2)} />,
            onPress: () => { },
        },
        {
            id: 2,
            title: "Русский",
            icon: <CountryFlag isoCode="ru" size={hp(2)} />,
            onPress: () => { },
        },
        {
            id: 2,
            title: "हिन्दी",
            icon: <CountryFlag isoCode="in" size={hp(2)} />,
            onPress: () => { },
        },
        {
            id: 2,
            title: "Português",
            icon: <CountryFlag isoCode="pt" size={hp(2)} />,
            onPress: () => { },
        },
        {
            id: 2,
            title: "日本語",
            icon: <CountryFlag isoCode="jp" size={hp(2)} />,
            onPress: () => { },
        },
        {
            id: 2,
            title: "Italiano",
            icon: <CountryFlag isoCode="it" size={hp(2)} />,
            onPress: () => { },
        },
        {
            id: 2,
            title: "한국어",
            icon: <CountryFlag isoCode="kr" size={hp(2)} />,
            onPress: () => { },
        },
        {
            id: 2,
            title: "Türkçe",
            icon: <CountryFlag isoCode="tr" size={hp(2)} />,
            onPress: () => { },
        },
        {
            id: 2,
            title: "Ελληνικά",
            icon: <CountryFlag isoCode="gr" size={hp(2)} />,
            onPress: () => { },
        },
        {
            id: 2,
            title: "Svenska",
            icon: <CountryFlag isoCode="se" size={hp(2)} />,
            onPress: () => { },
        },
        {
            id: 2,
            title: "Nederlands",
            icon: <CountryFlag isoCode="nl" size={hp(2)} />,
            onPress: () => { },
        },
        {
            id: 2,
            title: "Polski",
            icon: <CountryFlag isoCode="pl" size={hp(2)} />,
            onPress: () => { },
        },
        {
            id: 2,
            title: "فارسی",
            icon: <CountryFlag isoCode="ir" size={hp(2)} />,
            onPress: () => { },
        },
        {
            id: 2,
            title: "עברית",
            icon: <CountryFlag isoCode="il" size={hp(2)} />,
            onPress: () => { },
        },
        {
            id: 2,
            title: "ไทย",
            icon: <CountryFlag isoCode="th" size={hp(2)} />,
            onPress: () => { },
        },
        {
            id: 2,
            title: "Tiếng Việt",
            icon: <CountryFlag isoCode="vn" size={hp(2)} />,
            onPress: () => { },
        },
        {
            id: 2,
            title: "Magyar",
            icon: <CountryFlag isoCode="hu" size={hp(2)} />,
            onPress: () => { },
        },
        {
            id: 2,
            title: "Suomi",
            icon: <CountryFlag isoCode="fi" size={hp(2)} />,
            onPress: () => { },
        },
        {
            id: 2,
            title: "Norsk",
            icon: <CountryFlag isoCode="no" size={hp(2)} />,
            onPress: () => { },
        },
        {
            id: 2,
            title: "Română",
            icon: <CountryFlag isoCode="ro" size={hp(2)} />,
            onPress: () => { },
        },
        {
            id: 2,
            title: "Čeština",
            icon: <CountryFlag isoCode="cz" size={hp(2)} />,
            onPress: () => { },
        },
        {
            id: 2,
            title: "Українська",
            icon: <CountryFlag isoCode="ua" size={hp(2)} />,
            onPress: () => { },
        },
        {
            id: 2,
            title: "اُردُو",
            icon: <CountryFlag isoCode="pk" size={hp(2)} />,
            onPress: () => { },
        },
        {
            id: 2,
            title: "Bahasa Indonesia",
            icon: <CountryFlag isoCode="id" size={hp(2)} />,
            onPress: () => { },
        },
        {
            id: 2,
            title: "Tagalog",
            icon: <CountryFlag isoCode="ph" size={hp(2)} />,
            onPress: () => { },
        },
        {
            id: 2,
            title: "Afrikaans",
            icon: <CountryFlag isoCode="za" size={hp(2)} />,
            onPress: () => { },
        },

    ]


    return (
        <Layout>
            <BackeHeader />
            <Layout
                fixed={false}
                contentContainerStyle={styles.main}
            >

                <Label style={styles.title}>{lang['_20']}</Label>

                {
                    LANGUAGES.map((item, index) => (
                        <SettingItem
                            key={index}
                            item={{
                                ...item,
                                ...(lang['lang'] == item?.title && { element: <FontAwesome name="check" color={COLORS.PRIMARY} size={hp(2)} /> })
                            }}
                            onPress={() => item.onPress()}
                        />
                    ))
                }


            </Layout>

        </Layout>
    )
}

export default LanguageScreen
