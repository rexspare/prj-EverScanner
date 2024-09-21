import { StyleSheet, View } from 'react-native'
import React from 'react'
import { COMMON_STYLES, hp } from '../../assets/stylesGuide'
import { Email, Text } from '../../assets/svg'
import { PrimaryButton, PrimaryInput } from '..'
import { appConfigtStateSelectors, useAppConfigState } from '../../states/appConfig'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const GenerateEmail = () => {
    const lang = useAppConfigState(appConfigtStateSelectors.language)
    return (
        <View style={styles.main}>

            <Email width={hp(8)} height={hp(8)} />

            <PrimaryInput
                title={lang["_39"]}
                placeholder={lang["_40"]}
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

export default GenerateEmail

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