import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, COMMON_STYLES, FONT_SIZE, wp } from '../../assets/stylesGuide'
import { hasNotch, isIOS } from '../../utils/myUtils'
import Label from '../label'
import FontAwesome from 'react-native-vector-icons/FontAwesome6'
import { useNavigation } from '@react-navigation/native'

interface ICrossHeader {
    title?: string;
    onPress: Function;
}

const CrossHeader = (props: ICrossHeader) => {
    const { title, onPress = () => { } } = props
    const navigetion = useNavigation()

    return (
        <View style={styles.main}>

            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btn}
                hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
                onPress={() => onPress()}
            >
                <FontAwesome name={"xmark"} color={COLORS.INACTIVE} size={15} />
            </TouchableOpacity>

            <Label style={styles.title}>{title}</Label>

        </View>
    )
}

export default CrossHeader

const styles = StyleSheet.create({
    main: {
        width: wp(100),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '5%',
        borderBottomWidth: 1 / 3,
        borderColor: COLORS.GREY_40
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