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

import { Navigation } from "./src/infrastructure/navigation";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

//const isAdroid = Platform.OS === "android";

//console.log(StatusBar.currentHeight);

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
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
