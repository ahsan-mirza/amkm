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
import { wp } from "./Responsive";
import DisableEye from "../../assets/images/disableEye.svg";
import ActiveEye from "../../assets/images/ActiveEye.svg";
interface Props {
  placeholder: any;
  show?: boolean;
  eye?: boolean;
  setEye?: (arg: boolean) => void;
  onChangeText?: (arg: string | undefined) => void;
  value?: any;
}
const TextField = (props: Props) => {
  const { colors } = useTheme();
  return (
    <View style={styles.inputContainer}>
      <TextInput
        secureTextEntry={props.show && !props.eye}
        style={{ ...styles.textField, ...{ color: "#363636" } }}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
        placeholderTextColor={colors.PlaceHolderText}
      />
      {props.show && (
        <View>
          <TouchableOpacity onPress={() => props.setEye!(!props.eye)}>
            {props.eye ? <ActiveEye /> : <DisableEye />}
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderBottomColor: "#EFEFF1",
    borderBottomWidth: 1,
    paddingBottom: Platform.OS == "ios" ? wp(3) : 0,
    width: wp(80),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textField: {
    fontFamily: Fonts.ManropeRegular,
    width: wp(70),
  },
});
export default TextField;
