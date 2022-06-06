import React, { useEffect, useState } from 'react';
import { TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import logoImg from '../../assets/logo.png';

import {
  HomeContainer,
  Header,
  Logo,
  CategoriesList,
  Main,
  MainTitle,
  MainPosts,
} from './styles';

import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import { getFavorite, setFavorite } from '../../services/favorite';

import { CategoryItem, FavoritePost, PostItem } from '../../components';

import * as Animatable from 'react-native-animatable';

const AnimatedCategoryList =
  Animatable.createAnimatableComponent(CategoriesList);

export function Home() {
  const [categories, setCategories] = useState([]);
  const [favCategory, setFavCategory] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    async function loadData() {
      await getListPosts();

      const category = await api.get('/api/categories?populate=icon');

      setCategories(category.data.data);
    }

    loadData();
  }, []);

  useEffect(() => {
    async function loadFavorites() {
      const favorite = await getFavorite();
      setFavorite(favorite);
    }

    loadFavorites();
  }, []);

  const getListPosts = async () => {
    const response = await api.get(
      '/api/posts?populate=cover&sort=createdAt:desc'
    );
    setPosts(response.data?.data);
  };

  const handleFavorite = async (id) => {
    setLoading(true);

    const response = await setFavorite(id);
    setFavCategory(response);

    setLoading(false);
  };

  return (
    <HomeContainer>
      <Header>
        <Logo source={logoImg} />

        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Feather name="search" size={24} color="#fff" />
        </TouchableOpacity>
      </Header>

      <AnimatedCategoryList
        animation="flipInX"
        delay={500}
        horizontal={true}
        contentContainerStyle={{ paddingRight: 12 }}
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <CategoryItem
            data={item}
            navigation={navigation}
            favorite={() => handleFavorite(item.id)}
          />
        )}
      />

      <Main>
        {favCategory.length !== 0 && (
          <FlatList
            style={{ marginTop: 50, maxHeight: 100, paddingStart: 18 }}
            contentContainerStyle={{ paddingEnd: 25 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={favCategory}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <FavoritePost data={item} navigation={navigation} />
            )}
          />
        )}

        <MainTitle hasFavs={favCategory.length}>Conteúdos recentes</MainTitle>

        <MainPosts
          data={posts}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <PostItem data={item} />}
          refreshing={loading}
          onRefresh={() => getListPosts()}
        />
      </Main>
    </HomeContainer>
  );
}
