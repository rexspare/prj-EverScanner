import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONT_SIZE, FONTS, hp, wp } from '../assets/stylesGuide';
import BodyText from './bodyText';

interface ITypeItem {
    item: any;
    index: number;
    onPress: Function;
}

const TypeItem = (props: ITypeItem) => {
    const { item, index, onPress = () => { } } = props
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.main}
            onPress={() => onPress()}
        >
            {item.icon}
            <View style={styles.textContainer}>
                <BodyText style={styles.text}>{item.text}</BodyText>
            </View>
        </TouchableOpacity>
    )
}

export default TypeItem

const styles = StyleSheet.create({
    main: {
        borderWidth: 1.5,
        borderColor: COLORS.PRIMARY,
        width: wp(20),
        maxWidth: 100,
        marginHorizontal: wp(2),
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: hp(3),
        paddingTop: hp(2),
        paddingBottom: hp(2) + (FONT_SIZE._10 / 2),
        borderRadius: 5,

    },
    textContainer: {
        paddingHorizontal: 5,
        paddingVertical: 2,
        backgroundColor: COLORS.PRIMARY,
        borderRadius: 2,
        position: 'absolute',
        bottom: - ((FONT_SIZE._10 / 2) + 3)
    },
    text: {
        fontSize: FONT_SIZE._10,
        fontFamily: FONTS.SEMI_BOLD,
        color: COLORS.SECONDARY
    }
})