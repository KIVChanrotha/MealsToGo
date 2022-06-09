import styled from "styled-components/native";

const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.khmerBody};
  padding-left: ${(props) => props.theme.space[2]};
`;

const Rating = styled.View`
  flex: 1;
  flex-direction: row;
  text-align: left;
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;
const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export { Icon, Info, Address, Rating, Section, SectionEnd };
