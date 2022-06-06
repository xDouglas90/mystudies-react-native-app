import React from 'react';
import { Dimensions } from 'react-native';

import { FavPostContainer, FavPostCover, FavPostTitle } from './styles';

const { width: WIDTH } = Dimensions.get('window');

export function FavoritePost({ data, navigation }) {
  const handleNavigate = () => {
    navigation.navigate('Details', { id: data.id });
  };

  return (
    <FavPostContainer onPress={handleNavigate}>
      <FavPostCover
        source={{
          uri: `http://192.168.1.6:1337${data?.attributes?.cover?.data?.attributes?.url}`,
        }}
        style={{ width: WIDTH - 35 }}
        resizeMode="cover"
        blurRadius={3}
        imageStyle={{ borderRadius: 6, opacity: 0.5 }}
      >
        <FavPostTitle numberOfLines={1}>{data?.attributes?.title}</FavPostTitle>
      </FavPostCover>
    </FavPostContainer>
  );
}
