import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import Toast from 'react-native-toast-message'
import { ALERT_HEADER, ALERT_TYPES, QR_TYPE, SCREENS } from '../../assets/constants'
import { hp } from '../../assets/stylesGuide'
import { Business, Contact, Email, Event, Instagram, Location, Telephone, Text, Twitter, Website, WhatsApp, Wifi } from '../../assets/svg'
import { GenerateHeader, Layout, TypeItem } from '../../components'
import { InitialNavigationStackParamList } from '../../navigation/rootStack'
import { appConfigtStateSelectors, useAppConfigState } from '../../states/appConfig'
import styles from './styles.generate'

const GenerateScreen = () => {
  const lang = useAppConfigState(appConfigtStateSelectors.language)
  const navigation = useNavigation<NativeStackNavigationProp<InitialNavigationStackParamList>>();

  const TYPES: any = [
    {
      id: 1,
      text: lang['_05'],
      type: QR_TYPE.TEXT,
      icon: <Text width={hp(6)} height={hp(6)} />
    },
    {
      id: 1,
      text: lang['_06'],
      type: QR_TYPE.WEBSITE,
      icon: <Website width={hp(6)} height={hp(6)} />
    },
    {
      id: 1,
      text: lang['_07'],
      type: QR_TYPE.WIFI,
      icon: <Wifi width={hp(6)} height={hp(6)} />
    },
    // {
    //   id: 1,
    //   text: lang['_08'],
    //   type: QR_TYPE.EVENT,
    //   icon: <Event width={hp(6)} height={hp(6)} />
    // },
    {
      id: 1,
      text: lang['_09'],
      type: QR_TYPE.CONTACT,
      icon: <Contact width={hp(6)} height={hp(6)} />,
    },
    // {
    //   id: 1,
    //   text: lang['_10'],
    //   type: QR_TYPE.BUSINESS,
    //   icon: <Business width={hp(6)} height={hp(6)} />,
    //   available: false
    // },
    // {
    //   id: 1,
    //   text: lang['_11'],
    //   type: QR_TYPE.LOCATION,
    //   icon: <Location width={hp(6)} height={hp(6)} />
    // },
    {
      id: 1,
      text: lang['_12'],
      type: QR_TYPE.WHATSAPP,
      icon: <WhatsApp width={hp(6)} height={hp(6)} />
    },
    {
      id: 1,
      text: lang['_13'],
      type: QR_TYPE.EMAIL,
      icon: <Email width={hp(6)} height={hp(6)} />
    },
    {
      id: 1,
      text: lang['_14'],
      type: QR_TYPE.TWITTER,
      icon: <Twitter width={hp(6)} height={hp(6)} />
    },
    {
      id: 1,
      text: lang['_15'],
      type: QR_TYPE.INSTAGRAM,
      icon: <Instagram width={hp(6)} height={hp(6)} />
    },
    {
      id: 1,
      text: lang['_16'],
      type: QR_TYPE.TELEPHONE,
      icon: <Telephone width={hp(6)} height={hp(6)} />
    },
  ]


  const handleComingSoon = () => {
    Toast.show({
      type: ALERT_TYPES.INFO,
      text1: ALERT_HEADER.INFO,
      text2: lang["_59"],
    });
  }


  return (
    <Layout fixed={true}>
      <GenerateHeader
        title={lang['_04']}
      />
      <Layout contentContainerStyle={styles.main}>
        {
          TYPES.map((item: any, index: number) => (
            <TypeItem
              key={index}
              item={item}
              index={index}
              onPress={() => item?.available == false ? handleComingSoon() : navigation.navigate(SCREENS.GENERATE_CODE, { type: item?.type, title: item.text })}
            />
          ))
        }
      </Layout>


    </Layout>
  )
}

export default GenerateScreen
