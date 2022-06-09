import { mockImages, mocks } from "./mock";
import camelize from "camelize";

export const restuarantsRequest = async (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }

    resolve(mock);
  });
};

export const restaurantsTranform = ({ results = [] }) => {
  const restaurants = camelize(results);
  /*restaurants.photos = restaurants.photos.map((p) => {
    return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
  });*/

  const mappedResult = restaurants.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });

    return {
      ...restaurant,
      isClosedTemporarily: restaurant.businessStatus === "CLOSED_TEMPORARILY",
      isOpenNow: restaurant.openingHours && restaurant.openingHours.openNow,
    };
  });
  return mappedResult;
};
