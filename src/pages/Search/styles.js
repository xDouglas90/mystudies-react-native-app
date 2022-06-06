import styled from 'styled-components';

export const SearchContainer = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background: #fff;
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

  background-color: #c4c4c4;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  color: #262626;
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

  background-color: #c4c4c4;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 45px;
  margin-left: -10px;
  width: 15%;
`;

export const ResultText = styled.Text`
  color: #262626;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: left;
`;

export const ContainerResult = styled.View`
  margin-top: 10px;
  padding-bottom: 65px;
`;
