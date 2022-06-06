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
            uri: `http://192.168.1.6:1337${data?.attributes?.cover?.data?.attributes?.url}`,
          }}
        />
      </PostItemHeader>

      <PostItemBody>
        <PostItemTitle>{data.attributes.title}</PostItemTitle>
        <PostItemDescription numberOfLines={2}>
          {data.attributes.description}
        </PostItemDescription>
      </PostItemBody>
    </PostItemContainer>
  );
}
