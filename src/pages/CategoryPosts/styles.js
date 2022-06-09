import styled from 'styled-components';

import { colors } from '../../styles/variables';

export const CategoryPostsContainer = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${colors.white};
  padding: 18px;
`;

export const EmptyText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
  text-align: center;
`;

export const EmptyButton = styled.TouchableOpacity`
  align-self: center;
  background-color: ${colors.button};
  border-radius: 5px;
  margin-top: 20px;
  padding: 10px;
  width: 50%;
`;

export const EmptyButtonText = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
`;
