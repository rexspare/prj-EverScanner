import { StyleSheet, View } from 'react-native'
import React, { FC, useState } from 'react'
import { COMMON_STYLES, hp } from '../../assets/stylesGuide'
import { Text } from '../../assets/svg'
import { PrimaryButton, PrimaryInput } from '..'
import { appConfigtStateSelectors, useAppConfigState } from '../../states/appConfig'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { showToast } from '../../utils/myUtils'

interface IGenerateProps {
    onGenerate: Function;
}

const GenerateText: FC<IGenerateProps> = (props) => {
    const { onGenerate = () => { } } = props
    const lang = useAppConfigState(appConfigtStateSelectors.language)
    const [text, settext] = useState("")

    const handleGenerate = () => {
        if (!text) {
            showToast(lang['_87'])
            return
        }
        onGenerate(text)
    }


    return (
        <View style={styles.main}>

            <Text width={hp(8)} height={hp(8)} />

            <PrimaryInput
                title={lang["_31"]}
                placeholder={lang["_32"]}
                value={text}
                onChange={(txt) => settext(txt)}
            />


            <PrimaryButton
                title={lang['_33']}
                onPress={() => handleGenerate()}
                style={styles.btn}
            />
        </View>
    )
}

export default GenerateText

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