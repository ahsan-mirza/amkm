import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import {DefaultTheme} from '../../theme/colors';
import {hp, wp} from './Responsive';
import ResponsiveText from './ResponseiveText';
import DatePicker from 'react-native-date-picker';

interface Props {
  label?: string;
  location?: any;
  onBlur?: any;
  onChange?: any;
  value?: any;
  sx?: any;
}

const DatePickerUI = ({label, location, onChange, value, sx, onBlur}: Props) => {
  const [date, setDate] = React.useState(new Date());
  const [open, setOpen] = React.useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.firstBox}>
        <ResponsiveText style={styles.label}>{label}</ResponsiveText>
        <View style={styles.row}>
          <TouchableOpacity style={{...styles.input, ...sx}} onPress={() => setOpen(true)} >
            <ResponsiveText>{date ? `${date.toDateString()}` : 'Choose Date'}</ResponsiveText></TouchableOpacity>
          <DatePicker
            modal
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default DatePickerUI;

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
