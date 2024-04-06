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

const CustomBottomTab = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const {width} = useWindowDimensions();

  return (
    <View style={[styles.tabBarContainer, {width: 40, bottom: 10}]}>
      {state.routes.slice(0, 5).map((route, index) => {
        const {options} = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, {merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <View style={styles.contentContainer}>
              <Text>route.key</Text>
            </View>
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
    height: 64,
    position: 'absolute',
    alignSelf: 'center',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 15,
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
