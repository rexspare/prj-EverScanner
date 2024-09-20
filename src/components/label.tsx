import React, { ReactNode } from 'react';
import { Text, TextStyle } from 'react-native';
import { COLORS, FONTS, FONT_SIZE, hp } from '../assets/stylesGuide';

interface labelProps {
    children: ReactNode;
    size?: number;
    fontFamily?: string;
    style?: TextStyle | TextStyle[];
}

const Label: React.FC<labelProps> = (props) => {
    const { children, size = FONT_SIZE._24, fontFamily = FONTS.SEMI_BOLD, style = {} } = props

    return (
        <Text
            allowFontScaling={false}
            style={{
                fontFamily: fontFamily,
                fontSize: size,
                color: COLORS.WHITE,
                textAlign: 'center',
                marginVertical: hp(1),
                ...style
            }}>{children}</Text>
    )
}

export default Label

