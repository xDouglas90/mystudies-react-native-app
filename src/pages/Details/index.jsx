import React, { useEffect, useState, useLayoutEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Share,
  Modal,
} from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import api from '../../services/api';
import { Feather, Entypo } from '@expo/vector-icons';

import { LinkWeb } from '../../components';

export function Details() {
  const navigation = useNavigation();
  const route = useRoute();
  const [post, setPost] = useState({});
  const [links, setLInks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [openLink, setOpenLink] = useState('');

  useEffect(() => {
    async function getPost() {
      const response = await api.get(
        `/api/posts/${route.params.id}?populate=cover,category,Opcoes`
      );
      setPost(response.data.data);
      setLInks(response.data?.data?.attributes?.Opcoes);
    }

    getPost();
  }, [route.params.id]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleShare}>
          <Entypo name="share" size={25} color="#fff" />
        </TouchableOpacity>
      ),
    });
  }, [navigation, post]);

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: `${post.attributes.title} - ${post.attributes.description}`,
        url: `http://192.168.1.6:1337${post?.attributes?.cover?.data?.attributes?.url}`,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('Activity type');
        } else {
          console.log('Compartilhado com sucesso');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Cancelado');
      }

      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleOpenLink = (link) => {
    setModalVisible(true);
    setOpenLink(link);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.cover}
        source={{
          uri: `http://192.168.1.6:1337${post?.attributes?.cover?.data?.attributes?.url}`,
        }}
      />

      <Text style={styles.title}>{post?.attributes?.title}</Text>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.description}>{post?.attributes?.description}</Text>

        <Text style={styles.subtitle}>Links</Text>

        <View style={styles.links}>
          {links.map((link) => (
            <TouchableOpacity
              key={link.id}
              style={styles.link}
              onPress={() => handleOpenLink(link)}
            >
              <Feather name="link" size={18} color="#1e4687" />
              <Text style={styles.linkText}>{link.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <Modal animationType='slide' visible={modalVisible} transparent={true}>
        <LinkWeb
          link={openLink?.url}
          title={openLink?.name}
          closeModal={() => setModalVisible(false)}
        />
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cover: {
    width: '100%',
    height: 230,
    resizeMode: 'cover',
  },
  title: {
    color: '#262626',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 14,
    marginTop: 18,
    paddingHorizontal: 12,
    textAlign: 'center',
  },
  content: {
    paddingHorizontal: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'justify',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 18,
    paddingHorizontal: 12,
    textAlign: 'center',
  },
  links: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  linkText: {
    marginLeft: 8,
    color: '#1e4687',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
