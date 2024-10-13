import { StyleSheet, View } from 'react-native'
import React, { FC, useState } from 'react'
import { COMMON_STYLES, hp } from '../../assets/stylesGuide'
import { Telephone, Text } from '../../assets/svg'
import { PrimaryButton, PrimaryInput } from '..'
import { appConfigtStateSelectors, useAppConfigState } from '../../states/appConfig'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { showToast } from '../../utils/myUtils'
interface IGenerateProps {
    onGenerate: Function;
}
const GenerateTelephone: FC<IGenerateProps> = (props) => {
    const lang = useAppConfigState(appConfigtStateSelectors.language)
    const { onGenerate = () => { } } = props
    const [number, setnumber] = useState("")

    const handleGenerate = () => {
        if (!number) {
            showToast(lang['_87'])
            return
        }

        const data = `tel:${number}`
        onGenerate(data)
    }
    return (
        <View style={styles.main}>

            <Telephone width={hp(8)} height={hp(8)} />

            <PrimaryInput
                title={lang["_47"]}
                placeholder={"+XX XX XXXXX XX"}
                value={number}
                onChange={(txt) => setnumber(txt)}
            />


            <PrimaryButton
                title={lang['_33']}
                onPress={() => handleGenerate()}
                style={styles.btn}
            />
        </View>
    )
}

export default GenerateTelephone

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