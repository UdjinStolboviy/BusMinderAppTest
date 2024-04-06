import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  Image,
  Platform,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {ScreenView} from '../components/ScreenView';
import {Fonts} from '../../assets/constants/fonts';
import {buses} from '../../assets/data/buses';
import {Colors} from '../../assets/constants/colors';
import {NavigatorConstants} from '../utils/navigator-constants';
import {BusType} from '../../assets/type';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigator/RootStackParamList';
export interface HomeScreenProps {
  containerStyle?: StyleProp<ViewStyle>;
}

export const HomeScreen = (props: HomeScreenProps) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const listItem = ({item}) => {
    const onPress = (item: BusType) => {
      navigation.navigate(NavigatorConstants.BOTTOM_TAB_STACK, {bus: item});
    };
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => onPress(item)}
        style={styles.containerItem}>
        <View style={styles.wrapperTitleItem}>
          <Text style={styles.textTitleItem}>{item.name}</Text>
          <Text style={styles.textDirection}>{item.direction}</Text>
        </View>
        <Image source={item.imageUrl} style={styles.imgItem} />
      </TouchableOpacity>
    );
  };
  return (
    <ScreenView>
      <View style={[styles.container, props.containerStyle]}>
        <Text style={styles.textTitle}>Select your route</Text>
        <FlatList
          data={buses as BusType[]}
          showsVerticalScrollIndicator={false}
          renderItem={listItem}
          keyExtractor={item => item.id}
        />
      </View>
    </ScreenView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    alignItems: 'center',
    marginBottom: Platform.OS === 'ios' ? -35 : 0,
  },
  imgItem: {
    marginLeft: 21,
    marginTop: 20,
    height: 259,
    width: 250,
  },
  textDirection: {
    color: Colors.CFFFFFF,
    fontFamily: Fonts.POPPINS,
    fontSize: 14,
    fontWeight: '400',
  },
  textTitleItem: {
    color: Colors.CFFFFFF,
    fontFamily: Fonts.POPPINS,
    fontSize: 25,
    fontWeight: '500',
  },
  wrapperTitleItem: {
    backgroundColor: Colors.C3F86FA,
    height: 93,
    paddingTop: 27,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  containerItem: {
    width: 271,
    height: 340,

    marginBottom: 25,
    borderRadius: 20,
    backgroundColor: Colors.CFFFFFF,
  },
  textTitle: {
    fontFamily: Fonts.POPPINS,
    color: Colors.C000000,
    fontWeight: '500',
    fontSize: 26,
    marginBottom: 30,
  },
});
