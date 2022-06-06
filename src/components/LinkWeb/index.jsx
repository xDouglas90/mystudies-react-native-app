import React from 'react';
import { WebView } from 'react-native-webview';

import { Feather } from '@expo/vector-icons';

import { ButtonLink, TextLink } from './styles';

export function LinkWeb({ link, title, closeModal }) {
  return (
    <>
      <ButtonLink onPress={closeModal}>
        <Feather name="x" size={25} color="#fff" />
        <TextLink>{title}</TextLink>
      </ButtonLink>
      <WebView source={{ uri: link }} />
    </>
  );
}
