import { StyleSheet } from "react-native";
import { COLORS, COMMON_STYLES, FONT_SIZE, FONTS, hp, wp } from "../../assets/stylesGuide";

const styles = StyleSheet.create({
    main: {
        width: '90%',
        borderRadius: 10,
        borderColor: "#FFFFF",
        paddingHorizontal: '4%',
        paddingVertical: hp(2),
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,

        elevation: 18,
        backgroundColor: COLORS.BACKGROUND,
        alignSelf: 'center',
        marginTop: hp(5)
    },
    context: {
        flex: 1,
        marginLeft: '4%',
        alignItems: 'flex-start'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    dataTxt: {
        fontSize: FONT_SIZE._22
    },
    date: {
        color: COLORS.INACTIVE,
        fontSize: FONT_SIZE._10,
    },
    line: {
        width: '100%',
        height: 1 / 2,
        backgroundColor: COLORS.GREY_40,
        marginTop: hp(3),
        marginBottom: hp(2)
    },
    btnTxt: {
        color: COLORS.PRIMARY,
        fontFamily: FONTS.SEMI_BOLD,
    },
    btn: {
        marginTop: hp(1)
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp(5),
        gap: '90%'
    },
    twinBtn: {
        backgroundColor: COLORS.PRIMARY,
        width: hp(6),
        height: hp(6),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    twinBtnTxt: {
        fontSize: FONT_SIZE._12,
        marginTop: hp(0.8),
        fontFamily: FONTS.MEDIUM
    },
    commitBtn: {
        width: '60%',
        marginTop: hp(5)
    },
    qrdata: {
        textAlign: 'left'
    }

})

export default styles