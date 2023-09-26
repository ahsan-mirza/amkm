// src/components/TimelineItem.tsx
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {observer} from 'mobx-react-lite';
import {useMst} from '../../mobX/store/RootStoreProvider';
import VideoComponent from './VideoComponent';
import ImageComponent from './ImageComponent';
import {ITimeline} from '../../utils/types';
import {convertDateStringToDateTime} from '../../utils/_helper';
import { hp, wp } from '../common/Responsive';
const TimelineItem: React.FC<ITimeline> = observer(
  ({
    contentMeta,
    numOfLikes,
    publishedAt,
    userId,
    textCaption,
    mentions,
    numOfComments,
    id,
    tags,
    isPlaying,
  }) => {
    const {timelineStore} = useMst();

    return (
      <View >
        <View style={styles.avatarContainer}>
          <Image
            source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
            style={styles.avatar}
          />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.userName}>Ahsan Mirza</Text>
          <Text style={styles.postText}>Post text here</Text>
          {contentMeta &&
            (contentMeta[0].type.toLowerCase() === 'video' ? (
              <VideoComponent
                source={contentMeta[0].fileId}
                isPlaying={isPlaying}
                onPress={() => timelineStore.togglePlay(id)}
                sx={styles.postImage}
              />
            ) : (
              <ImageComponent
                source={contentMeta[0].fileId}
                sx={styles.postImage}
              />
            ))}
          <View style={styles.postDetails}>
            <Text style={styles.detailText}>{numOfLikes} Likes</Text>
            <Text style={styles.detailText}>
              {convertDateStringToDateTime(publishedAt)}
            </Text>
          </View>
          <Text style={styles.captionText}>{textCaption}</Text>
          {mentions.length > 0 && (
            <View style={styles.mentionsContainer}>
              <Text style={styles.mentionsText}>
                Mentions: {mentions.join(', ')}
              </Text>
            </View>
          )}
          <View style={styles.footerContainer}>
            <Text style={styles.detailText}>{numOfComments} Comments</Text>
            <Text style={styles.detailText}>Tags: {tags.join(', ')}</Text>
          </View>
        </View>
      </View>
    );
  },
);

export default TimelineItem;

const styles = StyleSheet.create({
  timelineItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  avatarContainer: {
    padding: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentContainer: {
    flex: 1,
    padding: 10,
  },
  userName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  postText: {
    marginBottom: 10,
  },
  postImage: {
    width: wp(100),
    height: hp(100),
    borderRadius: 8,
    marginBottom: 10,
  },
  postDetails: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  detailText: {
    marginRight: 10,
  },
  captionText: {
    marginBottom: 10,
  },
  mentionsContainer: {
    marginBottom: 10,
  },
  mentionsText: {
    fontStyle: 'italic',
  },
  footerContainer: {
    flexDirection: 'row',
  },
});
