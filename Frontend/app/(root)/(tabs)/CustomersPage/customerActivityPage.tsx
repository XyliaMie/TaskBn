import { ScrollView, StyleSheet, SafeAreaView, Text } from "react-native";
import React from "react";

const customerActivityPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text>SomeStuff</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default customerActivityPage;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#E5EEF4",
  },
});
