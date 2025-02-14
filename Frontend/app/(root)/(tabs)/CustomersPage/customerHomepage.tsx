import {
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ServiceCategoryBar from "@/components/serviceCategoryBar";
import { BackHandler } from "react-native";

const customerHomepage = () => {
  useEffect(() => {
    const handleBackPress = () => {
      return true;
    };

    BackHandler.addEventListener("hardwareBackPress", handleBackPress);
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
  }, []);

  const handleCategoryPress = (category: string) => {
    console.log("Selected Category:", category);
    // nanti tmbh sini: Navigate to service listings filtered by this category
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Service Categories */}
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
