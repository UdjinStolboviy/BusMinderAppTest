import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {RootStackParamList} from './RootStackParamList';
import {NavigatorConstants} from '../utils/navigator-constants';
import {AppNavigator} from './AppNavigator';
import {BottomTabNavigatorStack} from './BottomTabNavigatorStack';

const Stack = createStackNavigator<RootStackParamList>();

export interface RootNavigationContainerProps {
  initialRouteName: keyof RootStackParamList | undefined;
}

export const RootNavigationContainer = (
  props: RootNavigationContainerProps,
) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={props.initialRouteName}>
        <Stack.Screen
          name={NavigatorConstants.APP_STACK}
          options={{headerShown: false, gestureEnabled: false}}
          component={AppNavigator}
        />
        <Stack.Screen
          name={NavigatorConstants.BOTTOM_TAB_STACK}
          options={{headerShown: false, gestureEnabled: false}}
          component={BottomTabNavigatorStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
