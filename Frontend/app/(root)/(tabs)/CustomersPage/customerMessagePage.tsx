import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import React from "react";

const customerMessagePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView></ScrollView>
    </SafeAreaView>
  );
};

export default customerMessagePage;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#E5EEF4",
  },
});
