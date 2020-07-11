import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import AppText from './AppText';
import colors from "../config/colors";

export default function ListItem({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    borderRadius: 35,
    height: 70,
    width: 70,
    marginRight: 10,
  },
  subTitle:{
      color: colors.medium,
  },
  title:{
      fontWeight:'500',
  }
});
