import React from 'react'
import { StyleSheet, View } from 'react-native'
import { PrimaryButton, PrimaryInput } from '..'
import { hp } from '../../assets/stylesGuide'
import { Website } from '../../assets/svg'
import { appConfigtStateSelectors, useAppConfigState } from '../../states/appConfig'

const GenerateWebsite = () => {
    const lang = useAppConfigState(appConfigtStateSelectors.language)
    return (
        <View style={styles.main}>

            <Website width={hp(8)} height={hp(8)} />

            <PrimaryInput
                title={lang["_34"]}
                placeholder={"www.qrcode.com"}
                value={''}
            />

            <PrimaryButton
                title={lang['_33']}
                onPress={() => { }}
                style={styles.btn}
            />
        </View>
    )
}

export default GenerateWebsite

const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingHorizontal: '5%',
        alignItems: 'center',
        marginTop: hp(5)
    },
    btn: {
        marginTop: hp(3)
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
    },
})