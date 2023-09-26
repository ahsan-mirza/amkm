import React, {useState} from 'react';
import VideoPlayer from 'react-native-video-player';
import {hp, wp} from '../common/Responsive';
import Video from 'react-native-video';

interface VideoComponentProps {
  source: string;
  isPlay: boolean;

  thumbnail?: string;
  sx: any;
}

const VideoComponent: React.FC<VideoComponentProps> = ({
  source,
  isPlay,
  thumbnail,
  sx,
}) => {

 
  return (
    
    <VideoPlayer
      video={{
        uri: source,
      }}
      videoWidth={wp(100)}
      videoHeight={hp(100)}
      thumbnail={{uri: thumbnail}}
      customStyles={{seekBarBackground:'black'}}
      paused={isPlay}
      autoplay = {true}
      style={{backgroundColor:'black'}}
      resizeMode="cover"
      repeat={true}
    />
  );
};

export default VideoComponent;
