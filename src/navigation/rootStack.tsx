import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from '../assets/constants';
import { GenerateCodeScreen, LanguageScreen, OnBoardingScreen, OpenFileScreen, QrCodeScreen, SettingScreen } from '../screens';
import AppStack from './appStack';
import { appConfigtStateSelectors, useAppConfigState } from '../states/appConfig';

export type InitialNavigationStackParamList = {
    [SCREENS.ONBOARDING]: undefined;
    [SCREENS.APP]: undefined;
    [SCREENS.SETTING]: undefined;
    [SCREENS.LANGUAGE]: undefined;
    [SCREENS.GENERATE_CODE]: { type: string, title: string };
    [SCREENS.OPEN_FILE]: { data: any };
    [SCREENS.QR_CODE]: { data: any };
};

const Stack = createNativeStackNavigator<InitialNavigationStackParamList>();


const RootStack = () => {
    const isFirstLaunch = useAppConfigState(appConfigtStateSelectors.isFirstLaunch)

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
                animation: 'slide_from_right'
            }}>
                {isFirstLaunch &&
                    <Stack.Screen name={SCREENS.ONBOARDING} component={OnBoardingScreen} />
                }
                <Stack.Screen name={SCREENS.APP} component={AppStack} />
                <Stack.Screen name={SCREENS.SETTING} component={SettingScreen} />
                <Stack.Screen name={SCREENS.LANGUAGE} component={LanguageScreen} />
                <Stack.Screen name={SCREENS.GENERATE_CODE} component={GenerateCodeScreen} />
                <Stack.Screen name={SCREENS.OPEN_FILE} component={OpenFileScreen} />
                <Stack.Screen name={SCREENS.QR_CODE} component={QrCodeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack

const styles = StyleSheet.create({})