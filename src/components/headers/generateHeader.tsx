import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONT_SIZE, wp } from '../../assets/stylesGuide'
import { hasNotch, isIOS } from '../../utils/myUtils'
import Label from '../label'

interface IGenerateHeader {
    title?: string;

}

const GenerateHeader = (props: IGenerateHeader) => {
    const { title } = props

    return (
        <View style={styles.main}>
            <Label style={styles.title}>{title}</Label>
        </View>
    )
}

export default GenerateHeader

const styles = StyleSheet.create({
    main: {
        width: wp(100),
        marginTop: (isIOS() && hasNotch()) ? 60 : StatusBar.currentHeight,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: '5%',
        borderBottomWidth: 1 / 3,
        borderColor: COLORS.GREY_40
    },
    title: {
        textAlign: 'left',
        color: COLORS.INACTIVE,
        fontSize: FONT_SIZE._22
    }
})