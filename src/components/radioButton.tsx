import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet, TouchableOpacity, ViewStyle, View } from 'react-native';
import { COLORS, COMMON_STYLES, FONT_SIZE, hp } from '../assets/stylesGuide';
import Entypo from 'react-native-vector-icons/Entypo'
import BodyText from './bodyText';

interface radioButtonProps {
    checked: boolean;
    onPress: (val: boolean) => void;
    style?: ViewStyle;
    containerStyle?: ViewStyle;
    size?: number
    title: string;
}

const RadioButton = ({ checked, onPress, style, containerStyle, size = hp(2.2), title }: radioButtonProps) => {
    const [scaleValue] = useState(new Animated.Value(checked ? 1 : 0));
    const styles = styles_(size, checked)
    const onCheck = () => {
        Animated.timing(scaleValue, {
            toValue: checked ? 0 : 1,
            duration: 300,
            useNativeDriver: true,
        }).start();

        onPress(checked);
    };

    useEffect(() => {
        Animated.timing(scaleValue, {
            toValue: checked ? 1 : 0,
            duration: 0,
            useNativeDriver: true,
        }).start();
    }, [checked]);

    return (
        <View style={styles.main}>
            <TouchableOpacity
                hitSlop={{ top: 8, left: 8, bottom: 8, right: 8 }}
                onPress={() => onCheck()} style={[styles.container, containerStyle]}>
                <Animated.View style={[styles.checkbox, style, { transform: [{ scale: scaleValue }], }]}>
                    {
                        checked ?
                            <View style={styles.filler}>
                            </View>
                            :
                            null
                    }
                </Animated.View>
            </TouchableOpacity>

            <BodyText style={styles.title}>{title}</BodyText>
        </View>
    );
};

export default React.memo(RadioButton);

const styles_ = (size: any, checked: boolean) => StyleSheet.create({
    main: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    title: {
        color: COLORS.INACTIVE,
        fontSize: FONT_SIZE._14,
        marginLeft: 10
    },
    container: {
        width: size,
        height: size,
        borderRadius: size,
        borderColor: checked ? COLORS.PRIMARY : COLORS.GREY,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    },
    checkbox: {
        width: size,
        height: size,
        borderRadius: size,
        alignItems: 'center',
        justifyContent: 'center',
    },
    filler: {
        width: size * 0.6,
        height: size * 0.6,
        borderRadius: size,
        backgroundColor: COLORS.PRIMARY,
        ...COMMON_STYLES.center_
    }
});
