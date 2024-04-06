import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {ScreenView} from '../components/ScreenView';

export interface InfoScreenProps {
  containerStyle?: StyleProp<ViewStyle>;
}

export const InfoScreen = (props: InfoScreenProps) => {
  const navigation = useNavigation();
  return (
    <ScreenView>
      <View style={[styles.container, props.containerStyle]}>
        <Text> InfoScreen</Text>
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
