import { StyleSheet } from "react-native";
import { COLORS, hp } from "../../assets/stylesGuide";

const styles = StyleSheet.create({
    main: {
        flex: 1,
        width: '100%',
    },
    buttonContainer: {
        width: '90%',
        maxHeight: 400,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        elevation: 18,
        backgroundColor: COLORS.BACKGROUND,
        marginTop: hp(3),
        marginBottom: hp(2),
        paddingHorizontal: '3%',
        borderRadius: 10,
    },
    btn: {
        width: '48%'
    },
    inactiveBtn: {
        borderWidth: 3 / 2,
        borderColor: COLORS.PRIMARY,
        backgroundColor: 'transparent',
    }
})

export default styles