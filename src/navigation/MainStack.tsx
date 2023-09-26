import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useColorScheme} from 'react-native';
import {DarkTheme, DefaultTheme} from '../theme/colors';

import {MainStack} from './RootStackParams';
import AuthStack from './AuthStack';

import DashBoardStack from './DashBoard';

const App = () => {
  const scheme = useColorScheme();
  const {Navigator, Screen} = createStackNavigator<MainStack>();
  const routeNameRef = React.useRef(null);
  const navigationRef = React.useRef(null);

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Navigator
        initialRouteName="DashBoardStack"
        screenOptions={{headerShown: false}}>
        <Screen component={DashBoardStack} name="DashBoardStack" />
        <Screen component={AuthStack} name="AuthStack" />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
