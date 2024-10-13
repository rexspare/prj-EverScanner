import React, { FC, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Label, PrimaryButton, PrimaryInput } from '..'
import { FONT_SIZE, hp } from '../../assets/stylesGuide'
import { Contact } from '../../assets/svg'
import { appConfigtStateSelectors, useAppConfigState } from '../../states/appConfig'
import { showToast } from '../../utils/myUtils'
interface IGenerateProps {
    onGenerate: Function;
}
const GenerateContact: FC<IGenerateProps> = (props) => {
    const lang = useAppConfigState(appConfigtStateSelectors.language)
    const { onGenerate = () => { } } = props

    const [fName, setfName] = useState("")
    const [lName, setlName] = useState("")
    const [mobile, setmobile] = useState("")
    const [phone, setphone] = useState("")
    const [fax, setfax] = useState("")
    const [email, setemail] = useState("")
    const [company, setcompany] = useState("")
    const [jobTitle, setjobTitle] = useState("")
    const [street, setstreet] = useState("")
    const [city, setcity] = useState("")
    const [zip, setzip] = useState("")
    const [state, setstate] = useState("")
    const [country, setcountry] = useState("")
    const [website, setwebsite] = useState("")

    const handleGenerate = () => {
        if (!fName || !lName || mobile) {
            showToast(lang['_87'])
            return
        }

        const data = `BEGIN:VCARD
            VERSION:3.0
            N:${fName};${lName}
            FN:${fName} ${lName}
            ORG:${company}
            TITLE:${jobTitle}
            ADR:;;${street};${city};${state};${zip};${country}
            TEL;WORK;VOICE:${phone}
            TEL;CELL:${mobile}
            TEL;FAX:${fax}
            EMAIL;WORK;INTERNET:${email}
            URL:${website}
            END:VCARD`
        onGenerate(data)
    }

    return (
        <View style={styles.main}>

            <Contact width={hp(8)} height={hp(8)} />

            <View style={styles.row}>
                <PrimaryInput
                    title={lang["_70"] + "*"}
                    placeholder={lang["_70"]}
                    value={fName}
                    onChange={(txt) => setfName(txt)}
                    containerStyles={styles.inputHalf}
                />

                <PrimaryInput
                    title={lang["_71"] + "*"}
                    placeholder={lang["_71"]}
                    value={lName}
                    onChange={(txt) => setlName(txt)}
                    containerStyles={styles.inputHalf}
                />

            </View>

            <Label style={styles.heading}>{lang['_72']}</Label>
            <PrimaryInput
                title={lang["_73"] + "*"}
                placeholder={lang["_73"]}
                value={mobile}
                onChange={(txt) => setmobile(txt)}
            />

            <View style={styles.row}>
                <PrimaryInput
                    title={lang["_74"]}
                    placeholder={lang["_74"]}
                    value={phone}
                    onChange={(txt) => setphone(txt)}
                    containerStyles={styles.inputHalf}
                />

                <PrimaryInput
                    title={lang["_75"]}
                    placeholder={lang["_75"]}
                    value={fax}
                    onChange={(txt) => setfax(txt)}
                    containerStyles={styles.inputHalf}
                />

            </View>

            <PrimaryInput
                title={lang["_76"]}
                placeholder={lang["_76"]}
                value={email}
                onChange={(txt) => setemail(txt)}
            />

            <Label style={styles.heading}>{lang['_77']}</Label>

            <View style={styles.row}>
                <PrimaryInput
                    title={lang["_78"]}
                    placeholder={lang["_78"]}
                    value={company}
                    onChange={(txt) => setcompany(txt)}
                    containerStyles={styles.inputHalf}
                />

                <PrimaryInput
                    title={lang["_79"]}
                    placeholder={lang["_79"]}
                    value={jobTitle}
                    onChange={(txt) => setjobTitle(txt)}
                    containerStyles={styles.inputHalf}
                />

            </View>

            <Label style={styles.heading}>{lang['_86']}</Label>

            <PrimaryInput
                title={lang["_80"]}
                placeholder={lang["_80"]}
                value={street}
                onChange={(txt) => setstreet(txt)}
            />

            <View style={styles.row}>
                <PrimaryInput
                    title={lang["_81"]}
                    placeholder={lang["_81"]}
                    value={city}
                    onChange={(txt) => setcity(txt)}
                    containerStyles={styles.inputHalf}
                />

                <PrimaryInput
                    title={lang["_82"]}
                    placeholder={lang["_82"]}
                    value={zip}
                    onChange={(txt) => setzip(txt)}
                    containerStyles={styles.inputHalf}
                />

            </View>

            <PrimaryInput
                title={lang["_83"]}
                placeholder={lang["_83"]}
                value={state}
                onChange={(txt) => setstate(txt)}
            />

            <PrimaryInput
                title={lang["_84"]}
                placeholder={lang["_84"]}
                value={country}
                onChange={(txt) => setcountry(txt)}
            />

            <PrimaryInput
                title={lang["_85"]}
                placeholder={lang["_85"]}
                value={website}
                onChange={(txt) => setwebsite(txt)}
            />

            {/* BUTTON */}

            <PrimaryButton
                title={lang['_33']}
                onPress={() => handleGenerate()}
                style={styles.btn}
            />
        </View>
    )
}

export default GenerateContact

const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingHorizontal: '5%',
        alignItems: 'center',
        marginTop: hp(5)
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'

    },
    inputHalf: {
        width: '48%'
    },
    heading: {
        textAlign: 'left',
        width: '100%',
        fontSize: FONT_SIZE._20,
        marginBottom: 0
    },

    ttxt: {

    },

    btn: {
        marginTop: hp(3)
    },
})