import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {DefaultTheme} from '../../theme/colors';
import {hp, wp} from './Responsive';
import ResponsiveText from './ResponseiveText';
import {Picker} from '@react-native-picker/picker';

interface Props {
  label?: string;
  location: any;
  onBlur?: any;
  onChange?: any;
  value?: any;
  sx?: any;

}

const DropDown = ({
  label,
  location,
  onChange,
  value,
  sx,
  onBlur,

}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.firstBox}>
        <ResponsiveText style={styles.label}>{label}</ResponsiveText>
        <View style={styles.row}>
          <Picker  style={{...styles.input, ...sx}} selectedValue={value} onValueChange={onChange}>
            {location!?.map((x: any, i: number) => (
              <Picker.Item label={x!?.name} value={x!?.name} key={i} />
            ))}
          </Picker>
        </View>
      </View>
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  buttonText: {
    color: DefaultTheme.colors.Secondary,
    fontWeight: 'bold',
    fontSize: 16,
    backgroundColor: DefaultTheme.colors.InputBackground,
  },
  input: {
    marginTop: hp(1),
    paddingVertical: hp(2),
    paddingHorizontal: wp(5),
    flex: 2,
    borderRadius: 5,
    backgroundColor: DefaultTheme.colors.InputBackground,
  },
  button: {
    paddingHorizontal: wp(3),
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: DefaultTheme.colors.Secondary,
    backgroundColor: DefaultTheme.colors.InputBackground,
  },
  firstBox: {
    paddingBottom: 2,
    top: -2,
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
  },
  label: {
    fontWeight: 'bold',
  },
});
