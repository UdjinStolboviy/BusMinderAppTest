import React from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {Colors} from '../../assets/constants/colors';
import {Fonts} from '../../assets/constants/fonts';
import {SpeedIcon} from '../../assets/icons/SpeedIcon';

export interface HeaderViewProps {
  name: string;
  title: string;
  direction: string;
  speed?: number;
  containerStyle?: StyleProp<ViewStyle>;
}

export const HeaderView = (props: HeaderViewProps) => {
  return (
    <View style={[styles.container, props.containerStyle]}>
      <Text style={styles.textTitle}>{props.title}</Text>
      <View style={styles.wrapperInfo}>
        <View style={styles.wrapperDescription}>
          <Text style={styles.textName}>{props.name}</Text>
          <Text style={styles.textDirection}>{props.direction}</Text>
        </View>
        {props.speed ? (
          <View style={styles.wrapperSpeed}>
            <SpeedIcon />
            <Text style={styles.textSpeed}>{`${props.speed}kmph`}</Text>
          </View>
        ) : (
          <View style={styles.wrapperInfoSeats}>
            <View style={[styles.wrapperSeat, {marginBottom: 5}]}>
              <Text style={styles.textInfo}>Reserved</Text>
              <View
                style={[styles.square, {backgroundColor: Colors.CABCBFF}]}
              />
            </View>
            <View style={styles.wrapperSeat}>
              <Text style={styles.textInfo}>Available</Text>
              <View
                style={[styles.square, {backgroundColor: Colors.CFFFFFF}]}
              />
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 32,
    marginTop: 12,
  },
  textSpeed: {
    color: Colors.C252525,
    fontFamily: Fonts.POPPINS,
    fontSize: 14,
    fontWeight: '400',
    marginLeft: 8,
  },
  wrapperSeat: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInfo: {
    color: Colors.C000000,
    fontFamily: Fonts.POPPINS,
    fontSize: 12,
    fontWeight: '300',
  },
  square: {
    width: 23,
    height: 23,
    borderRadius: 5,
    marginLeft: 10,
  },
  wrapperSpeed: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  textName: {
    color: Colors.CFFFFFF,
    fontFamily: Fonts.POPPINS,
    fontSize: 18,
    fontWeight: '500',
  },
  wrapperInfoSeats: {
    marginRight: 16,
  },
  textDirection: {
    color: Colors.CFFFFFF,
    fontFamily: Fonts.POPPINS,
    fontSize: 9,
    fontWeight: '400',
  },
  wrapperDescription: {
    width: '60%',
    paddingLeft: 15,
    backgroundColor: Colors.C3F86FA,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    paddingTop: 12,
    paddingBottom: 12,
    justifyContent: 'center',
    height: 47,
  },
  textTitle: {
    color: Colors.C252525,
    fontFamily: Fonts.POPPINS,
    fontSize: 26,
    fontWeight: '500',
    marginLeft: 10,
  },
  wrapperInfo: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
