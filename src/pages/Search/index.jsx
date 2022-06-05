import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Keyboard
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { PostItem } from '../../components';

import api from '../../services/api';

export function Search() {
  const [search, setSearch] = useState('');
  const [posts, setPosts] = useState([]);

  const handleInputChange = (text) => setSearch(text);

  const handleSearchPost = async () => {
    if (search === '') {
      alert('Digite algo para buscar');
      return;
    }

    await api
      .get(`api/posts?filters[title][$containsi]=${search}&populate=cover`)
      .then((response) => {
        setPosts(response.data?.data);
      });

    setSearch('');
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          placeholder="Procurando algo?"
          value={search}
          onChangeText={handleInputChange}
        />
        <TouchableOpacity style={styles.button} onPress={handleSearchPost}>
          <Feather name="search" size={30} color="#262626" />
        </TouchableOpacity>
      </View>

      {posts.length === 0 ? (
        <Text style={styles.resultTitle}>Nada a ser mostrado</Text>
      ) : (
        <View style={styles.containerResult}>
          <Text style={styles.resultTitle}>Resultado da busca:</Text>
          <FlatList
            style={styles.postsResult}
            data={posts}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => <PostItem data={item} />}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 18,
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 45,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#c4c4c4',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    padding: 8,
    paddingLeft: 20,
    fontSize: 18,
    color: '#262626',
    width: '85%',
    height: 45,
  },
  button: {
    width: '15%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: '#c4c4c4',
    marginLeft: -1,
  },
  containerResult: {
    marginTop: 10,
    paddingBottom: 75,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
