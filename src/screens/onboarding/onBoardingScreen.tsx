import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { View } from 'react-native'
import { ASYNC_KEYS, SCREENS } from '../../assets/constants'
import { hp } from '../../assets/stylesGuide'
import { QRScan } from '../../assets/svg'
import { BodyText, Label, Layout, PrimaryButton } from '../../components'
import { InitialNavigationStackParamList } from '../../navigation/rootStack'
import { setItem } from '../../services/asyncStorage'
import { appConfigtStateSelectors, useAppConfigState } from '../../states/appConfig'
import styles from './styles.onboarding'

const OnBoardingScreen = () => {
    const lang = useAppConfigState(appConfigtStateSelectors.language)
    const navigation = useNavigation<NativeStackNavigationProp<InitialNavigationStackParamList>>();

    const handleContinue = async () => {
        await setItem(ASYNC_KEYS.ONBOARDING, "true")
        navigation.replace(SCREENS.APP)
    }


    return (
        <Layout
            fixed={true}
            containerStyle={styles.main}>

            {/* ICON */}
            <View style={styles.iconContainer}>
                <QRScan width={hp(20)} height={hp(20)} />
            </View>

            {/* BOTTOM CONTEXT */}
            <View style={styles.bottomSheet}>
                <View style={styles.line}></View>

                <Label style={styles.txt1}>{lang['_01']}</Label>

                <BodyText style={styles.txt2}>{lang['_02']}</BodyText>

                <PrimaryButton
                    title={lang['_03']}
                    onPress={() => handleContinue()}
                />

            </View>


        </Layout>
    )
}

export default OnBoardingScreen
