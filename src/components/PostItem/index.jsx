import React from 'react';

import { useNavigation } from '@react-navigation/native';

import {
  PostItemContainer,
  PostItemHeader,
  PostItemCover,
  PostItemBody,
  PostItemTitle,
  PostItemDescription,
} from './styles';

import LOCAL_HOST from '../../services/api';

export function PostItem({ data }) {
  const navigation = useNavigation();

  const handleDetails = () => {
    navigation.navigate('Details', { id: data?.id });
  };

  return (
    <PostItemContainer onPress={handleDetails}>
      <PostItemHeader>
        <PostItemCover
          source={{
            uri: `http://${LOCAL_HOST}:1337${data?.attributes?.cover?.data?.attributes?.url}`,
          }}
        />
      </PostItemHeader>

      <PostItemBody>
        <PostItemTitle numberOfLines={2}>{data.attributes.title}</PostItemTitle>
        <PostItemDescription numberOfLines={2}>
          {data.attributes.description}
        </PostItemDescription>
      </PostItemBody>
    </PostItemContainer>
  );
}
