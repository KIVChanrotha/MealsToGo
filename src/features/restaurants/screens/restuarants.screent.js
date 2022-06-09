import React, { useContext, useState } from "react";

import styled from "styled-components/native";
import { FlatList, TouchableOpacity } from "react-native";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { RestuarantInfoCard } from "../components/restaurant-info-Card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator } from "react-native-paper";
import { Search } from "../components/search.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const NotFound = styled(Text)`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -25px;
`;

export const RestuarantsScreen = ({ navigation }) => {
  //console.log(restaurants);
  const { restaurants, error, isLoading } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggle, setIsToggle] = useState(false);
  //console.log(favourites);

  return (
    <>
      <SafeArea>
        {isLoading && (
          <LoadingContainer>
            <Loading />
          </LoadingContainer>
        )}

        <Search
          isFavouriteToggle={isToggle}
          onFavouriteToggle={() => setIsToggle((preToggle) => !preToggle)}
        />

        {isToggle && (
          <FavouritesBar
            favourites={favourites}
            onNavigate={navigation.navigate}
          />
        )}

        {restaurants.length === 0 && !isLoading && (
          <NotFound variant="error">Not Found</NotFound>
        )}

        {restaurants.length !== 0 && !isLoading && (
          <FlatList
            data={restaurants}
            renderItem={({ item }) => {
              //console.log(item);
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("RestaurantDetail", {
                      restaurant: item,
                    })
                  }
                >
                  <Spacer position="bottom" size="large">
                    <RestuarantInfoCard restuarant={item} />
                  </Spacer>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.name}
            // eslint-disable-next-line react-native/no-inline-styles
            contentContainerStyle={{ padding: 16 }}
          />
        )}
      </SafeArea>
    </>
  );
};
