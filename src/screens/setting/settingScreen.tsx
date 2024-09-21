import React, { useState } from 'react'
import IonIcons from 'react-native-vector-icons/Ionicons'
import { COLORS, hp } from '../../assets/stylesGuide'
import { Privacy, Rate, Share, Vibrate } from '../../assets/svg'
import { BackeHeader, Label, Layout, SettingItem } from '../../components'
import { appConfigtStateSelectors, useAppConfigState } from '../../states/appConfig'
import styles from './styles.setting'
import { Switch } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SCREENS } from '../../assets/constants'

const SettingScreen = () => {
    const navigation = useNavigation()
    const lang = useAppConfigState(appConfigtStateSelectors.language)
    const vibrateEnabled = useAppConfigState(appConfigtStateSelectors.vibrateEnabled)
    const setVibrateEnabled = useAppConfigState(appConfigtStateSelectors.setVibrateEnabled)
    const toggleSwitch = () => setVibrateEnabled(!vibrateEnabled);

    const SETTINGS = [
        {
            id: 1,
            title: lang['_18'],
            subtle: lang['_19'],
            icon: <Vibrate width={hp(2.6)} height={hp(2.6)} />,
            onPress: () => toggleSwitch(),
            element: <Switch
                trackColor={{ false: COLORS.GREY_40, true: COLORS.PRIMARY }}
                thumbColor={vibrateEnabled ? COLORS.PRIMARY : COLORS.INACTIVE}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={vibrateEnabled}
            />,
        },
        {
            id: 2,
            title: lang['_20'],
            subtle: lang['_21'],
            icon: <IonIcons name='language' color={COLORS.INACTIVE} size={hp(2.6)} />,
            onPress: () => navigation.navigate(SCREENS.LANGUAGE),
        },
        // {
        //     id: 3,
        //     title: lang['_29'],
        //     subtle: lang['_30'],
        //     icon: <IonIcons name='color-palette' color={COLORS.INACTIVE} size={hp(2.6)} />,
        //     onPress: () => { },
        // }
    ]


    const SUPPORT = [
        {
            id: 1,
            title: lang['_23'],
            subtle: lang['_24'],
            icon: <Rate width={hp(2.6)} height={hp(2.6)} />,
            onPress: () => { },
        },
        {
            id: 2,
            title: lang['_25'],
            subtle: lang['_26'],
            icon: <Privacy width={hp(2.6)} height={hp(2.6)} />,
            onPress: () => { },
        },
        {
            id: 4,
            title: lang['_27'],
            subtle: lang['_28'],
            icon: <Share width={hp(2.6)} height={hp(2.6)} />,
            onPress: () => { },
        }
    ]

    return (
        <Layout>
            <BackeHeader />
            <Layout
                fixed={false}
                contentContainerStyle={styles.main}
            >

                <Label style={styles.title}>{lang['_17']}</Label>

                {
                    SETTINGS.map((item, index) => (
                        <SettingItem
                            key={index}
                            item={item}
                            onPress={() => item.onPress()}
                        />
                    ))
                }

                <Label style={styles.title}>{lang['_22']}</Label>

                {
                    SUPPORT.map((item, index) => (
                        <SettingItem
                            key={index}
                            item={item}
                            onPress={() => item.onPress()}
                        />
                    ))
                }

            </Layout>

        </Layout>
    )
}

export default SettingScreen
