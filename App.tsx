import React from 'react';
import ErrorBoundary from 'react-native-error-boundary';
import RNRestart from 'react-native-restart';
import {Button, Text, useColorScheme, View, LogBox} from 'react-native';

import Navigation from './src/navigation/MainStack';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from './src/mobX/store/RootStoreProvider';

if (__DEV__) {
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  ]);
}
const CustomFallback = (props: {error: Error; resetError: Function}) => (
  <View>
    <Text>Something happened!</Text>
    <Text>{props.error.toString()}</Text>
    <Button onPress={refreshApp} title={'Try again'} />
  </View>
);

const refreshApp = () => {
  RNRestart.Restart();
};

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ErrorBoundary FallbackComponent={CustomFallback}>
      <Provider>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
