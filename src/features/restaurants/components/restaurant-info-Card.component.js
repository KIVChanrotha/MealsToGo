import React from "react";
import styled from "styled-components/native";
import { Image } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  Icon,
  Info,
  Address,
  Rating,
  Section,
  SectionEnd,
} from "./restaurant-info-card.style";
import { Favourite } from "../../../components/favourites/favourite.component";

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[2]};
  backgroundcolor: ${(props) => props.theme.colors.bg.primary};
`;

export const RestuarantInfoCard = ({ restuarant = {} }) => {
  const {
    name,
    icon,
    photos,
    vicinity: address,
    isOpenNow,
    rating = 0,
    isClosedTemporarily,
    placeId,
  } = restuarant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  //console.log(name);

  return (
    <RestaurantCard elevation={5}>
      <Favourite restaurant={restuarant} />
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Info>
        <Spacer position="bottom" size="small">
          <Text variant="label">{name}</Text>
        </Spacer>

        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}

            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>

        <Text variant="caption">{address}</Text>
      </Info>
    </RestaurantCard>
  );
};
