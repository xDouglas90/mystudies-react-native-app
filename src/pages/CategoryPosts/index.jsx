import React, { useLayoutEffect, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  CategoryPostsContainer,
  EmptyText,
  EmptyButton,
  EmptyButtonText,
} from './styles';

import { PostItem } from '../../components';

import api from '../../services/api';

export function CategoryPosts() {
  const [postsList, setPostsList] = useState([]);
  const navigation = useNavigation();
  const route = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params?.title,
    });
  }, [navigation, route]);

  useEffect(() => {
    async function loadPosts() {
      await getListPosts();
    }

    loadPosts();
  }, []);

  const getListPosts = async () => {
    const response = await api.get(
      `api/categories/${route.params?.id}?fields=name&populate=posts,posts.cover`
    );
    setPostsList(response.data?.data?.attributes?.posts?.data);
  };

  return (
    <CategoryPostsContainer>
      {postsList.length === 0 ? (
        <>
          <EmptyText>Essa categoria ainda não possui nenhum post.</EmptyText>
          <EmptyButton onPress={() => navigation.goBack()}>
            <EmptyButtonText>Encontrar posts</EmptyButtonText>
          </EmptyButton>
        </>
      ) : (
        <FlatList
          data={postsList}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <PostItem data={item} />}
        />
      )}
    </CategoryPostsContainer>
  );
}
