import React from 'react';
import FastImage from 'react-native-fast-image';

interface ImageComponentProps {
  source: string;
  sx?: any
}

const ImageComponent: React.FC<ImageComponentProps> = ({source,sx}) => {
  return <FastImage source={{uri: source}} style={sx} />;
};

export default ImageComponent;
