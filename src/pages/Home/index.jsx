import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página Home</Text>
      <Button
        title="Ir para detalhes"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Ir para categoria"
        onPress={() => navigation.navigate('CategoryPosts')}
      />
      <Button
        title="Pesquisar"
        onPress={() => navigation.navigate('Search')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#262626',
    fontSize: 30,
    textAlign: 'center',
  },
  subtitle: {
    color: '#262626',
    fontSize: 20,
    textAlign: 'center',
  },
});
