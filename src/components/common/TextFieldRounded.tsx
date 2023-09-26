import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useTheme } from "@react-navigation/native";

import Fonts from "../../theme/fonts";
import { hp, wp } from "./Responsive";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";


const searcText = [
  {text:'mani'},
  {text:'paddy'},
  {text:'Full Body massage'},
]
interface Props {
  Icon?:any;
  placeholder: any;
  show?: boolean;
  eye?: boolean;
  setEye?: (arg: boolean) => void;
  onChangeText?: (arg: string | undefined) => void;
  value?: any;
  sx?:any
}
const TextFieldRounded = (props: Props) => {
  const {Icon,sx} = props
  const { colors } = useTheme();

  return (
    <View style={{...styles.inputContainer,...{sx}}}>
      {Icon && <Icon style={styles.searchIcon}/>}
      <TextInput
        style={{ ...styles.textField, ...{ color: "#363636" } }}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
        placeholderTextColor={colors.PlaceHolderText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    paddingVertical:hp(3),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: "#EFEFF1",
    borderWidth: 1,
    width: wp(80),
    height: 48,
    borderRadius: 10,
  

  },

  searchIcon: {

    marginLeft:wp(5),
    padding: 10,
    marginHorizontal: 10,
    height: 25,
    width: 25,
    color: '#6F7E8C',
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  textField: {
    fontFamily: Fonts.ManropeRegular,

  },
});
export default TextFieldRounded;
