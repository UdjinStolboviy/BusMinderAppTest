import {ParamListBase, useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';

import {RootStackParamList} from '../navigator/RootStackParamList';
import {NavigatorConstants} from '../utils/navigator-constants';
import {ScreenView} from '../components/ScreenView';
import MapInfo from '../components/MapInfo';
import {HeaderView} from '../components/HeaderView';
import {BusType} from '../../assets/type';

export interface IMapScreenParams {
  accurate: boolean;
  data: any;
}
export type MapScreenProps = StackScreenProps<
  RootStackParamList | ParamListBase,
  typeof NavigatorConstants.MAP_SCREEN
>;
export const MapScreen: React.FC<MapScreenProps> = () => {
  const routData = useRoute();
  const bus: BusType = routData && routData.params;
  const navigation = useNavigation();

  return (
    <ScreenView>
      <View style={[styles.container]}>
        <HeaderView
          name={bus.name}
          title={'Location'}
          speed={bus.speed}
          direction={bus.direction}
        />

        <MapInfo />
      </View>
    </ScreenView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
