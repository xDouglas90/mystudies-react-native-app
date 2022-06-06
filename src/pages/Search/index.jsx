import React, { useState } from 'react';
import { FlatList, Keyboard } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {
  SearchContainer,
  InputContainer,
  SearchInput,
  SearchButton,
  ResultText,
  ContainerResult,
} from './styles';

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
    <SearchContainer>
      <InputContainer>
        <SearchInput
          placeholder="Procurando algo?"
          value={search}
          onChangeText={handleInputChange}
        />
        <SearchButton onPress={handleSearchPost}>
          <Feather name="search" size={30} color="#262626" />
        </SearchButton>
      </InputContainer>

      {posts.length === 0 ? (
        <ResultText>Nada a ser mostrado</ResultText>
      ) : (
        <ContainerResult>
          <ResultText>Resultado da busca:</ResultText>
          <FlatList
            data={posts}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => <PostItem data={item} />}
          />
        </ContainerResult>
      )}
    </SearchContainer>
  );
}
