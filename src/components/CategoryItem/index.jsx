import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export function CategoryItem({ data, navigation }) {
  const handleNavigate = () => navigation.navigate('CategoryPosts', { id: data.id, title: data?.attributes?.name });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleNavigate}
      >
        <View style={styles.category}>
            <Image
              style={styles.icon}
              source={{
                uri: `http://192.168.1.6:1337${data?.attributes?.icon?.data?.attributes?.url}`,
              }}           
            />  
          <Text style={styles.title}>{data.attributes.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
    marginVertical: 8,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  category: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f5f5f5',
  },
  title: {
    color: '#262330',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
