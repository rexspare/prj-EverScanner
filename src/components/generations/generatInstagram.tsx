import { StyleSheet, View } from 'react-native'
import React from 'react'
import { COMMON_STYLES, hp } from '../../assets/stylesGuide'
import { Instagram, Text } from '../../assets/svg'
import { PrimaryButton, PrimaryInput } from '..'
import { appConfigtStateSelectors, useAppConfigState } from '../../states/appConfig'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const GenerateInstagram = () => {
    const lang = useAppConfigState(appConfigtStateSelectors.language)
    return (
        <View style={styles.main}>

            <Instagram width={hp(8)} height={hp(8)} />

            <PrimaryInput
                title={lang["_45"]}
                placeholder={lang["_46"]}
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

export default GenerateInstagram

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