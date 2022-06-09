import React, { useEffect, useState, useLayoutEffect } from 'react';
import { TouchableOpacity, Share, Modal } from 'react-native';
import {
  DetailsContainer,
  DetailsCover,
  DetailsTitle,
  DetailsContent,
  ContentDescription,
  ContentSubtitle,
  ContentLinks,
  ContentLinkItem,
  LinkItemText,
} from './styles';
import { Feather, Entypo } from '@expo/vector-icons';
import { colors } from '../../styles/variables';

import { useNavigation, useRoute } from '@react-navigation/native';

import { api, LOCAL_HOST } from '../../services/api';

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
          <Entypo name="share" size={25} color={colors.white} />
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
    <DetailsContainer>
      <DetailsCover
        source={{
          uri: `http://${LOCAL_HOST}:1337${post?.attributes?.cover?.data?.attributes?.url}`,
        }}
      />

      <DetailsTitle>{post?.attributes?.title}</DetailsTitle>

      <DetailsContent showsVerticalScrollIndicator={false}>
        <ContentDescription>{post?.attributes?.description}</ContentDescription>

        <ContentSubtitle>Links</ContentSubtitle>

        <ContentLinks>
          {links.map((link) => (
            <ContentLinkItem key={link.id} onPress={() => handleOpenLink(link)}>
              <Feather name="link" size={18} color={colors.blue} />
              <LinkItemText>{link.name}</LinkItemText>
            </ContentLinkItem>
          ))}
        </ContentLinks>
      </DetailsContent>

      <Modal animationType="slide" visible={modalVisible} transparent={true}>
        <LinkWeb
          link={openLink?.url}
          title={openLink?.name}
          closeModal={() => setModalVisible(false)}
        />
      </Modal>
    </DetailsContainer>
  );
}
