import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigatorConstants} from '../utils/navigator-constants';
import {HomeScreen} from '../screens/ HomeScreen';

const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={NavigatorConstants.HOME_SCREEN}>
      <Stack.Screen
        component={HomeScreen}
        name={NavigatorConstants.HOME_SCREEN}
      />
    </Stack.Navigator>
  );
};
