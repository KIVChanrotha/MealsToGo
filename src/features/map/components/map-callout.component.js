import React from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";
import WebView from "react-native-webview";
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component";

const MyText = styled.Text``;

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

//const isAndroid = Platform.OS === "android";
export const MapCallout = ({ restaurant }) => {
  return <CompactRestaurantInfo restaurant={restaurant} isMap={true} />;
  /*const Image = isAndroid ? CompactWebview : CompactImage;

  return (
    <>
      <Image
        source={{
          uri: restaurant.photos[0],
        }}
      />
      <MyText>{restaurant.name}</MyText>
    </>
  );*/
};
//source={{uri={restaurant.photos[0]}}}
