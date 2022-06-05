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
import { CategoryItem } from '../../components';

export function Home() {
  const [categories, setCategories] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    async function loadData() {
      const category = await api.get('/api/categories?populate=icon');
      setCategories(category.data.data);
    }

    loadData();
  }, []);

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
          <CategoryItem data={item} navigation={navigation} />
        )}
      />
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
});
