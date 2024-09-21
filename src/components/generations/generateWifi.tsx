import React from 'react'
import { StyleSheet, View } from 'react-native'
import { PrimaryButton, PrimaryInput } from '..'
import { hp } from '../../assets/stylesGuide'
import { Website, Wifi } from '../../assets/svg'
import { appConfigtStateSelectors, useAppConfigState } from '../../states/appConfig'

const GenerateWifi = () => {
    const lang = useAppConfigState(appConfigtStateSelectors.language)
    return (
        <View style={styles.main}>

            <Wifi width={hp(8)} height={hp(8)} />

            <PrimaryInput
                title={lang["_35"]}
                placeholder={lang["_36"]}
                value={''}
            />

            <PrimaryInput
                title={lang["_37"]}
                placeholder={lang["_38"]}
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

export default GenerateWifi

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