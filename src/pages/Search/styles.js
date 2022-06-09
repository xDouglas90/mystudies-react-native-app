import styled from 'styled-components';

import { colors } from '../../styles/variables';

export const SearchContainer = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background: ${colors.white};
  padding: 18px;
`;

export const InputContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 45px;
  margin-bottom: 10px;
  width: 100%;
`;

export const SearchInput = styled.TextInput`
  display: flex;
  flex: 1;

  background-color: ${colors.gray};
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  color: ${colors.text};
  font-size: 18px;
  height: 45px;
  padding: 8px;
  padding-left: 20px;
  width: 85%;
`;

export const SearchButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${colors.gray};
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 45px;
  margin-left: -10px;
  width: 15%;
`;

export const ResultText = styled.Text`
  color: ${colors.text};
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: left;
`;

export const ContainerResult = styled.View`
  margin-top: 10px;
  padding-bottom: 65px;
`;
