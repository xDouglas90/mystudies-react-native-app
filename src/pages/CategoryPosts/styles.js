import styled from 'styled-components';

export const CategoryPostsContainer = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #fff;
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
  background-color: #162133;
  border-radius: 5px;
  margin-top: 20px;
  padding: 10px;
  width: 50%;
`;

export const EmptyButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
`;
