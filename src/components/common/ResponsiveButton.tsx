import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';

import ResponsiveText from './ResponseiveText';
import {wp} from './Responsive';

interface props {
  title: string;
  onPress?: (data: any) => void;
  disabled?: boolean;
  sx?: any;
}

const ResponsiveButton = (props: props) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      disabled={props.disabled}
      onPress={props.onPress}
      style={
        //@ts-ignore
        {...styles.btn(colors, props.disabled)}
      }>
      <ResponsiveText style={{color: 'white', fontWeight:'bold'}}>{props.title}</ResponsiveText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  //@ts-ignore
  btn: (colors, disable) => ({
 
    paddingHorizontal: 20,
    paddingVertical:10  ,
    backgroundColor: disable ? '#bebebe' : colors.Primary,
    borderRadius:5,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight:'bold',
  }),
});

export default ResponsiveButton;
