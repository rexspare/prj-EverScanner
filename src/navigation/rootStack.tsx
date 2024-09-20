import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from '../assets/constants';
import { OnBoardingScreen } from '../screens';
import AppStack from './appStack';

const Stack = createNativeStackNavigator();

const RootStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                {/* <Stack.Screen name={SCREENS.ONBOARDING} component={OnBoardingScreen} /> */}
                <Stack.Screen name={SCREENS.APP} component={AppStack} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack

const styles = StyleSheet.create({})