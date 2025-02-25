import React, { ReactNode } from 'react';
import { ActivityIndicator, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle, } from 'react-native';
import { If } from '.';
import { COLORS, COMMON_STYLES, FONTS, FONT_SIZE, hp } from '../assets/stylesGuide';


interface primaryButtonProps {
    title: string;
    onPress: () => any;
    style?: ViewStyle | [ViewStyle] | any;
    textStyle?: TextStyle | [TextStyle] | any;
    isLoading?: boolean;
    filled?: boolean;
    disabled?: boolean;
    icon?: ReactNode;
}

const PrimaryButton: React.FC<primaryButtonProps> = (props) => {
    const {
        filled = true,
        disabled = false,
        title = 'title',
        onPress = () => { },
        isLoading = false
    } = props
    const styles = styles_(filled, disabled)

    return (
        <TouchableOpacity
            style={[
                styles.main,
                props?.icon == undefined ? { width: '80%', } : { paddingHorizontal: '5%', height: hp(6.4) },
                props.style,
            ]}
            activeOpacity={0.8}
            onPress={() => onPress()}
            disabled={disabled || isLoading}
        >
            <If condition={props.icon != undefined && props.icon != true}>
                <View style={{ marginRight: 5 }}>
                    {props.icon}
                </View>
            </If>
            {
                isLoading ?
                    <ActivityIndicator color={COLORS.WHITE} />
                    :
                    <Text style={[styles.title, props.textStyle]}>{title}</Text>
            }

        </TouchableOpacity>
    )
}

export default React.memo(PrimaryButton)

const styles_ = (filled: any, disabled: any) => StyleSheet.create({
    main: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginVertical: hp(1),
        backgroundColor: filled ? COLORS.PRIMARY : COLORS.SECONDARY,
        ...COMMON_STYLES.center_,
        height: hp(5.5),
        borderRadius: hp(1),
    },
    title: {
        color: COLORS.WHITE,
        fontSize: FONT_SIZE._14,
        fontFamily: FONTS.SEMI_BOLD
    }
})