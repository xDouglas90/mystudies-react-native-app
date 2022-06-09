import styled from 'styled-components';

import { colors } from '../../styles/variables';

export const ButtonLink = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${colors.primary};
  padding: 16px;
  margin-top: 50px;
`;

export const TextLink = styled.Text`
  color: ${colors.silver};
  font-size: 16px;
  font-weight: bold;
  margin-left: 16px;
`;
