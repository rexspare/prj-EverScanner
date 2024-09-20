import { StatusBar, StyleSheet } from "react-native";
import { COLORS, COMMON_STYLES, hp, wp } from "../../assets/stylesGuide";
import { hasNotch, isIOS } from "../../utils/myUtils";

const styles = StyleSheet.create({
    cameraMain: {
        flex: 1,
    },
    scanner: {
        width: 150,
        height: 150
    },
    scannerFrameContainer: {
        flex: 1,
        ...COMMON_STYLES.center_,
        paddingBottom: (isIOS() && hasNotch()) ? hp(15) : hp(10)
    },
    controlsContainer: {
        width: wp(85),
        borderRadius: 5,
        backgroundColor: COLORS.BACKGROUND,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 7,
        alignSelf: 'center',
        marginTop: (isIOS() && hasNotch()) ? (60 + hp(3)) : (StatusBar?.currentHeight + hp(3)),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    }
})

export default styles