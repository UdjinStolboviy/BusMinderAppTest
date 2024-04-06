import React, {ReactNode} from 'react';
import {
  StatusBar,
  View,
  Platform,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {Colors} from '../../assets/constants/colors';

interface IScreenViewProps {
  children: ReactNode;
}

export const ScreenView: React.FC<IScreenViewProps> = ({children}) => {
  return (
    <View style={[styles.container]}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'light-content'}
      />
      {Platform.OS === 'ios' ? (
        <SafeAreaView style={styles.container}>{children}</SafeAreaView>
      ) : (
        <View
          style={[
            {
              flex: 1,
              marginTop: StatusBar.currentHeight,
            },
          ]}>
          {children}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.CE8EEF1,
  },
});
