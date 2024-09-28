import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import { FlatList, View } from 'react-native'
import { SCREENS } from '../../assets/constants'
import { COLORS, hp } from '../../assets/stylesGuide'
import { GenerateHeader, HistoryItem, Layout, PrimaryButton, Spacer } from '../../components'
import { InitialNavigationStackParamList } from '../../navigation/rootStack'
import { appConfigtStateSelectors, useAppConfigState } from '../../states/appConfig'
import styles from './styles.history'

const HistoryScreen = () => {
    const lang = useAppConfigState(appConfigtStateSelectors.language)
    const navigation = useNavigation<NativeStackNavigationProp<InitialNavigationStackParamList>>();

    const [activetab, setactivetab] = useState<"Scan" | "Create">("Scan")

    return (
        <Layout fixed={true}>
            <GenerateHeader
                title={lang['_60']}
            />

            <View style={styles.buttonContainer}>

                <PrimaryButton
                    title={lang['_61']}
                    style={[{
                        ...styles.btn,
                        ...(activetab != 'Scan' && { backgroundColor: COLORS.BACKGROUND, })
                    }]}
                    onPress={() => setactivetab('Scan')}
                />

                <PrimaryButton
                    title={lang['_62']}
                    style={[{
                        ...styles.btn,
                        ...(activetab != 'Create' && { backgroundColor: COLORS.BACKGROUND, })
                    }]}
                    onPress={() => setactivetab('Create')}
                />

            </View>

            <View style={styles.main}>
                <FlatList
                    data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 14, 15, 15]}
                    renderItem={({ item, index }) => (
                        <HistoryItem
                            item={item}
                            onPress={() => navigation.navigate(activetab == 'Scan' ? SCREENS.OPEN_FILE : SCREENS.QR_CODE, { data: {} })}
                        />
                    )}
                    ItemSeparatorComponent={() => <Spacer height={hp(2.5)} />}
                    ListFooterComponent={() => <Spacer height={hp(25)} />}
                />
            </View>


        </Layout>
    )
}

export default HistoryScreen
