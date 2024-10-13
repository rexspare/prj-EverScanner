import React, { FC, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { AnimatedCheckBox, BodyText, PrimaryButton, PrimaryInput, RadioButton } from '..'
import { COMMON_STYLES, FONT_SIZE, FONTS, hp } from '../../assets/stylesGuide'
import { Wifi } from '../../assets/svg'
import { appConfigtStateSelectors, useAppConfigState } from '../../states/appConfig'
import { showToast } from '../../utils/myUtils'
interface IGenerateProps {
    onGenerate: Function;
}
const GenerateWifi: FC<IGenerateProps> = (props) => {
    const lang = useAppConfigState(appConfigtStateSelectors.language)
    const { onGenerate = () => { } } = props
    const [name, setname] = useState('')
    const [password, setpassword] = useState('')
    const [hidden, sethidden] = useState(false)
    const [encryption, setencryption] = useState<"nopass" | "WPA" | "WEP">("WPA")

    const handleGenerate = () => {
        if (encryption == 'nopass') {
            if (!name) {
                showToast(lang['_87'])
                return
            }
        } else {
            if (!name || !password) {
                showToast(lang['_87'])
                return
            }
        }
        const data = `WIFI:T:${encryption};S:${name};P:${password};H:${hidden ? "true" : ""};;`
        onGenerate(data);
    }

    return (
        <View style={styles.main}>

            <Wifi width={hp(8)} height={hp(8)} />

            <PrimaryInput
                title={lang["_35"]}
                placeholder={lang["_36"]}
                value={name}
                onChange={(txt) => setname(txt)}
            />

            {
                encryption != 'nopass' &&
                <PrimaryInput
                    title={lang["_37"]}
                    placeholder={lang["_38"]}
                    value={password}
                    onChange={(txt) => setpassword(txt)}
                />
            }

            <View style={styles.row}>
                <BodyText style={styles.title}>{lang["_88"]}</BodyText>

                <AnimatedCheckBox
                    checked={hidden}
                    onPress={() => sethidden(!hidden)}
                />
            </View>

            <View style={styles.securityContainer}>
                <BodyText style={styles.title}>{lang["_89"]}</BodyText>

                <View style={styles.rsecurityRow}>
                    <RadioButton
                        title={"None"}
                        checked={encryption == 'nopass'}
                        onPress={() => setencryption('nopass')}
                    />

                    <RadioButton
                        title={"WPA/WPA2"}
                        checked={encryption == 'WPA'}
                        onPress={() => setencryption('WPA')}
                    />

                    <RadioButton
                        title={"WEP"}
                        checked={encryption == 'WEP'}
                        onPress={() => setencryption('WEP')}
                    />
                </View>

            </View>

            <PrimaryButton
                title={lang['_33']}
                onPress={() => handleGenerate()}
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
    row: {
        ...COMMON_STYLES.flexRowSpaceBetween,
        justifyContent: 'flex-start',
        width: '100%',
        marginVertical: hp(1)
    },
    title: {
        textAlign: 'left',
        fontFamily: FONTS.REGULAR,
        fontSize: FONT_SIZE._14,
        marginRight: 10
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
})