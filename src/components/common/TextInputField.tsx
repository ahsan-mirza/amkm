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

interface Props {
  label?: string;
  placeholder: any;
  onBlur?: any;
  onChangeText?: any;
  value?: any;
  sx?: any;
  keyboardNumeric?:boolean
}

const TextInputField = ({
  label,
  placeholder,
  onChangeText,
  value,
  sx,
  onBlur,
  keyboardNumeric = true         
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.firstBox}>
        <ResponsiveText style={styles.label}>{label}</ResponsiveText>
        <View style={styles.row}>
          <TextInput
            // keyboardType={keyboardNumeric ? 'numeric' : 'default'}
            placeholder={placeholder}
            placeholderTextColor="gray"
            style={{...styles.input, ...sx}}
            value={value}
            onChangeText={e => {
              onChangeText(e);
            }}
            onBlur={onBlur}            
          />
        </View>
      </View>
    </View>
  );
};

export default TextInputField;

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
    paddingVertical:hp(2),
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
