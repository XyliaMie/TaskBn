import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { IMAGES } from "@/constants/image";
import { ICONS } from "@/constants/tabIcons";

const serviceCategoryBar = ({
  onCategoryPress,
}: {
  onCategoryPress: (category: string) => void;
}) => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Electricians", icon: IMAGES.electricianImg },
    { id: 2, name: "Plumbing", icon: IMAGES.plumbingImg },
    { id: 3, name: "Painting", icon: IMAGES.painterImg },
    { id: 4, name: "Cleaning", icon: IMAGES.cleaningImg },
  ]);

  return (
    <View style={styles.container} className="px-4 py-2">
      <View style={styles.header}>
        <Text style={styles.title} className="text-lg font-bold text-gray-900">
          Services
        </Text>

        <TouchableOpacity>
          <Image source={ICONS.moreBtn1} style={styles.moreBtn} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <SafeAreaView>
            <TouchableOpacity
              className="m-2 p-3 bg-white rounded-lg shadow-md"
              onPress={() => onCategoryPress(item.name)}
            >
              <Image source={item.icon} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.text}>{item.name}</Text>
          </SafeAreaView>
        )}
      />
    </View>
  );
};

export default serviceCategoryBar;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: "#E7F0F8",
    borderRadius: 12,
    marginHorizontal: 10,
    marginTop: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    alignItems: "center",
    justifyContent: "center",
  },

  moreBtn: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    width: 80,
    height: 80,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    paddingVertical: 15,
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginRight: 20,
  },
  text: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
    alignItems: "center",
    marginRight: 20,
    marginTop: 10,
  },
});
