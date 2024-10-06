import React from 'react'
import { StyleSheet, View } from 'react-native'
import { BodyText, Label, PrimaryButton, PrimaryInput } from '..'
import { FONT_SIZE, hp } from '../../assets/stylesGuide'
import { Contact, Website, WhatsApp, Wifi } from '../../assets/svg'
import { appConfigtStateSelectors, useAppConfigState } from '../../states/appConfig'

const GenerateContact = () => {
    const lang = useAppConfigState(appConfigtStateSelectors.language)
    return (
        <View style={styles.main}>

            <Contact width={hp(8)} height={hp(8)} />

            <View style={styles.row}>
                <PrimaryInput
                    title={lang["_70"]}
                    placeholder={lang["_70"]}
                    value={''}
                    containerStyles={styles.inputHalf}
                />

                <PrimaryInput
                    title={lang["_71"]}
                    placeholder={lang["_71"]}
                    value={''}
                    containerStyles={styles.inputHalf}
                />

            </View>

            <Label style={styles.heading}>{lang['_72']}</Label>
            <PrimaryInput
                title={lang["_73"]}
                placeholder={lang["_73"]}
                value={''}
            />

            <View style={styles.row}>
                <PrimaryInput
                    title={lang["_74"]}
                    placeholder={lang["_74"]}
                    value={''}
                    containerStyles={styles.inputHalf}
                />

                <PrimaryInput
                    title={lang["_75"]}
                    placeholder={lang["_75"]}
                    value={''}
                    containerStyles={styles.inputHalf}
                />

            </View>

            <PrimaryInput
                title={lang["_76"]}
                placeholder={lang["_76"]}
                value={''}
            />

            <Label style={styles.heading}>{lang['_77']}</Label>

            <View style={styles.row}>
                <PrimaryInput
                    title={lang["_78"]}
                    placeholder={lang["_78"]}
                    value={''}
                    containerStyles={styles.inputHalf}
                />

                <PrimaryInput
                    title={lang["_79"]}
                    placeholder={lang["_79"]}
                    value={''}
                    containerStyles={styles.inputHalf}
                />

            </View>

            <Label style={styles.heading}>{lang['_86']}</Label>

            <PrimaryInput
                title={lang["_80"]}
                placeholder={lang["_80"]}
                value={''}
            />

            <View style={styles.row}>
                <PrimaryInput
                    title={lang["_81"]}
                    placeholder={lang["_81"]}
                    value={''}
                    containerStyles={styles.inputHalf}
                />

                <PrimaryInput
                    title={lang["_82"]}
                    placeholder={lang["_82"]}
                    value={''}
                    containerStyles={styles.inputHalf}
                />

            </View>

            <PrimaryInput
                title={lang["_83"]}
                placeholder={lang["_83"]}
                value={''}
            />

            <PrimaryInput
                title={lang["_84"]}
                placeholder={lang["_84"]}
                value={''}
            />

            <PrimaryInput
                title={lang["_85"]}
                placeholder={lang["_85"]}
                value={''}
            />

            {/* BUTTON */}

            <PrimaryButton
                title={lang['_33']}
                onPress={() => { }}
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