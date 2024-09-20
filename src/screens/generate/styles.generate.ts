import { StyleSheet } from "react-native";
import { hp } from "../../assets/stylesGuide";

const styles = StyleSheet.create({
    main: {
        width: '100%',
        paddingHorizontal: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: hp(3),
        paddingBottom: hp(15)
    }
})

export default styles