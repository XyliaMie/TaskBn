import { SplashScreen, Stack } from "expo-router";
import "../global.css";
import { useEffect, useState } from "react";

export default function RootLayout() {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    async function prepareApp() {
      try {
        // Prevent the splash screen from hiding automatically
        await SplashScreen.preventAutoHideAsync();

        // Simulate a loading process (fetch data, preload assets)
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setAppReady(true); // Set state to true after loading is complete
      } catch (error) {
        console.warn(error);
      }
    }

    prepareApp();
  }, []);

  useEffect(() => {
    if (appReady) {
      // Hide the splash screen once the app is ready
      SplashScreen.hideAsync();
    }
  }, [appReady]);

  // Prevent rendering until app is ready
  if (!appReady) {
    return null;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
