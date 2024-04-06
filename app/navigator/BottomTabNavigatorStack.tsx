import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {NavigatorConstants} from '../utils/navigator-constants';
import CustomBottomTab from './CustomBottomTab';
import {TicketsScreen} from '../screens/ TicketsScreen';
import {MapScreen} from '../screens/ MapScreen';
import {InfoScreen} from '../screens/ InfoScreen';

export type BottomTabParamList = {
  TICKETS_SCREEN: any;
  MAP_SCREEN: any;
  INFO_SCREEN: undefined;
};

const CustomBottomTabs = (props: BottomTabBarProps) => {
  return <CustomBottomTab {...props} />;
};

export const BottomTabNavigatorStack = () => {
  const Tab = createBottomTabNavigator<BottomTabParamList>();

  return (
    <Tab.Navigator
      tabBar={CustomBottomTabs}
      initialRouteName={NavigatorConstants.TICKETS_SCREEN}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name={NavigatorConstants.MAP_SCREEN} component={MapScreen} />
      <Tab.Screen
        name={NavigatorConstants.TICKETS_SCREEN}
        component={TicketsScreen}
      />
      <Tab.Screen
        name={NavigatorConstants.INFO_SCREEN}
        component={InfoScreen}
      />
    </Tab.Navigator>
  );
};
