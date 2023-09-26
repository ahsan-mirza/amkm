import React, {useState} from 'react';
import Container from '../../components/common/Container';
import Content from '../../components/common/Content';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {hp, wp} from '../../components/common/Responsive';
import Arrow from '../../assets/images/arrow_left.svg';
import Logo from '../../assets/images/logo.svg';
import ResponsiveText from '../../components/common/ResponseiveText';
import {useTheme} from '@react-navigation/native';
import TextField from '../../components/common/TextField';
import AuthButton from '../../components/common/AuthButton';

const LoginScreen = props => {
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [eye, setEye] = useState<boolean>(false);
  const {colors} = useTheme();

  const checkValidation = async () => {
    if (!email) {
      setEmailError(true);
    } else if (!password) {
      setPasswordError(true);
    } else {
    }
  };
  return (
    <Container backgroundColor={'white'} barStyle={'dark-content'}>
      <Content bounces={false} contentContainerStyle={styles.container}>
        <View style={styles.viewContainer}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('DashBoardStack')}
            style={{position: 'absolute', top: wp(5), left: wp(-3)}}>
            <Arrow width={wp(7)} height={wp(7)} />
          </TouchableOpacity>

          <Logo width={wp(40)} height={hp(10)} />
          <ResponsiveText
            style={{...styles.orText, color: colors.PlaceHolderText}}>
            or
          </ResponsiveText>
          <View>
            <TextField
              onChangeText={e => {
                setEmailError(false);
                setEmail(e);
              }}
              value={email}
              placeholder={'Email ID / Mobile Number'}
            />
            {emailError && (
              <ResponsiveText style={styles.errorField}>
                Email ID / Mobile Number is missing!
              </ResponsiveText>
            )}
          </View>
          <View style={{marginTop: wp(10)}}>
            <TextField
              setEye={setEye}
              eye={eye}
              show={true}
              placeholder={'Password'}
              onChangeText={e => {
                setPasswordError(false);
                setPassword(e);
              }}
              value={password}
            />
            {passwordError && (
              <ResponsiveText style={styles.errorField}>
                Password is missing!
              </ResponsiveText>
            )}
          </View>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('ForgotScreen');
            }}
            style={{alignSelf: 'flex-end'}}>
            <ResponsiveText
              style={{...styles.forgotText, color: colors.Primary}}>
              Forgot Password?
            </ResponsiveText>
          </TouchableOpacity>
          <View style={{paddingVertical: wp(10)}}>
            <AuthButton
              onPress={() => {
                checkValidation();
              }}
              title={'Login'}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <ResponsiveText
              style={{fontSize: 3.5, color: colors.PlaceHolderText}}>
              Don’t have an account?
            </ResponsiveText>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('SignupScreen');
              }}>
              <ResponsiveText style={{fontSize: 3.5, color: colors.Primary}}>
                Register Now
              </ResponsiveText>
            </TouchableOpacity>
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  color: {
    backgroundColor: '#000000',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  forgotText: {
    fontSize: 3.5,
    marginTop: wp(3),
  },
  orText: {
    marginVertical: wp(5),
  },
  logoStyle: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },

  social: {
    flexDirection: 'row',
    marginTop: wp(10),
  },
  //@ts-ignore
  socialContainer: (color: string) => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(1),
    // borderWidth: 0.5,
    // borderColor: color,
    width: wp(35),
    height: wp(10),
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  }),
  errorField: {
    marginTop: wp(2),
    fontSize: 3,
    color: 'red',
  },
});
