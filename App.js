import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/tabs';

import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';


export default function App() {
  const scheme  = useColorScheme();
  return (
    <AppearanceProvider>
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
      <Tabs />
    </NavigationContainer>
    </AppearanceProvider>
  );
}