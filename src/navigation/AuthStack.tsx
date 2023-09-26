import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackI } from './RootStackParams';
import LoginScreen from '../screens/auth/LoginScreen';
const { Navigator, Screen } = createNativeStackNavigator < AuthStackI > ();

const AuthStack = () => {

    return (
        <Navigator
            initialRouteName="LoginScreen"
            screenOptions={{ headerShown: false }}>
            <Screen component={LoginScreen} name="LoginScreen" />
            {/* <Screen component={ForgotScreen} name="ForgotScreen" />
            <Screen component={ResetPassword} name="ResetPassword" />
            <Screen component={CheckEmail} name="CheckEmail" />
            <Screen component={SignupScreen} name="SignupScreen" />
            <Screen component={OTPVerification} name="OTPVerification" />
            <Screen component={VerificationScreen} name="VerificationScreen" /> */}
        </Navigator>
    );
};

export default AuthStack;
