import styled from 'styled-components';

import { colors } from '../../styles/variables';

export const HomeContainer = styled.SafeAreaView`
  display: flex;
  flex: 1;
  background-color: ${colors.primary};
  padding-top: 5px;
`;

export const Logo = styled.Image`
  height: 40px;
  width: 250px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 18px 18px 24px;
`;

export const CategoriesList = styled.FlatList`
  background-color: ${colors.lightGray};
  border-radius: 8px;
  margin: 0 18px;
  max-height: 115px;
  z-index: 9;
`;

export const Main = styled.View`
  display: flex;
  flex: 1;

  background-color: ${colors.white};
  margin-top: -55px;
  padding-top: 20px;
`;

export const MainTitle = styled.Text`
  color: ${colors.primary};
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 14px;
  margin-top: ${({ hasFavs }) => (hasFavs > 0 ? '14px' : '46px')};
  padding: 0 18px;
`;

export const MainPosts = styled.FlatList`
  flex: 1;
  padding: 0 18px;
`;
