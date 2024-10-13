import React, { FC, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { BodyText, PrimaryButton, PrimaryInput, RadioButton } from '..'
import { COMMON_STYLES, FONT_SIZE, FONTS, hp } from '../../assets/stylesGuide'
import { Twitter } from '../../assets/svg'
import { appConfigtStateSelectors, useAppConfigState } from '../../states/appConfig'
import { showToast } from '../../utils/myUtils'
interface IGenerateProps {
    onGenerate: Function;
}
const GenerateTwitter: FC<IGenerateProps> = (props) => {
    const lang = useAppConfigState(appConfigtStateSelectors.language)
    const { onGenerate = () => { } } = props
    const [type, settype] = useState<"username" | "tweet">("username")
    const [value, setvalue] = useState("")

    const handleGenerate = () => {
        if (!value) {
            showToast(lang['_87'])
            return
        }

        const data = type == 'username' ? `https://twitter.com/${value}` : ` https://twitter.com/intent/tweet?text=${value.replace(/@/g, '%40').replace(/ /g, '%20')}`
        onGenerate(data)
    }

    return (
        <View style={styles.main}>

            <Twitter width={hp(8)} height={hp(8)} />


            <View style={styles.securityContainer}>
                <BodyText style={styles.title}>{lang["_94"]}</BodyText>

                <View style={styles.rsecurityRow}>
                    <RadioButton
                        title={"Account"}
                        checked={type == 'username'}
                        onPress={() => settype('username')}
                    />

                    <RadioButton
                        title={"Tweet"}
                        checked={type == 'tweet'}
                        onPress={() => settype('tweet')}
                    />

                </View>

            </View>

            <PrimaryInput
                title={lang[type == 'username' ? "_43" : "_95"]}
                placeholder={lang[type == 'username' ? "_43" : "@Everscanner this is a tweet"]}
                multiline={type == 'tweet'}
                value={value}
                onChange={(txt) => setvalue(txt)}
            />

            <PrimaryButton
                title={lang['_33']}
                onPress={() => handleGenerate()}
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
    securityContainer: {
        width: '100%',
        marginVertical: hp(1)
    },
    rsecurityRow: {
        ...COMMON_STYLES.flexRowSpaceBetween,
        justifyContent: 'space-evenly',
        width: '100%',
        marginVertical: hp(1)
    },
    title: {
        textAlign: 'left',
        fontFamily: FONTS.REGULAR,
        fontSize: FONT_SIZE._14,
        marginRight: 10
    },
})