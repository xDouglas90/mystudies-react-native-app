import styled from 'styled-components';

import { colors } from '../../styles/variables';

export const PostItemContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: 1px solid ${colors.lightGray};
  border-radius: 4px;
  margin-bottom: 14px;
  padding: 12px;
  width: 98%;
`;

export const PostItemHeader = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 4px;

  height: 100px;
  width: 100px;
  margin: 0 12px;
  overflow: hidden;
`;

export const PostItemCover = styled.Image`
  border-radius: 4px;
  height: 90px;
  width: 90px;
  overflow: hidden;
`;

export const PostItemBody = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 70%;
`;

export const PostItemTitle = styled.Text`
  color: ${colors.text};
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 4px;
  padding-right: 5px;
`;

export const PostItemDescription = styled.Text`
  color: ${colors.text};
  font-size: 14px;
  line-height: 18px;
`;
