// src/components/Timeline.tsx
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Image, StyleSheet, View, VirtualizedList} from 'react-native';
import {observer} from 'mobx-react-lite';

import {useMst} from '../../mobX/store/RootStoreProvider';
import {Text} from 'react-native-svg';
import Post from './Post';
import {
  createBottomTabNavigator,
  useBottomTabBarHeight,
} from '@react-navigation/bottom-tabs';
import {WINDOW_HEIGHT} from '../utils';

const BottomTab = createBottomTabNavigator();
const Timeline: React.FC = observer(() => {
  const {timelineStore} = useMst();
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const bottomTabHeight = useBottomTabBarHeight();
  const list = useMemo(() => timelineStore.list, [timelineStore.list]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    timelineStore.fetchTimelineData();
  }, []);

  useEffect(() => {
    setPosts(
      list.map(item => ({
        numOfLikes: item.numOfLikes,
        publishedAt: item.publishedAt,
        userId: item.userId,
        textCaption: item.textCaption,
        mentions: item.mentions.map(i => i),
        numOfComments: item.numOfComments,
        id: item.id,
        tags: item.tags.map(j => j),
        uri: item.contentMeta[0].fileId,
        type: item.contentMeta[0].type,
        isPlaying: item.isPlaying,
      })),
    );
  }, []);

  const getItem = (item: any, index: number) => item[index];

  return (
    <View>
      <VirtualizedList
        removeClippedSubviews={true}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        data={posts}
        keyExtractor={(_, index) => index.toString()}
        renderItem={useCallback(
          ({item, index}: any) => (
            <Post
              data={item}
              isActive={activeVideoIndex === index}
              activeIndex={index}
            />
          ),
          [],
        )}
        onScroll={(e: any) => {
          const index = Math.round(
            e.nativeEvent.contentOffset.y / (WINDOW_HEIGHT - bottomTabHeight),
          );
          setActiveVideoIndex(index);
        }}
        getItemCount={post => post.length}
        getItem={getItem}
      />
    </View>
  );
});

export default () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: 'black'},
        headerShown: false,
        tabBarActiveTintColor: 'white',
      }}>
      <BottomTab.Screen
        name="Home"
        component={Timeline}
        options={{
          tabBarIcon: ({focused}: any) => (
            <Image
              source={require('../../assets/images/home.png')}
              style={[
                styles.bottomTabIcon,
                focused && styles.bottomTabIconFocused,
              ]}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Discover"
        component={Timeline}
        options={{
          tabBarIcon: ({focused}: any) => (
            <Image
              source={require('../../assets/images/search.png')}
              style={[
                styles.bottomTabIcon,
                focused && styles.bottomTabIconFocused,
              ]}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="NewVideo"
        component={Timeline}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({focused}: any) => (
            <Image
              source={require('../../assets/images/new-video.png')}
              style={[
                styles.newVideoButton,
                focused && styles.bottomTabIconFocused,
              ]}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Inbox"
        component={Timeline}
        options={{
          tabBarIcon: ({focused}: any) => (
            <Image
              source={require('../../assets/images/message.png')}
              style={[
                styles.bottomTabIcon,
                focused && styles.bottomTabIconFocused,
              ]}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Timeline}
        options={{
          tabBarIcon: ({focused}: any) => (
            <Image
              source={require('../../assets/images/user.png')}
              style={[
                styles.bottomTabIcon,
                focused && styles.bottomTabIconFocused,
              ]}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomTabIcon: {
    width: 20,
    height: 20,
    tintColor: 'grey',
  },
  bottomTabIconFocused: {
    tintColor: 'white',
  },
  newVideoButton: {
    width: 48,
    height: 24,
  },
});
