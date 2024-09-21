import React from 'react'
import { StyleSheet, View } from 'react-native'
import { PrimaryButton, PrimaryInput } from '..'
import { hp } from '../../assets/stylesGuide'
import { Twitter, Website, Wifi } from '../../assets/svg'
import { appConfigtStateSelectors, useAppConfigState } from '../../states/appConfig'

const GenerateTwitter = () => {
    const lang = useAppConfigState(appConfigtStateSelectors.language)
    return (
        <View style={styles.main}>

            <Twitter width={hp(8)} height={hp(8)} />

            <PrimaryInput
                title={lang["_43"]}
                placeholder={lang["_44"]}
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

export default GenerateTwitter

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