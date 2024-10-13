import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { SCREENS } from '../assets/constants';
import { COLORS, FONT_SIZE, FONTS, hp, wp } from '../assets/stylesGuide';
import { TabGenerate, TabHistory, TabScanner } from '../assets/svg/tab';
import { BodyText, If } from '../components';
import { GenerateScreen, HistoryScreen, ScannerScreen } from '../screens';
import { hasNotch, isIOS } from '../utils/myUtils';

const Tab = createBottomTabNavigator();

const AppStack = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false
    }}
      tabBar={props => <CustomTabBar {...props} />}
    >
      <Tab.Screen name={SCREENS.GENERATE} component={GenerateScreen} />
      <Tab.Screen name={SCREENS.SCANNER} component={ScannerScreen} />
      <Tab.Screen name={SCREENS.HISTORY} component={HistoryScreen} />
    </Tab.Navigator>
  )
}

const CustomTabBar = ({ state, descriptors, navigation }: any) => {

  const getIcon = (route: string, focused: boolean) => {
    switch (route) {
      case SCREENS.GENERATE:
        return <TabGenerate width={22} height={22} fill={focused ? COLORS.PRIMARY : COLORS.INACTIVE} />;
      case SCREENS.SCANNER:
        return <TabScanner width={70} height={70} fill={focused ? COLORS.PRIMARY : COLORS.INACTIVE} />;
      case SCREENS.HISTORY:
        return <TabHistory width={22} height={22} fill={focused ? COLORS.PRIMARY : COLORS.INACTIVE} />;

      default:
        return <TabGenerate width={22} height={22} fill={focused ? COLORS.PRIMARY : COLORS.INACTIVE} />;
    }
  }

  return (
    <View
      style={{
        backgroundColor: COLORS.BACKGROUND,
        width: wp(85),
        height: 60,
        maxWidth: 300,
        alignSelf: 'center',
        flexDirection: 'row',
        borderRadius: hp(1),
        overflow: 'hidden',
        bottom: (isIOS() && hasNotch()) ? 30 : 15,
        paddingHorizontal: '5%',
        position: 'absolute',
        borderBottomWidth: 3,
        borderColor: COLORS.PRIMARY,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }

        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              paddingVertical: 10,
              justifyContent: 'center',
              alignItems: 'center',
            
            }}
          >
            {getIcon(descriptors[route.key].route.name, isFocused)}

            <If condition={route.name != SCREENS.SCANNER}>
              <BodyText style={{
                fontFamily: FONTS.MEDIUM,
                fontSize: FONT_SIZE._10,
                color: isFocused ? COLORS.PRIMARY : COLORS.INACTIVE
              }}>{route.name}</BodyText>
            </If>

          </TouchableOpacity>
        );
      })}
    </View>
  );
}


export default AppStack
