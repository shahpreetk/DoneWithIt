import React from "react";
import { View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/AppText";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from './app/components/Icon'; 
// import {} from '@expo/vector-icons';

export default function App() {
  return (
    <Screen>
    <Icon name="email" size={50} backgroundColor="red" iconColor="white" />
    </Screen>
  );
}
