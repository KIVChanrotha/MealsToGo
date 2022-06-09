import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import {
  useFonts as useKhmer,
  Khmer_400Regular,
} from "@expo-google-fonts/khmer";

import {
  useFonts as useNotoKhmer,
  NotoSerifKhmer_400Regular,
} from "@expo-google-fonts/noto-serif-khmer";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";

import { AppNavigator } from "./src/infrastructure/navigation/app.navigator";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";

import { initializeApp } from "firebase/app";

//const isAdroid = Platform.OS === "android";

//console.log(StatusBar.currentHeight);

const firebaseConfig = {
  apiKey: "AIzaSyB-NlAz6MrchB8NnaTaSWchhwBg36Y_sHo",
  authDomain: "mealstogo-2ffad.firebaseapp.com",
  projectId: "mealstogo-2ffad",
  storageBucket: "mealstogo-2ffad.appspot.com",
  messagingSenderId: "396589097227",
  appId: "1:396589097227:web:dd4fff63f73193c34ec20e",
};

initializeApp(firebaseConfig);

export default function App() {
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  let [khmerLoaded] = useKhmer({
    Khmer_400Regular,
  });

  let [notokhmerLoaded] = useNotoKhmer({
    NotoSerifKhmer_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded || !khmerLoaded || !notokhmerLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <AppNavigator />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
