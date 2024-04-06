import {ParamListBase, useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';

import {RootStackParamList} from '../navigator/RootStackParamList';
import {NavigatorConstants} from '../utils/navigator-constants';
import {ScreenView} from '../components/ScreenView';
import MapInfo from '../components/MapInfo';

export interface IMapScreenParams {
  accurate: boolean;
  data: any;
}
export type MapScreenProps = StackScreenProps<
  RootStackParamList | ParamListBase,
  typeof NavigatorConstants.MAP_SCREEN
>;
export const MapScreen: React.FC<MapScreenProps> = ({route}) => {
  const routData = route.params as IMapScreenParams;
  const navigation = useNavigation();

  return (
    <ScreenView>
      <View style={[styles.container]}>
        <Text> MapScreen</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Text>Go back</Text>
        </TouchableOpacity>
        <MapInfo />
      </View>
    </ScreenView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 24,
    paddingHorizontal: 16,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
