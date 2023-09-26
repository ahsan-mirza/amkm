import ResponsiveText from './ResponseiveText';
import {Image, StyleSheet, View} from 'react-native';
import Star from '../../assets/images/svg/star.svg';
import {hp, wp} from './Responsive';

function PersonComment() {
  return (
    <>
      <View style={styles.comment}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
            }}
          />
          <View style={styles.personDetail}>
            <ResponsiveText style={styles.personTitle}>
              Alex Bhatti
            </ResponsiveText>
            <ResponsiveText style={styles.detail}> CEO </ResponsiveText>
          </View>
        </View>

        <View style={styles.rating}>
          <ResponsiveText style={styles.ratingText}>
            17 July 2023
          </ResponsiveText>
          <View style={styles.ratingStar}>
            <Star style={styles.star} />
            <Star style={styles.star} />
            <Star style={styles.star} />
            <Star style={styles.star} />
            <Star style={styles.star} />
          </View>
        </View>
      </View>

      <ResponsiveText style={{...styles.detail, marginTop: hp(2)}}>
        NISMO has become the embodiment of Nissan's outstanding performance,
        inspired by the most unforgiving proving ground, the "race track".
      </ResponsiveText>
    </>
  );
}

export default PersonComment;

const styles = StyleSheet.create({
  tinyLogo: {
    marginEnd: wp(1),
    width: wp(10),
    height: wp(10),
  },
  commentMain: {
    display: 'flex',
    flexDirection: 'column',
  },
  comment: {
    width: '100%',
    marginTop: hp(4),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  personDetail: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginLeft: wp(1),
  },
  
  
  personTitle: {
    fontWeight: 'bold',
  },
  title: {
    fontSize: wp(1.3),
    fontWeight: 'bold',
  },
  star: {
    width: wp(10),
  },
  rating: {
    marginTop: hp(1),
    display: 'flex',
    alignItems: 'flex-end',
  },
  ratingStar: {
    display: 'flex',
    flexDirection: 'row',

    justifyContent: 'center',
  },
  ratingText: {
    marginLeft: wp(2),
    color: '#90A3BF',
    fontSize: 3,
  },
  detail: {
    lineHeight: hp(3),
    color: '#90A3BF',
    fontSize: 3,
  },
  bold: {
    fontWeight: 'bold',
    color: 'black',
    marginRight: 0,
  },
  

});
