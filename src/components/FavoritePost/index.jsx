import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';

const { width: WIDTH } = Dimensions.get('window');

export function FavoritePost({ data, navigation }) {
  const handleNavigate = () => {
    navigation.navigate('Details', { id: data.id });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <ImageBackground
        source={{
          uri: `http://192.168.1.6:1337${data?.attributes?.cover?.data?.attributes?.url}`,
        }}
        style={styles.cover}
        resizeMode="cover"
        blurRadius={3}
        imageStyle={{ borderRadius: 6, opacity: 0.5 }}
      >
        <Text style={styles.title} numberOfLines={1}>
          {data?.attributes?.title}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 8,
  },
  title: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    textShadowColor: '#121212',
    textShadowOffset: { width: 2, height: 1 },
    textShadowRadius: 8,
  },
  cover: {
    backgroundColor: '#232630',
    borderRadius: 4,
    height: 100,
    width: WIDTH - 35,
    justifyContent: 'flex-end',
  },
});
