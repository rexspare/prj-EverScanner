import { StyleSheet } from "react-native";
import { COLORS, COMMON_STYLES, FONTS, hp } from "../../assets/stylesGuide";

const styles = StyleSheet.create({
    main: {
        backgroundColor: COLORS.PRIMARY
    },
    iconContainer: {
        flex: 1,
        ...COMMON_STYLES.center_
    },
    bottomSheet: {
        backgroundColor: COLORS.BACKGROUND,
        alignItems: 'center',
        paddingBottom: hp(3),
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    line: {
        width: 100,
        height: 3,
        backgroundColor: COLORS.PRIMARY,
        borderRadius: 10,
        marginTop: hp(1.5)
    },
    txt1: {
        marginTop: hp(4)
    },
    txt2: {
        fontFamily: FONTS.MEDIUM,
        marginBottom: hp(2)
    }
})

export default styles