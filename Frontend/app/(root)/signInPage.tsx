import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BlueBgn2 from "@/components/blueBgn2";
import { IMAGES } from "@/constants/image";
import { Link } from "expo-router";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

const signInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://192.168.68.109:5000/login", {
        email,
        password,
      });

      await AsyncStorage.setItem("authToken", response.data.token);

      Alert.alert("Success", "Login successful!");
      router.push("/(root)/(tabs)/CustomersPage/customerHomepage");
    } catch (error: any) {
      console.log("Login Error:", error.response?.data || error.message);
      Alert.alert(
        "Error",
        error.response?.data?.error || "Login failed. Please try again."
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <BlueBgn2 />

      {/* Logo */}
      <Image source={IMAGES.logo} style={styles.logo} />

      {/* Welcome Text */}
      <Text style={styles.title}>Welcome to Job BN</Text>

      <View style={styles.inputContainer}>
        {/* Input Area */}
        <Text style={styles.text}>Please enter your email and password.</Text>

        <View style={styles.inputRow}>
          <Image source={IMAGES.profileMini} style={styles.icon} />
          <TextInput
            placeholder="Please enter email."
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputRow}>
          <Image source={IMAGES.passwordIcon} style={styles.icon} />
          <TextInput
            placeholder="Please enter password."
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
      </View>

      {/* Forget Password */}
      <TouchableOpacity>
        <Text style={styles.forgetPass}>Forget Password?</Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        {/* Login Button */}

        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Image source={require("@/assets/images/loginBtn.png")} />
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        {/* Guest Login */}
        <TouchableOpacity style={styles.button}>
          <Image source={require("@/assets/images/loginGuestBtn.png")} />
        </TouchableOpacity>
      </View>

      <View style={styles.signUpContainer}>
        <Text>Don't have an account yet?</Text>
        <TouchableOpacity>
          <Text style={styles.signUp}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default signInPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5EEF4",
    paddingLeft: 15,
    paddingRight: 15,
  },

  logo: {
    resizeMode: "cover",
    width: 226,
    height: 80,
    marginTop: 93,
    marginLeft: 71,
  },

  title: {
    marginTop: 60,
    color: "#FFF",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  inputContainer: {
    marginLeft: 20,
    marginTop: 20,
  },
  text: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  icon: {
    resizeMode: "contain",
    width: 35,
    height: 35,
    marginRight: 10,
  },
  input: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },

  forgetPass: {
    marginTop: 5,
    color: "#FECE26",
    textDecorationLine: "underline",
    marginLeft: "auto",
    fontWeight: "bold",
  },

  buttonContainer: {
    marginTop: 20,
  },

  button: {
    alignItems: "center",
  },

  signUpContainer: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 75,
  },

  signUp: {
    color: "#FECE26",
    fontWeight: "bold",
    marginLeft: 5,
  },
});
