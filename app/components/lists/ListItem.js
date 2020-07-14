import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AppText from "../AppText";
import colors from "../../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";

export default function ListItem({ title, subTitle, image, IconComponent, onPress, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.container}>
        {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText numberOfLines={1} style={styles.title}>{title}</AppText>
            {subTitle && <AppText numberOfLines={2} style={styles.subTitle}>{subTitle}</AppText>}
          </View>
          <MaterialCommunityIcons color={colors.medium} name='chevron-right' size={25} />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  detailsContainer:{
    marginLeft: 10,
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    borderRadius: 35,
    height: 70,
    width: 70,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});
