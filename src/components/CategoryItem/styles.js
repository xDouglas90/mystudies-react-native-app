import styled from 'styled-components';

import { colors } from '../../styles/variables';

export const CategoryItemContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: center;

  background: ${colors.white};
  border-radius: 8px;
  margin: 8px;
  margin-right: 5px;

  padding: 0 10px;
`;

export const Category = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  flex-direction: column;
  padding: 0 5px;
`;

export const CategoryIcon = styled.Image`
  background-color: ${colors.cultured};
  border-radius: 25px;
  height: 50px;
  width: 50px;
`;

export const CategoryTitle = styled.Text`
  color: ${colors.primary};
  font-size: 18px;
  font-weight: bold;
`;
