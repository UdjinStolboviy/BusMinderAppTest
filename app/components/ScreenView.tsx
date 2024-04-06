import React, {ReactNode} from 'react';
import {
  StatusBar,
  View,
  Platform,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';

interface IScreenViewProps {
  children: ReactNode;
}

export const ScreenView: React.FC<IScreenViewProps> = ({children}) => {
  const SCREEN_WIDTH = Dimensions.get('window').width;
  return (
    <View style={[styles.container]}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'light-content'}
      />
      {Platform.OS === 'ios' ? (
        <SafeAreaView
          style={[
            {
              backgroundColor: '#fff',
              flex: 1,
              width: SCREEN_WIDTH,
            },
          ]}>
          {children}
        </SafeAreaView>
      ) : (
        <View
          style={[
            {
              backgroundColor: '#fff',
              flex: 1,
              marginTop: StatusBar.currentHeight,
              width: SCREEN_WIDTH,
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
  },
});
