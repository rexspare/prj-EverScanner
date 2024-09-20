import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import BootSplash from "react-native-bootsplash";
import RootStack from './src/navigation/rootStack';
import Toast from 'react-native-toast-message';
const App = () => {
  useEffect(() => {

    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
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