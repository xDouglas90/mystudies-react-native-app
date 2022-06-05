import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export function PostItem({ data }) {
  const navigation = useNavigation();
  
  const handleDetails = () => {
    navigation.navigate('Details', { id: data?.id });
  };

  return (
    <TouchableOpacity onPress={handleDetails} style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.cover}
          source={{
            uri: `http://192.168.1.6:1337${data?.attributes?.cover?.data?.attributes?.url}`,
          }}
        />
      </View>

      <View style={styles.body}>
        <Text style={styles.title}>{data.attributes.title}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {data.attributes.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#efefef',
    borderRadius: 4,
    marginBottom: 14,
    paddingHorizontal: 12,
    paddingVertical: 14,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  header: {
    marginHorizontal: 8,
    width: 100,
    height: 100,
    borderRadius: 4,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cover: {
    borderRadius: 4,
    height: 90,
    width: 90,
    resizeMode: 'cover',
  },
  body: {
    width: '70%',
  },
  title: {
    color: '#262626',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    color: '#262626',
    fontSize: 14,
    lineHeight: 18,
  },
});
