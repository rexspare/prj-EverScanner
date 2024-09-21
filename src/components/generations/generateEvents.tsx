import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { PrimaryButton, PrimaryInput } from '..'
import { hp } from '../../assets/stylesGuide'
import { Event } from '../../assets/svg'
import { appConfigtStateSelectors, useAppConfigState } from '../../states/appConfig'
import DatePicker from 'react-native-date-picker'
import moment from 'moment'

const GenerateEvents = () => {
    const lang = useAppConfigState(appConfigtStateSelectors.language)
    const [startDate, setstartDate] = useState(new Date())
    const [startOpen, setstartOpen] = useState(false)
    const [endDate, setendDate] = useState(new Date())
    const [endOpen, setendOpen] = useState(false)

    const [formatedStateDate, setformatedStateDate] = useState("")
    const [formattedEndDate, setformattedEndDate] = useState("")

    const handleStartDate = (date: any) => {
        setstartOpen(false)
        setstartDate(date)
        setformatedStateDate(moment(date).format('DD MMMM YY, HH:MM A'))
    }

    const handleEndDate = (date: any) => {
        setendOpen(false)
        setendDate(date)
        setformattedEndDate(moment(date).format('DD MMMM YY, HH:MM A'))
    }


    return (
        <View style={styles.main}>

            <Event width={hp(8)} height={hp(8)} />

            <PrimaryInput
                title={lang["_50"]}
                placeholder={lang["_51"]}
                value={''}
            />

            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setstartOpen(true)}
            >
                <PrimaryInput
                    title={lang["_52"]}
                    placeholder={"12 Dec 2022, 10:40 pm"}
                    value={formatedStateDate}
                    editable={false}
                />
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setendOpen(true)}
            >
                <PrimaryInput
                    title={lang["_53"]}
                    placeholder={"12 Dec 2022, 10:40 pm"}
                    value={formattedEndDate}
                    editable={false}
                />
            </TouchableOpacity>

            <PrimaryInput
                title={lang["_54"]}
                placeholder={lang["_55"]}
                value={''}
            />

            <PrimaryInput
                title={lang["_56"]}
                placeholder={lang["_57"]}
                value={''}
                multiline={true}
            />



            <PrimaryButton
                title={lang['_33']}
                onPress={() => { }}
                style={styles.btn}
            />

            <DatePicker
                modal
                mode='datetime'
                open={startOpen}
                date={startDate}
                onConfirm={handleStartDate}
                onCancel={() => {
                    setstartOpen(false)
                }}
            />

            <DatePicker
                modal
                mode='datetime'
                open={endOpen}
                date={endDate}
                onConfirm={handleEndDate}
                onCancel={() => {
                    setendOpen(false)
                }}
            />
        </View>
    )
}

export default GenerateEvents

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