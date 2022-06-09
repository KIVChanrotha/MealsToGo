import React, { useState, createContext, useEffect, useContext } from "react";
import { restaurantsTranform, restuarantsRequest } from "./restaurants.service";
import { LocationContext } from "../location/location.context";

export const RestaurantsContext = createContext();
export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestuarants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (loc) => {
    setIsLoading(true);
    setRestuarants([]);

    setTimeout(() => {
      restuarantsRequest(loc)
        .then(restaurantsTranform)
        .then((restaurantsResult) => {
          setIsLoading(false);
          //console.log(restaurantsResult);
          setRestuarants(restaurantsResult);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    //const locationString = `${location.lat},${location.lng}`;
    //retrieveRestaurants(locationString);
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
