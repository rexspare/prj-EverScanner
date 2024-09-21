import { StyleSheet } from "react-native";
import { COLORS, COMMON_STYLES, FONT_SIZE, FONTS, hp } from "../../assets/stylesGuide";

const styles = StyleSheet.create({
    main: {
        paddingHorizontal: '5%'
    },
    title: {
        textAlign: 'left',
        color: COLORS.PRIMARY,
        marginVertical: hp(2),
        fontSize: FONT_SIZE._26

    }
})

export default styles