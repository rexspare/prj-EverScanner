import React from 'react'
import { View } from 'react-native'
import { GenerateHeader, Layout, TypeItem } from '../../components'
import { appConfigtStateSelectors, useAppConfigState } from '../../states/appConfig'
import styles from './styles.generate'
import { Business, Contact, Email, Event, Instagram, Location, Telephone, Text, Twitter, Website, WhatsApp, Wifi } from '../../assets/svg'
import { hp } from '../../assets/stylesGuide'

const GenerateScreen = () => {
  const lang = useAppConfigState(appConfigtStateSelectors.language)

  const TYPES = [
    {
      id: 1,
      text: lang['_05'],
      icon: <Text width={hp(6)} height={hp(6)} />
    },
    {
      id: 1,
      text: lang['_06'],
      icon: <Website width={hp(6)} height={hp(6)} />
    },
    {
      id: 1,
      text: lang['_07'],
      icon: <Wifi width={hp(6)} height={hp(6)} />
    },
    {
      id: 1,
      text: lang['_08'],
      icon: <Event width={hp(6)} height={hp(6)} />
    },
    {
      id: 1,
      text: lang['_09'],
      icon: <Contact width={hp(6)} height={hp(6)} />
    },
    {
      id: 1,
      text: lang['_10'],
      icon: <Business width={hp(6)} height={hp(6)} />
    },
    {
      id: 1,
      text: lang['_11'],
      icon: <Location width={hp(6)} height={hp(6)} />
    },
    {
      id: 1,
      text: lang['_12'],
      icon: <WhatsApp width={hp(6)} height={hp(6)} />
    },
    {
      id: 1,
      text: lang['_13'],
      icon: <Email width={hp(6)} height={hp(6)} />
    },
    {
      id: 1,
      text: lang['_14'],
      icon: <Twitter width={hp(6)} height={hp(6)} />
    },
    {
      id: 1,
      text: lang['_15'],
      icon: <Instagram width={hp(6)} height={hp(6)} />
    },
    {
      id: 1,
      text: lang['_16'],
      icon: <Telephone width={hp(6)} height={hp(6)} />
    },
  ]

  return (
    <Layout>
      <GenerateHeader
        title={lang['_04']}
      />
      <View style={styles.main}>
        {
          TYPES.map((item, index) => (
            <TypeItem
              key={index}
              item={item}
              index={index}
              onPress={() => { }}
            />
          ))
        }
      </View>

    </Layout>
  )
}

export default GenerateScreen
