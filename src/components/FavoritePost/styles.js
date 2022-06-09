import styled from 'styled-components';

import { colors } from '../../styles/variables';

export const FavPostContainer = styled.TouchableOpacity`
  display: flex;
  flex: 1;
  margin-right: 8px;
`;

export const FavPostCover = styled.ImageBackground`
  display: flex;
  justify-content: flex-end;
  background: ${colors.primary};
  border-radius: 6px;
  height: 100px;
`;

export const FavPostTitle = styled.Text`
  color: ${colors.white};
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  padding: 8px 12px;
  text-shadow: 2px 1px 8px ${colors.shadow};
`;
