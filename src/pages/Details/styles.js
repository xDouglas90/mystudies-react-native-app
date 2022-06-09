import styled from 'styled-components';

import { colors } from '../../styles/variables';

export const DetailsContainer = styled.SafeAreaView`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${colors.white};
`;

export const DetailsCover = styled.Image`
  height: 230px;
  width: 100%;
`;

export const DetailsTitle = styled.Text`
  color: ${colors.primary};
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 14px;
  margin-top: 18px;
  padding: 0 12px;
  text-align: center;
`;

export const DetailsContent = styled.ScrollView`
  padding: 0 12px;
`;

export const ContentDescription = styled.Text`
  color: ${colors.text};
  font-size: 16px;
  line-height: 20px;
  text-align: justify;
`;

export const ContentSubtitle = styled.Text`
  color: ${colors.primary};
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 18px;
  padding: 0 12px;
  text-align: center;
`;

export const ContentLinks = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ContentLinkItem = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const LinkItemText = styled.Text`
  color: ${colors.blue};
  font-size: 16px;
  font-weight: bold;
  margin-left: 8px;
`;
