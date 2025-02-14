import { SplashScreen, Stack } from "expo-router";
import "../global.css";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RootLayout() {
  const [appReady, setAppReady] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function prepareApp() {
      try {
        // Prevent splash screen from hiding automatically
        await SplashScreen.preventAutoHideAsync();

        // Simulate a loading process
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setAppReady(true);
      } catch (error) {
        console.warn(error);
      }
    }

    prepareApp();
  }, []);

  useEffect(() => {
    if (appReady) {
      SplashScreen.hideAsync().catch(console.warn);
    }
  }, [appReady]);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem("authToken");
      setIsLoggedIn(!!token);
      setLoading(false);
    };

    checkAuth();
  }, []);

  if (!appReady || loading) {
    return (
      <ActivityIndicator
        size="large"
        color="#5183A8"
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      />
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="signInPage" />
      <Stack.Screen name="customerHomepage" />
    </Stack>
  );
}
