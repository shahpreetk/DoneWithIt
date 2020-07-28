import React from "react";
import { StyleSheet, Text, View, Modal } from "react-native";
import * as Progress from 'react-native-progress'
import colors from "../config/colors";

export default function UploadScreen({ progress = 0, visible = flase }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <Progress.Bar color={colors.primary} progress={progress} width={200} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
