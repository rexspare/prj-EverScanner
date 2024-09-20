import React from 'react'
import { Text, View } from 'react-native'
import { BodyText, Label, Layout, PrimaryButton } from '../../components'
import styles from './styles.onboarding'
import { QRScan } from '../../assets/svg'
import { hp } from '../../assets/stylesGuide'
import { appConfigtStateSelectors, useAppConfigState } from '../../states/appConfig'

const OnBoardingScreen = () => {
    const lang = useAppConfigState(appConfigtStateSelectors.language)
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
                    onPress={() => { }}
                />

            </View>


        </Layout>
    )
}

export default OnBoardingScreen
