import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

import { Feather } from '@expo/vector-icons';

export function LinkWeb({ link, title, closeModal }) {
  return (
    <>
      <TouchableOpacity style={styles.button} onPress={closeModal}>
        <Feather name="x" size={25} color="#fff" />
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
      <WebView source={{ uri: link }} />
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#232630',
    padding: 16,
    marginTop: 50,
  },
  title: {
    color: '#cfcfcf',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 16,
  },
});
