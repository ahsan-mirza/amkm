import React from "react";
import { ScrollView, View, Platform, KeyboardAvoidingView } from "react-native";

const Content = (props: any) => {
    const style = props.style ? props.style : [];

    if (props.keyboardAvoidingView) {
        return (
            <KeyboardAvoidingView
                style={[styles.container, style]}
                behavior={Platform.OS === "ios" ? "height" : "padding"}
            >
                <View style={[styles.container, style]}>{props.children}</View>
            </KeyboardAvoidingView>
        );
    }

    return (
        <ScrollView
            {...props}
            style={[styles.container, style]}
            contentContainerStyle={props.contentContainerStyle}
            refreshControl={props.refreshControl}
            showsVerticalScrollIndicator={false}
        >
            <View style={[styles.container, style]}>{props.children}</View>
        </ScrollView>
    );
};

const styles = {
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
};

export default Content;
