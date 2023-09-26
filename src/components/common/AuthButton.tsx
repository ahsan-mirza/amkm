import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";

import ResponsiveText from "./ResponseiveText";
import { wp } from "./Responsive";

interface props {
  title: string;
  onPress?: (data: any) => void;
  disabled?: boolean;
}

const AuthButton = (props: props) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      disabled={props.disabled}
      onPress={props.onPress}
      style={
        //@ts-ignore
        styles.btn(colors, props.disabled)
      }
    >
      <ResponsiveText style={{ color: "white" }}>{props.title}</ResponsiveText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  //@ts-ignore
  btn: (colors, disable) => ({
    backgroundColor: disable ? "#bebebe" : colors.Primary,
    width: wp(80),
    height: wp(12),
    borderRadius: wp(10),
    justifyContent: "center",
    alignItems: "center",
  }),
});

export default AuthButton;
