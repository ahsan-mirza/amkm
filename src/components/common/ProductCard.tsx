import React from 'react'
import { Alert, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import ResponsiveText from './ResponseiveText'
import { DefaultTheme } from '../../theme/colors'
import { hp, wp } from './Responsive'
import LikeIcon from '../../assets/images/svg/Like.svg';
import GasIcon from '../../assets/images/svg/gas.svg';
import TypeIcon from '../../assets/images/svg/type.svg';
import UserIcon from '../../assets/images/svg/profile.svg';


function ProductCard() {
  return (
    <>
    <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.cardTitle}>
                <ResponsiveText style={styles.carName}>
                  Koenigsegg
                </ResponsiveText>
                <ResponsiveText style={styles.carType}>Sports</ResponsiveText>
              </View>
              <LikeIcon />
            </View>
            <View style={styles.carImageContainer}>
              <Image
                style={styles.carImg}
                source={require('../../assets/images/car/car.png')}
              />
            </View>
            <View style={styles.optionSection}>
              <View style={styles.option}>
                <GasIcon />
                <ResponsiveText style={styles.optionText}>
                  Petrol
                </ResponsiveText>
              </View>
              <View style={styles.option}>
                <TypeIcon />
                <ResponsiveText style={styles.optionText}>
                  Manual
                </ResponsiveText>
              </View>
              <View style={styles.option}>
                <UserIcon />
                <ResponsiveText style={styles.optionText}>
                  2 People
                </ResponsiveText>
              </View>
            </View>
            <View style={styles.lower}>
              <View style={styles.detailSection}>
                <ResponsiveText style={styles.price}>$180.00/</ResponsiveText>
                <ResponsiveText style={styles.detail}>day</ResponsiveText>
              </View>

              <TouchableOpacity
                onPress={() => Alert.alert('rented')}
                style={styles.btn}>
                <ResponsiveText
                  style={{color: 'white', fontWeight: 'bold', fontSize: 3}}>
                  Rent Now
                </ResponsiveText>
              </TouchableOpacity>
            </View>
          </View>
    </>
  )
}

export default ProductCard


const styles = StyleSheet.create({
    card: {
        width: wp(55),
        height: hp(40),
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        flex: 1,
      },
      cardHeader: {
        display: 'flex',
        flexDirection: 'row',
      },
      cardTitle: {
        flex: 1,
        flexDirection: 'column',
      },
      carName: {
        color: 'black',
        fontWeight: 'bold',
      },
      carType: {
        color: DefaultTheme.colors.TextLight,
        fontSize: 3,
        marginTop: hp(0.7),
      },
      carImageContainer: {
        flex: 1,
        paddingHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
      },
      carImg: {},
      optionSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      option: {
        display: 'flex',
        flexDirection: 'row',
    
        marginTop: hp(0.7),
        justifyContent: 'center',
        alignItems: 'center',
      },
      optionText: {
        marginLeft: 3,
        fontSize: 3,
        color: DefaultTheme.colors.TextLight,
      },
      detailLine: {
        gap: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
      },
      lower: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    
      detailSection: {
        display: 'flex',
        flexDirection: 'column',
      },
      detail: {
        color: '#90A3BF',
        fontSize: 3,
      },
      price: {
        fontSize: 4,
        fontWeight: 'bold',
      },
      btn: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: DefaultTheme.colors.Primary,
    
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
      },
})