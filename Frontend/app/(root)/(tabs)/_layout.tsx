import { StyleSheet, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { ICONS } from "@/constants/tabIcons";

const TabIcon = ({
  focused,
  icon,
  title,
}: {
  focused: boolean;
  icon: any;
  title: string;
}) => (
  <view className="flex-1 mt-3 flex flex-col items-center">
    <Image source={icon} tintColor={focused ? "#FFFFFF" : "#FECE26"} />
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
    >
      <Tabs.Screen
        name="customerHomepage"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={ICONS.homeIcon} focused={focused} title="Home" />
          ),
        }}
      />
    </Tabs>
  );
};
export default TabsLayout;

const styles = StyleSheet.create({});
