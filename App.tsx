import React, {useEffect, useState} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {AppProvider} from './app/contexts';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import {RootNavigationContainer} from './app/navigator/RootNavigationContainer';
import {NavigatorConstants} from './app/utils/navigator-constants';

const App = () => {
  const [initialRouteName, setInitialRouteName] = useState<string | null>(null);
  useEffect(() => {
    initialize();
  }, []);
  const initialize = () => {
    setInitialRouteName(NavigatorConstants.APP_STACK);
    setTimeout(() => {
      SplashScreen.hide();
    }, 100);
  };

  if (initialRouteName) {
    return (
      <SafeAreaProvider>
        <GestureHandlerRootView style={{flex: 1}}>
          <AppProvider>
            <RootNavigationContainer
              initialRouteName={initialRouteName as any}
            />
          </AppProvider>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    );
  } else {
    return null;
  }
};

export default App;
