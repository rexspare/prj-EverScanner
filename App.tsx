import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import BootSplash from "react-native-bootsplash";
import RootStack from './src/navigation/rootStack';
import Toast from 'react-native-toast-message';
import { getItem, setItem } from './src/services/asyncStorage';
import { ASYNC_KEYS } from './src/assets/constants';
import { appConfigtStateSelectors, useAppConfigState } from './src/states/appConfig';
import { English } from './src/assets/languages';

const App = () => {
  const setVibrateEnabled = useAppConfigState(appConfigtStateSelectors.setVibrateEnabled)
  const setLanguage = useAppConfigState(appConfigtStateSelectors.setLanguage)
  const setisFirstLaunch = useAppConfigState(appConfigtStateSelectors.setisFirstLaunch)

  useEffect(() => {
    const init = async () => {
      const vibrateData = await getItem(ASYNC_KEYS.VIBRATE, null)
      if (vibrateData == null || vibrateData == 'true') {
        setVibrateEnabled(true)
      } else {
        setVibrateEnabled(false)
      }

      const LanguageData = await getItem(ASYNC_KEYS.VIBRATE, "En")
      if (LanguageData == 'En') {
        setLanguage(English)
      } else {
        setLanguage(English)
      }

      const isFirstLaunch = await getItem(ASYNC_KEYS.ONBOARDING, null)
      if (isFirstLaunch != "true") {
        setisFirstLaunch(true)
      } else {
        setisFirstLaunch(false)
      }
    };

    init().finally(async () => {
      setTimeout(async () => {
        await BootSplash.hide({ fade: true });
      }, 1000);
    });
  }, []);

  return (
    <>
      <StatusBar
        backgroundColor={'transparent'}
        translucent
        barStyle={'light-content'} />
      <RootStack />
      <Toast />
    </>
  )
}

export default App

const styles = StyleSheet.create({})
