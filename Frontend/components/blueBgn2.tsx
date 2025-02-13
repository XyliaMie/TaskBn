import { ImageBackground, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { IMAGES } from "@/constants/image"; // Ensure the correct import path

const { width, height } = Dimensions.get("window");

const blueBgn = () => {
  return (
    <ImageBackground
      source={IMAGES.backgroundBlue2}
      style={styles.background}
      resizeMode="cover"
    />
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: width,
    height: height,
    position: "absolute", // Ensures it stays behind everything
  },
});

export default blueBgn;
