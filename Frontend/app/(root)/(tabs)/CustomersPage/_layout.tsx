import { StyleSheet, Image, View } from "react-native";
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
  <View className="flex-1 mt-3 flex flex-col justify-center items-center">
    <Image
      source={icon}
      style={{ tintColor: focused ? "#FECE26" : "#FFFFFF" }}
      resizeMode="contain"
      className="w-15 h-10"
    />
  </View>
);

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: "#5183A8",
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          height: 140,
        },
        tabBarShowLabel: false,
        headerShown: true,
        tabBarStyle: {
          backgroundColor: "rgb(81, 131, 168)",
          position: "absolute",
          minHeight: 0,
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

      <Tabs.Screen
        name="customerActivityPage"
        options={{
          title: "Activity",
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={ICONS.activityIcon} focused={focused} title="Home" />
          ),
        }}
      />

      <Tabs.Screen
        name="customerSearchPage"
        options={{
          title: "Search",
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={ICONS.searchIcon} focused={focused} title="Search" />
          ),
        }}
      />

      <Tabs.Screen
        name="customerMessagePage"
        options={{
          title: "Message",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              icon={ICONS.messageIcon}
              focused={focused}
              title="Message"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="customerProfilePage"
        options={{
          title: "Activity",
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={ICONS.profileIcon} focused={focused} title="Home" />
          ),
        }}
      />
    </Tabs>
  );
};
export default TabsLayout;

const styles = StyleSheet.create({});
