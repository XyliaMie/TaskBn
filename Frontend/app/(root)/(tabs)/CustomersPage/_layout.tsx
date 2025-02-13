import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import "@/global.css";

const TabIcon = ({
  focused,
  icon,
  title,
}: {
  focused: boolean;
  icon: any;
  title: string;
}) => (
  <view>
    <Image />
  </view>
);

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "rgb(81, 131, 168)",
          position: "absolute",
          minHeight: 50,
        },
      }}
    ></Tabs>
  );
};
export default TabsLayout;

const styles = StyleSheet.create({});
