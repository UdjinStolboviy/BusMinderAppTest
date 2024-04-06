/* eslint-disable react-native/no-inline-styles */
import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {BusIcon} from '../../assets/icons/BusIcon';
import {MapIcon} from '../../assets/icons/MapIcon';
import {InfoIcon} from '../../assets/icons/InfoIcon';
import {Colors} from '../../assets/constants/colors';

const CustomBottomTab = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const {width} = useWindowDimensions();

  return (
    <View style={[styles.tabBarContainer, {width: width, bottom: 10}]}>
      {state.routes.slice(0, 3).map((route, index) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const iconTab = (index: number) => {
          switch (index) {
            case 0:
              return <BusIcon />;
            case 1:
              return <MapIcon />;
            case 2:
              return <InfoIcon />;

            default:
              return null;
          }
        };

        return (
          <Pressable
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={{flex: 1}}>
            <View style={styles.contentContainer}>{iconTab(index)}</View>
          </Pressable>
        );
      })}
    </View>
  );
};

export default CustomBottomTab;

const styles = StyleSheet.create({
  tabBarContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 81,
    backgroundColor: Colors.CFFFFFF,
    position: 'absolute',
    alignSelf: 'center',
    marginBottom: -10,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  slidingTabContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slidingTab: {
    width: Platform.OS == 'ios' ? 65 : 60,
    height: 52,
    borderRadius: 100,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
});
