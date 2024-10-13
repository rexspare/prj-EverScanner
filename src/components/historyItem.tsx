import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { Delete, ScanHistory } from '../assets/svg'
import { COLORS, FONT_SIZE, FONTS, hp } from '../assets/stylesGuide'
import BodyText from './bodyText'
import moment from 'moment'

interface IHistoryItem {
    item: any;
    onPress?: Function;
    onDelete?: Function;
}

const HistoryItem: FC<IHistoryItem> = (props: IHistoryItem) => {
    const { item, onPress = () => { }, onDelete = () => { } } = props
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.main}
            onPress={() => onPress()}
        >
            <ScanHistory width={hp(3.5)} height={hp(3.5)} />

            <View style={styles.context}>

                <View style={styles.row}>
                    <BodyText style={styles.title} numberOfLines={1}>{item.data}</BodyText>

                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => onDelete()}
                        hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
                    >
                        <Delete width={hp(2.5)} height={hp(2.5)} />
                    </TouchableOpacity>
                </View>

                <View style={styles.row}>
                    <BodyText style={styles.subtle}></BodyText>

                    <BodyText style={styles.subtle}>{moment.unix(item?.createdAt).format('DD MMM YYYY, hh:mm A')}</BodyText>
                </View>

            </View>

        </TouchableOpacity>
    )
}

export default HistoryItem

const styles = StyleSheet.create({
    main: {
        width: '90%',
        borderRadius: 10,
        borderColor: "#FFFFF",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '4%',
        paddingVertical: hp(1.5),
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,

        elevation: 18,
        backgroundColor: COLORS.BACKGROUND,
        alignSelf: 'center'
    },
    context: {
        flex: 1,
        marginLeft: '4%',

    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontFamily: FONTS.MEDIUM
    },
    subtle: {
        color: COLORS.INACTIVE,
        fontSize: FONT_SIZE._10,
        marginTop: 3
    }
})