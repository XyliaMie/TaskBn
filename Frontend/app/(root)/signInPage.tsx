import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BlueBgn2 from "@/components/blueBgn2";
import { IMAGES } from "@/constants/image";
import { Link } from "expo-router";

const signInPage = () => {
  return (
    <SafeAreaView className="h-full ">
      <ScrollView contentContainerClassName="h-full items-center">
        <BlueBgn2 />
        {/*Logo*/}
        <Image source={IMAGES.logo} style={styles.logo} />

        {/*Welcome Text*/}
        <Text style={styles.title} className="text-white font-bold">
          Welcome to Job BN
        </Text>

        <View style={styles.container}>
          {/*Input Area*/}
          <Text style={styles.text} className="text-black mt-5">
            {" "}
            Please enter your email and password.{" "}
          </Text>
          <View className="flex-row mt-3 items-center ">
            <Image
              source={IMAGES.profileMini}
              style={{ width: 35, height: 35, marginRight: 17 }}
            />
            <TextInput
              placeholder="Please enter email."
              className="bg-gray-100 border border-gray-300 rounded-lg w-4/5 px-4 py-3
                value={email}
                onChangeText={setEmail}
                secureTextEntry"
            />
          </View>

          <View className="flex-row mt-3 items-center ">
            <Image
              source={IMAGES.passwordIcon}
              style={{ width: 42, height: 42, marginRight: 10 }}
            />
            <TextInput
              placeholder="Please enter password."
              className="bg-gray-100 border border-gray-300 rounded-lg w-4/5 px-4 py-3"
            />
          </View>
        </View>

        {/*Forget Password*/}
        <TouchableOpacity>
          <Text
            style={styles.forgetPass}
            className="text-blue-500 underline mt-3"
          >
            Forget Password?
          </Text>
        </TouchableOpacity>

        <View style={styles.button}>
          <Link href="/(root)/(tabs)/CustomersPage/customerHomepage" asChild>
            <TouchableOpacity className="flex-row items-center justify-center">
              <Image source={require("@/assets/images/loginBtn.png")} />
            </TouchableOpacity>
          </Link>
        </View>

        <View style={styles.button}>
          <TouchableOpacity className="flex-row items-center justify-center">
            <Image source={require("@/assets/images/loginGuestBtn.png")} />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center justify-center">
          <Text style={{ marginTop: 20 }}> Don't have an account yet? </Text>
          <TouchableOpacity className=" font-bold">
            <Text style={styles.signUp}> Sign Up </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
  },

  logo: {
    resizeMode: "cover",
    width: 226,
    height: 80,
    marginTop: 93,
  },

  title: {
    marginTop: 60,
    color: "#FFF",
    fontSize: 30,
  },

  text: {
    marginLeft: 52.5,
  },

  forgetPass: {
    marginLeft: 273,
    color: "#FECE26",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
  },

  button: {
    marginTop: 20,
  },

  signUp: {
    marginTop: 20,
    color: "#FECE26",
    textShadowColor: "rgba(0, 1, 2, 0.75)",
  },
});
export default signInPage;
