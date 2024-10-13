import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'
import { ASYNC_KEYS, SCREENS } from '../../assets/constants'
import { hp } from '../../assets/stylesGuide'
import { GenerateHeader, HistoryItem, Layout, PrimaryButton, Spacer } from '../../components'
import useStorage from '../../hooks/useStorage'
import { InitialNavigationStackParamList } from '../../navigation/rootStack'
import { appConfigtStateSelectors, useAppConfigState } from '../../states/appConfig'
import styles from './styles.history'

const HistoryScreen = () => {
    const lang = useAppConfigState(appConfigtStateSelectors.language)
    const navigation = useNavigation<NativeStackNavigationProp<InitialNavigationStackParamList>>();
    const { getHistory, deleteEntryFromStorage } = useStorage()
    const [activetab, setactivetab] = useState<"Scan" | "Create">("Scan")
    const [data, setdata] = useState([])

    useEffect(() => {
      const subscribe = navigation.addListener('focus', () => {
        getHistoryData()
      })

      return subscribe()
    }, [navigation])
    

    useEffect(() => {
        getHistoryData()
    }, [activetab])

    const getHistoryData = async () => {
        try {
            const data: any = await getHistory(activetab == 'Create' ? ASYNC_KEYS.HISTORY : ASYNC_KEYS.SCANNED)
            setdata(data)
        } catch (error) {

        }
    }

    const handleDeleteItem = async (id: number | string) => {
        try {
            const data: any = await deleteEntryFromStorage(activetab == 'Create' ? ASYNC_KEYS.HISTORY : ASYNC_KEYS.SCANNED, id)
            setdata(data)
        } catch (error) {

        }
    }


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
                        ...(activetab != 'Scan' && styles.inactiveBtn)
                    }]}
                    onPress={() => setactivetab('Scan')}
                />

                <PrimaryButton
                    title={lang['_62']}
                    style={[{
                        ...styles.btn,
                        ...(activetab != 'Create' && styles.inactiveBtn)
                    }]}
                    onPress={() => setactivetab('Create')}
                />

            </View>

            <View style={styles.main}>
                <FlatList
                    data={data}
                    renderItem={({ item, index }: any) => (
                        <HistoryItem
                            item={item}
                            onPress={() => navigation.navigate(activetab == 'Scan' ? SCREENS.OPEN_FILE : SCREENS.QR_CODE, { data: item })}
                            onDelete={() => handleDeleteItem(item?.createdAt)}
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
