import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, COMMON_STYLES, FONT_SIZE, hp, wp } from '../../assets/stylesGuide'
import { hasNotch, isIOS } from '../../utils/myUtils'
import Label from '../label'
import FontAwesome from 'react-native-vector-icons/FontAwesome6'
import { useNavigation } from '@react-navigation/native'
import { SCREENS } from '../../assets/constants'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { InitialNavigationStackParamList } from '../../navigation/rootStack'

interface IGenerateHeader {
    title?: string;

}

const GenerateHeader = (props: IGenerateHeader) => {
    const { title } = props
    const navigation = useNavigation<NativeStackNavigationProp<InitialNavigationStackParamList>>();

    return (
        <View style={styles.main}>
            <Label style={styles.title}>{title}</Label>

            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btn}
                hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
                onPress={() => navigation.navigate(SCREENS.SETTING)}
            >
                <FontAwesome name={"bars-staggered"} color={COLORS.INACTIVE} size={15} />
            </TouchableOpacity>
        </View>
    )
}

export default GenerateHeader

const styles = StyleSheet.create({
    main: {
        width: wp(100),
        marginTop: (isIOS() && hasNotch()) ? 60 : StatusBar.currentHeight,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '5%',
        borderBottomWidth: 1 / 3,
        borderColor: COLORS.GREY_40,
        paddingBottom: hp(1)
    },
    title: {
        textAlign: 'left',
        color: COLORS.INACTIVE,
        fontSize: FONT_SIZE._22
    },
    btn: {
        width: 30,
        height: 30,
        backgroundColor: COLORS.SECONDARY,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,

        elevation: 18,
        borderRadius: 5,
        ...COMMON_STYLES.center_
    }
})