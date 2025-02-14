import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ServiceCategoryBar from "@/components/serviceCategoryBar";

const customerHomepage = () => {
  const handleCategoryPress = (category: string) => {
    console.log("Selected Category:", category);
    // nanti tmbh sini: Navigate to service listings filtered by this category
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ServiceCategoryBar onCategoryPress={handleCategoryPress} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default customerHomepage;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#E5EEF4",
  },
});
