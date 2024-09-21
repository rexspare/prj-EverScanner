import { StyleSheet } from "react-native";
import { COLORS, COMMON_STYLES, hp, wp } from "../../assets/stylesGuide";

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    container: {
        flex: 1,
        ...COMMON_STYLES.center_,
    },
    absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    box: {
        flex: 1,
        ...COMMON_STYLES.center_,
        paddingBottom: 40
    },
    context: {
        width: wp(88),
        maxHeight: hp(70),
        backgroundColor: COLORS.BACKGROUND,
        paddingVertical: hp(2),
        borderRadius: 10,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: COLORS.PRIMARY,
        ...COMMON_STYLES.center_
    },

})

export default styles