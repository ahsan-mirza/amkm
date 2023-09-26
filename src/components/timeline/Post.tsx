import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Animated,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Easing,
  TouchableWithoutFeedback,
} from 'react-native';
import Video from 'react-native-video';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../utils';
import {getMusicNoteAnim} from '../utils';
import {ITimeline} from '../../utils/types';
import ImageComponent from './ImageComponent';
import {hp} from '../common/Responsive';
import VideoComponent from './VideoComponent';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useMst} from '../../mobX/store/RootStoreProvider';
import {observer} from 'mobx-react-lite';

export const Post = ({
  data,
  isActive,
  activeIndex,
}: {
  data: ITimeline;
  isActive: boolean;
  activeIndex: number;
}) => {
  const {
    type,
    numOfLikes,
    publishedAt,
    userId,
    textCaption,
    mentions,
    numOfComments,
    id,
    tags,
    uri,
    isPlaying,
  } = data;
  const [isPlay, setIsPlay] = useState<boolean>(false);
  const discAnimatedValue = useRef(new Animated.Value(0)).current;
  const musicNoteAnimatedValue1 = useRef(new Animated.Value(0)).current;
  const musicNoteAnimatedValue2 = useRef(new Animated.Value(0)).current;

  const discAnimation = {
    transform: [
      {
        rotate: discAnimatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg'],
        }),
      },
    ],
  };
  const musicNoteAnimation1 = getMusicNoteAnim(musicNoteAnimatedValue1, false);
  const musicNoteAnimation2 = getMusicNoteAnim(musicNoteAnimatedValue2, true);

  const discAnimLoopRef = useRef<any>();
  const musicAnimLoopRef = useRef<any>();

  const triggerAnimation = useCallback(() => {
    discAnimLoopRef.current = Animated.loop(
      Animated.timing(discAnimatedValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    );
    discAnimLoopRef.current.start();
    musicAnimLoopRef.current = Animated.loop(
      Animated.sequence([
        Animated.timing(musicNoteAnimatedValue1, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(musicNoteAnimatedValue2, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ]),
    );
    musicAnimLoopRef.current.start();
  }, [discAnimatedValue, musicNoteAnimatedValue1, musicNoteAnimatedValue2]);

  useEffect(() => {
    if (isActive) {
      triggerAnimation();
    } else {
      discAnimLoopRef.current?.stop();
      musicAnimLoopRef.current?.stop();
      discAnimatedValue.setValue(0);
      musicNoteAnimatedValue1.setValue(0);
      musicNoteAnimatedValue2.setValue(0);
    }
  }, [
    isActive,
    triggerAnimation,
    discAnimatedValue,
    musicNoteAnimatedValue1,
    musicNoteAnimatedValue2,
  ]);

  const bottomTabHeight = useBottomTabBarHeight();
  const statusBarHeight = StatusBar.currentHeight || 0;
  return (
    <View
      style={[
        styles.container,
        {height: WINDOW_HEIGHT - bottomTabHeight - statusBarHeight},
      ]}>
      <StatusBar barStyle={'light-content'} />

      {type.toLowerCase() === 'video' ? (
        <TouchableWithoutFeedback onPress={() => setIsPlay(!isPlay)}>
          <Video
            source={{uri: uri}}
            style={styles.video}
            resizeMode="cover"
            paused={isPlay}
            repeat
            onBuffer={()=>console.log('buffering')}
          />
        </TouchableWithoutFeedback>
      ) : (
        // <TouchableWithoutFeedback onPress={() => setIsPlay(!isPlay)}>
        //   <VideoComponent source={uri} isPlay={isPlay} sx={styles.video} />
        // </TouchableWithoutFeedback>
        <ImageComponent source={uri} sx={styles.video} />
      )}

      <View style={styles.bottomSection}>
        <View style={styles.bottomLeftSection}>
          <Text style={styles.channelName}>channel Name</Text>
          <Text style={styles.caption}>{textCaption}</Text>
          <Text style={styles.musicName}>Tags: {tags.join(', ')}</Text>
          <Text style={styles.musicName}>Mentions: {mentions.join(', ')}</Text>
          <View style={styles.musicNameContainer}>
            <Image
              source={require('../../assets/images/music-note.png')}
              style={styles.musicNameIcon}
            />
            <Text style={styles.musicName}>demo</Text>
          </View>
        </View>
        <View style={styles.bottomRightSection}>
          <Animated.Image
            source={require('../../assets/images/floating-music-note.png')}
            style={[styles.floatingMusicNote, musicNoteAnimation1]}
          />
          <Animated.Image
            source={require('../../assets/images/floating-music-note.png')}
            style={[styles.floatingMusicNote, musicNoteAnimation2]}
          />
          <Animated.Image
            source={require('../../assets/images/disc.png')}
            style={[styles.musicDisc, discAnimation]}
          />
        </View>
      </View>

      <View style={styles.verticalBar}>
        <View style={styles.verticalBarItem}>
          <View style={[styles.verticalBarItem, styles.avatarContainer]}>
            <Image
              style={styles.avatar}
              source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
            />

            <View style={styles.followButton}>
              <Image
                source={require('../../assets/images/plus-button.png')}
                style={styles.followIcon}
              />
            </View>
          </View>
          <Text style={styles.userId}>@{userId.substring(1, 8)}</Text>
        </View>

        <View style={styles.verticalBarItem}>
          <Image
            style={styles.verticalBarIcon}
            source={require('../../assets/images/heart.png')}
          />
          <Text style={styles.verticalBarText}>{numOfLikes}</Text>
        </View>
        <View style={styles.verticalBarItem}>
          <Image
            style={styles.verticalBarIcon}
            source={require('../../assets/images/message-circle.png')}
          />
          <Text style={styles.verticalBarText}>{numOfComments}</Text>
        </View>
        <View style={styles.verticalBarItem}>
          <Image
            style={styles.verticalBarIcon}
            source={require('../../assets/images/reply.png')}
          />
          <Text style={styles.verticalBarText}>Share</Text>
        </View>
      </View>
    </View>
  );
};

export default observer(Post);

const styles = StyleSheet.create({
  container: {
    width: WINDOW_WIDTH,
  },
  video: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
  bottomSection: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 8,
    paddingBottom: 16,
  },
  bottomLeftSection: {
    flex: 4,
  },
  bottomRightSection: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  channelName: {
    color: 'white',
    fontWeight: 'bold',
  },
  userId: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: hp(3),
  },
  caption: {
    color: 'white',
    marginVertical: 8,
  },
  musicNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  musicNameIcon: {
    width: 12,
    height: 12,
    marginRight: 8,
  },
  musicName: {
    color: 'white',
  },
  musicDisc: {
    width: 40,
    height: 40,
  },
  verticalBar: {
    position: 'absolute',
    right: 8,
    bottom: 72,
  },
  verticalBarItem: {
    marginBottom: 24,
    alignItems: 'center',
  },
  verticalBarIcon: {
    width: 32,
    height: 32,
  },
  verticalBarText: {
    color: 'white',
    marginTop: 4,
  },
  avatarContainer: {
    marginBottom: hp(2),
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  followButton: {
    position: 'absolute',
    bottom: -8,
  },
  followIcon: {
    width: 21,
    height: 21,
  },
  floatingMusicNote: {
    position: 'absolute',
    right: 40,
    bottom: 16,
    width: 16,
    height: 16,
    tintColor: 'white',
  },
});
