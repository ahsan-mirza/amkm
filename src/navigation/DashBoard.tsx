import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { registerUserI } from './RootStackParams';
import Timeline from '../components/timeline/Timeline';

interface Props {
  navigation: NavigationProp<ParamListBase>;

}
function DashBoardStack(props: Props) {
  const {Navigator, Screen} = createNativeStackNavigator<registerUserI>();

  return (
    <Navigator initialRouteName='Timeline' screenOptions={{ headerShown: false }}>
      <Screen name="Timeline" component={Timeline} />
    </Navigator>
  );
}

export default DashBoardStack;
