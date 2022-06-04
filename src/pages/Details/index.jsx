import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Details() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página Detalhes do post</Text>
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
