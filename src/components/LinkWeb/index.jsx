import React from 'react';
import { WebView } from 'react-native-webview';

import { Feather } from '@expo/vector-icons';

import { ButtonLink, TextLink } from './styles';
import { colors } from '../../styles/variables';

export function LinkWeb({ link, title, closeModal }) {
  return (
    <>
      <ButtonLink onPress={closeModal}>
        <Feather name="x" size={25} color={colors.white} />
        <TextLink>{title}</TextLink>
      </ButtonLink>
      <WebView source={{ uri: link }} />
    </>
  );
}
