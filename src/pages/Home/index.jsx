import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import api from '../../services/api';
import { CategoryItem, FavoritePost, PostItem } from '../../components';
import { getFavorite, setFavorite } from '../../services/favorite';

export function Home() {
  const [categories, setCategories] = useState([]);
  const [favCategory, setFavCategory] = useState([]);
  const [posts, setPosts] = useState([]);

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
    setPosts(response.data.data);
  };

  const handleFavorite = async (id) => {
    const response = await setFavorite(id);
    setFavCategory(response);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>myStudies</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Feather name="search" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.categories}
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

      <View style={styles.main}>
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

        <Text
          style={[
            styles.title,
            { marginTop: favCategory.length > 0 ? 14 : 46 },
          ]}
        >
          Conteúdos recentes
        </Text>

        <FlatList
          style={styles.posts}
          data={posts}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <PostItem data={item} navigation={navigation} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262330',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 18,
    marginTop: 18,
    marginBottom: 24,
  },
  name: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  categories: {
    maxHeight: 115,
    backgroundColor: '#efefef',
    marginHorizontal: 18,
    borderRadius: 8,
    zIndex: 9,
  },
  main: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: -40,
    paddingTop: 10,
  },
  title: {
    color: '#262330',
    fontSize: 22,
    paddingHorizontal: 18,
    marginBottom: 14,
    fontWeight: 'bold',
  },
  posts: {
    flex: 1,
    paddingHorizontal: 18,
  },
});
