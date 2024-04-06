import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {ScreenView} from '../components/ScreenView';
import {BusType} from '../../assets/type';
import {HeaderView} from '../components/HeaderView';
import {Colors} from '../../assets/constants/colors';
import {Fonts} from '../../assets/constants/fonts';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigator/RootStackParamList';
import {NavigatorConstants} from '../utils/navigator-constants';

export const TicketsScreen: React.FC = () => {
  const routData = useRoute();
  const bus: BusType = routData && routData.params;
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const onPressItem = () => {
    navigation.navigate(NavigatorConstants.MAP_SCREEN);
  };
  const twoColumnComponent = (seats: string[]) => {
    return (
      <View style={styles.wrapperSeat}>
        <View style={styles.column}>
          {seats.map((item, index) => {
            if (index % 2 === 0) {
              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => onPressItem()}
                  key={index}
                  style={[
                    styles.item,
                    {
                      backgroundColor:
                        item === 'reserved' ? Colors.CABCBFF : Colors.CFFFFFF,
                    },
                  ]}>
                  <Text style={styles.textSeat}>{index + 1}</Text>
                </TouchableOpacity>
              );
            }
          })}
        </View>
        <View style={styles.column}>
          {seats.map((item, index) => {
            if (index % 2 !== 0) {
              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => onPressItem()}
                  key={index}
                  style={[
                    styles.item,
                    {
                      marginLeft: 15,
                      backgroundColor:
                        item === 'reserved' ? Colors.CABCBFF : Colors.CFFFFFF,
                    },
                  ]}>
                  <Text style={styles.textSeat}>{index + 1}</Text>
                </TouchableOpacity>
              );
            }
          })}
        </View>
      </View>
    );
  };

  return (
    <ScreenView>
      <View style={[styles.container]}>
        <HeaderView
          name={bus.name}
          title={'Seat availability'}
          direction={bus.direction}
        />
        <View style={styles.containerSeats}>
          {twoColumnComponent(bus.seatsLeft)}
          {twoColumnComponent(bus.seatsRight)}
        </View>
      </View>
    </ScreenView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textSeat: {
    color: Colors.C000000,
    fontFamily: Fonts.POPPINS,
    fontSize: 19,
    fontWeight: '400',
  },
  containerSeats: {
    width: '100%',
    paddingHorizontal: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapperSeat: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 150,
  },
  column: {
    alignItems: 'center',
  },
  item: {
    width: 47,
    height: 47,
    backgroundColor: Colors.CFFFFFF,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
});
