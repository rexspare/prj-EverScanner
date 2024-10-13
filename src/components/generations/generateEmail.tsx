import { StyleSheet, View } from 'react-native'
import React, { FC, useState } from 'react'
import { COMMON_STYLES, hp } from '../../assets/stylesGuide'
import { Email, Text } from '../../assets/svg'
import { PrimaryButton, PrimaryInput } from '..'
import { appConfigtStateSelectors, useAppConfigState } from '../../states/appConfig'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { showToast } from '../../utils/myUtils'
interface IGenerateProps {
    onGenerate: Function;
}
const GenerateEmail: FC<IGenerateProps> = (props) => {
    const lang = useAppConfigState(appConfigtStateSelectors.language)
    const { onGenerate = () => { } } = props
    const [email, setemail] = useState("")
    const [subject, setsubject] = useState("")
    const [message, setmessage] = useState("")

    const handleGenerate = () => {
        if (!email || !subject || !message) {
            showToast(lang['_87'])
            return
        }

        const data = `mailto:${email}?subject=${subject}&body=${message}`
        onGenerate(data)
    }

    return (
        <View style={styles.main}>

            <Email width={hp(8)} height={hp(8)} />

            <PrimaryInput
                title={lang["_39"]}
                placeholder={lang["_40"]}
                value={email}
                onChange={(txt) => setemail(txt)}
            />
            <PrimaryInput
                title={lang["_90"]}
                placeholder={lang["_90"]}
                value={subject}
                onChange={(txt) => setsubject(txt)}
            />

            <PrimaryInput
                title={lang["_91"]}
                placeholder={lang["_91"]}
                value={message}
                onChange={(txt) => setmessage(txt)}
                multiline={true}
            />



            <PrimaryButton
                title={lang['_33']}
                onPress={() => handleGenerate()}
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