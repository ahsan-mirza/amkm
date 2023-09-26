import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Button,
} from 'react-native';
import {
  DefaultTheme,
  DrawerActions,
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

import React, {useState} from 'react';
import HamberIon from '../../assets/images/Vector.svg';


import {wp, hp} from '../common/Responsive';
import ResponsiveText from '../common/ResponseiveText';
import Fonts from '../../theme/fonts';
import TextFieldRounded from './TextFieldRounded';
import Filter from '../../assets/images/HomeIcons/filter.svg';
import SearchIcon from '../../assets/images/HomeIcons/search-normal.svg';

interface Props {
  name: string | undefined | null;
  navigation?: NavigationProp<ParamListBase>;
  Profile?: any;
}
const Header = (props: Props) => {
  const navigation = useNavigation();
  const login = false;
  const {Profile} = props;
  const [search, setSearch] = useState<string | undefined>(undefined);
  const onPress = () => {
    console.log('filter');
  };
  return (
    <View style={style.mainContainer}>
      <View style={style.headerContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => {}} style={style.burgerContainer}>
            <HamberIon />
          </TouchableOpacity>
          <View>
            <ResponsiveText style={style.titleText}>Car Rental</ResponsiveText>
          </View>
        </View>
        <View>
          {login ? (
            <Image
              style={style.tinyLogo}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
              }}
            />
          ) : (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('AuthStack', {screen: 'LoginScreen'});
              }}
              style={style.burgerContainer}>
              <ResponsiveText>login</ResponsiveText>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={style.inputArea}>
        <TextFieldRounded
          Icon={SearchIcon}
          onChangeText={e => {
            setSearch(e);
          }}
          value={search}
          placeholder={'Search... '}
          sx={style.searchInput}
        />
        <TouchableOpacity style={style.filetBtn} onPress={onPress}>
          <Filter />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: wp(1),
    paddingVertical: hp(1),
  },
  headerContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  burgerContainer: {
    backgroundColor: 'white',
    width: wp(10),
    height: wp(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(3),
    marginRight: wp(4),
  },
  inputArea: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: hp(2),
    marginHorizontal: wp(3),
  },
  titleText: {
    fontFamily: Fonts.ManropeBold,
    fontSize: 6,
    color: DefaultTheme.colors.primary,
    fontWeight: 'bold',
  },
  tinyLogo: {
    marginEnd: wp(1),
    width: wp(10),
    height: wp(10),
  },
  searchInput: {
    width: wp(80),
  },
  filetBtn: {
    width: 'auto',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'none',
    borderColor: '#EFEFF1',
    borderWidth: 1,
  },
});
export default Header;
