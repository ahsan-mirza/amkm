import {Alert, Button, StyleSheet, View} from 'react-native';
import ResponsiveText from './ResponseiveText';
import {hp, wp} from './Responsive';
import ResponsiveButton from './ResponsiveButton';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';


interface Props {
  navigation: NavigationProp<ParamListBase>;
}

export default function DetailTable() {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.detailSection}>
        <View style={styles.detailLine}>
          <View style={styles.innerDetailSection}>
            <ResponsiveText style={styles.detail}>Type Car</ResponsiveText>
            <ResponsiveText style={{...styles.detail, ...styles.bold}}>
              Sports
            </ResponsiveText>
          </View>
          <View style={styles.innerDetailSection}>
            <ResponsiveText style={styles.detail}>Capacity</ResponsiveText>
            <ResponsiveText style={{...styles.detail, ...styles.bold}}>
              4 person
            </ResponsiveText>
          </View>
        </View>
        <View style={styles.detailLine}>
          <View style={styles.innerDetailSection}>
            <ResponsiveText style={styles.detail}>Steering</ResponsiveText>
            <ResponsiveText style={{...styles.detail, ...styles.bold}}>
              Manual
            </ResponsiveText>
          </View>
          <View style={styles.innerDetailSection}>
            <ResponsiveText style={styles.detail}>Gasoline</ResponsiveText>
            <ResponsiveText style={{...styles.detail, ...styles.bold}}>
              70 L
            </ResponsiveText>
          </View>
        </View>
      </View>

      <View style={styles.lower}>
        <View style={styles.detailSection}>
          <ResponsiveText style={styles.title}>
            $180.00/ <ResponsiveText style={styles.detail}>day</ResponsiveText>
          </ResponsiveText>
          <ResponsiveText style={styles.detail}>$100.00</ResponsiveText>
        </View>

      
        <ResponsiveButton title='Rent Now'  onPress={() => navigation.navigate("BookingScreen")}/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: wp(1.3),
    fontWeight: 'bold',
  },
  detail: {
    marginTop: hp(2),
    lineHeight: hp(3),
    color: '#90A3BF',
    fontSize: 3,
  },
  bold: {
    fontWeight: 'bold',
    color: 'black',
    marginRight: 0,
  },
  detailSection: {
    display: 'flex',
    flexDirection: 'column',
  },
  innerDetailSection: {
    width: wp(35),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  detailLine: {
    gap: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  lower: {
    width: wp(80),
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: hp(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    padding: 10,

    backgroundColor: '#3563E9',
  },
});
