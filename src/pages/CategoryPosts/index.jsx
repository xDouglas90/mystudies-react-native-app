import React, { useLayoutEffect, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

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
    <View style={styles.container}>
      {postsList.length === 0 ? (
        <>
          <Text style={styles.resultText}>
            Essa categoria ainda não possui nenhum post.
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>Encontrar posts</Text>
          </TouchableOpacity>
        </>
      ) : (
        <FlatList
          style={styles.posts}
          data={postsList}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <PostItem data={item} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: '#fff',
  },
  resultText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#162133',
    borderRadius: 5,
    width: '50%',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  }
});
