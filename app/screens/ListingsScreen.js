import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import AppText from "../components/AppText";
import App from "../../App";
import AppButton from "../components/AppButton";
import ActivityIndicator from '../components/ActivityIndicator'

export default function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    setLoading(true);
    const response = await listingsApi.getListings();
    setLoading(false);

    if (!response.ok) return setError(true);

    setError(false);
    setListings(response.data);
  };

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't Retrieve the listings</AppText>
          <AppButton title='Reload' onPress={loadListings} />
        </>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate("ListingDetails", item)}
          />
        )}
        />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
