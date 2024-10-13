import React, { FC, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { PrimaryButton, PrimaryInput } from '..'
import { hp } from '../../assets/stylesGuide'
import { Instagram } from '../../assets/svg'
import { appConfigtStateSelectors, useAppConfigState } from '../../states/appConfig'
import { showToast } from '../../utils/myUtils'

interface IGenerateProps {
    onGenerate: Function;
}
const GenerateInstagram: FC<IGenerateProps> = (props) => {
    const lang = useAppConfigState(appConfigtStateSelectors.language)
    const { onGenerate = () => { } } = props
    const [value, setvalue] = useState("")

    const handleGenerate = () => {
        if (!value) {
            showToast(lang['_87'])
            return
        }

        const data = `https://www.instagram.com/${value}`
        onGenerate(data)
    }

    return (
        <View style={styles.main}>

            <Instagram width={hp(8)} height={hp(8)} />

            <PrimaryInput
                title={lang["_45"]}
                placeholder={lang["_46"]}
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