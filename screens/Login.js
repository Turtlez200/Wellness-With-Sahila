import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Modal
} from "react-native";
import { db } from '../firebase-config';
import { collection, addDoc } from 'firebase/firestore'

export default function Login({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const checkUser = () => {
    console.log("Logged In!");
  }

  return (
    <View style={styles.container}>
        <View style = {styles.banner}>
        </View>
          <View style={styles.login}>
              <Image style={styles.image} source={require("../assets/logo.png")} />

              <StatusBar style="auto" />
              <View style={styles.inputView}>
                  <TextInput
                  style={styles.TextInput}
                  placeholder="Email."
                  placeholderTextColor="#003f5c"
                  onChangeText={(GetEmail) => setEmail(GetEmail)}
                  />
              </View>

              <View style={styles.inputView}>
                  <TextInput
                  style={styles.TextInput}
                  placeholder="Password"
                  placeholderTextColor="#003f5c"
                  secureTextEntry={true}
                  onChangeText={(Getpassword) => setPassword(Getpassword)}
                  />
              </View>

              <TouchableOpacity onPress={() => {
                navigation.navigate("Register")
              }}>
                  <Text style={styles.forgot_button}>Register</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.loginBtn} onPress={() => {
                  checkUser();
                  navigation.navigate("Home");
              }}>
                  <Text style={styles.loginText}>LOGIN</Text>
              </TouchableOpacity>
          </View>
        <View style = {styles.banner}>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    backgroundColor: "#E94747",
    flex: 0.1
  },
  login: {
    flex: 0.8,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: 'space-around'
  },
  image: {
    width: 250,
    height: 190,
    marginBottom: 10,
    flex: 0.6
  },

  inputView: {
    backgroundColor: "#E94747",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 5,
  },

  TextInput: {
    height: 50,
    flex: 1,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E94747",
  },
});