import React from 'react';
import { Dimensions } from 'react-native';

import LOCAL_HOST from '../../services/api';

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
          uri: `http://${LOCAL_HOST}:1337${data?.attributes?.cover?.data?.attributes?.url}`,
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
