import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { DefaultTheme } from '../../theme/colors';
import { wp } from './Responsive';

export default function TextInputWithButton() {
  return (
    <View style={styles.container}>
      <View style={styles.firstBox}>
        <View style={styles.row}>
          <TextInput
            placeholder="Apply promo code"
            placeholderTextColor="gray"
            style={styles.input}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Apply Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,

  },
  buttonText: {
    color:DefaultTheme.colors.Secondary,
    fontWeight:'bold',
    fontSize:16,
    backgroundColor:DefaultTheme.colors.InputBackground
  },
  input: {
    paddingHorizontal:wp(5),
    flex: 2,
    borderRadius: 5,
    backgroundColor:DefaultTheme.colors.InputBackground
  },
  button: {
    paddingHorizontal:wp(3),
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    color:DefaultTheme.colors.Secondary,
    backgroundColor:DefaultTheme.colors.InputBackground
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
});
