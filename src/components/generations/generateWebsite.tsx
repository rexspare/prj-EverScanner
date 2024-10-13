import React, { FC, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { PrimaryButton, PrimaryInput } from '..'
import { hp } from '../../assets/stylesGuide'
import { Website } from '../../assets/svg'
import { appConfigtStateSelectors, useAppConfigState } from '../../states/appConfig'
import { showToast } from '../../utils/myUtils'
interface IGenerateProps {
    onGenerate: Function;
}
const GenerateWebsite: FC<IGenerateProps> = (props) => {
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

            <Website width={hp(8)} height={hp(8)} />

            <PrimaryInput
                title={lang["_34"]}
                placeholder={"www.qrcode.com"}
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