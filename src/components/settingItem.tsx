import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { COLORS, FONT_SIZE, FONTS, hp } from '../assets/stylesGuide';
import BodyText from './bodyText';
import If from './if';

interface ISettingItem {
    item: any;
    onPress: Function;
}

const SettingItem: FC<ISettingItem> = (props: ISettingItem) => {
    const { item, onPress = () => { } } = props

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.main}
            onPress={() => onPress()}
        >
            {item.icon}
            <View style={styles.txtContainer}>
                <BodyText style={styles.title}>{item.title}</BodyText>
                <If condition={item?.subtle}>
                    <BodyText style={styles.subtle}>{item.subtle}</BodyText>
                </If>
            </View>

            <If condition={item?.element}>
                {item.element}
            </If>

        </TouchableOpacity>
    )
}

export default SettingItem

const styles = StyleSheet.create({
    main: {
        width: '100%',
        borderBottomWidth: 2,
        borderColor: COLORS.PRIMARY,
        marginVertical: hp(1.5),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '4%',
        paddingVertical: hp(1.5),
        borderRadius: 10,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,

        elevation: 18,
        backgroundColor: COLORS.BACKGROUND
    },
    txtContainer: {
        flex: 1,
        alignItems: 'flex-start',
        marginHorizontal: 10
    },
    title: {
        color: COLORS.INACTIVE,
        fontFamily: FONTS.MEDIUM,
        fontSize: FONT_SIZE._16
    },
    subtle: {
        color: COLORS.INACTIVE,
    }
})