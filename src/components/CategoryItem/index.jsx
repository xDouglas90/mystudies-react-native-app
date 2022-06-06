import React from 'react';
import { TouchableOpacity } from 'react-native';

import {
  CategoryItemContainer,
  Category,
  CategoryIcon,
  CategoryTitle,
} from './styles';

export function CategoryItem({ data, navigation, favorite }) {
  const handleNavigate = () =>
    navigation.navigate('CategoryPosts', {
      id: data.id,
      title: data?.attributes?.name,
    });

  return (
    <CategoryItemContainer>
      <TouchableOpacity onPress={handleNavigate} onLongPress={favorite}>
        <Category>
          <CategoryIcon
            source={{
              uri: `http://192.168.1.6:1337${data?.attributes?.icon?.data?.attributes?.url}`,
            }}
          />
          <CategoryTitle>{data.attributes.name}</CategoryTitle>
        </Category>
      </TouchableOpacity>
    </CategoryItemContainer>
  );
}
