import {ParamListBase, useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';

import {RootStackParamList} from '../navigator/RootStackParamList';
import {NavigatorConstants} from '../utils/navigator-constants';
import {ScreenView} from '../components/ScreenView';

export interface ITicketsScreenParams {
  accurate: boolean;
  data: any;
}
export type TicketsScreenProps = StackScreenProps<
  RootStackParamList | ParamListBase,
  typeof NavigatorConstants.INFO_SCREEN
>;
export const TicketsScreen: React.FC<TicketsScreenProps> = ({route}) => {
  const routData = route.params as ITicketsScreenParams;
  const navigation = useNavigation();
  return (
    <ScreenView>
      <View style={[styles.container]}>
        <Text> TicketsScreen</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Text>Go back</Text>
        </TouchableOpacity>
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
