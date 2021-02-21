import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as firebase from 'firebase';
import LandingScreen from './screens/auth/Landing'
import RegisterScreen from './screens/auth/Register'
import LoginScreen from './screens/auth/Login'
import { View, Text, StyleSheet } from 'react-native'
const Stack = createStackNavigator()

const firebaseConfig = {
  apiKey: "AIzaSyDe1hEHsDTgW_jCrF4dRnwSEZ7wGUPMJXI",
  authDomain: "instagram-657af.firebaseapp.com",
  projectId: "instagram-657af",
  storageBucket: "instagram-657af.appspot.com",
  messagingSenderId: "1002559871642",
  appId: "1:1002559871642:web:288fd9a12eb2fdb6e91d23",
  measurementId: "G-6V6PZYVHFN"
};
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [logIn, setLogIn] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        setLogIn(false)
        setLoaded(true)
      } else {
        setLogIn(true)
        setLoaded(true)
      }
    })
  }, [])
  if (!loaded) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    )
  }
  if (!logIn) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen name="Landing" component={LandingScreen
          } options={{ headerShown: false }}></Stack.Screen>
          <Stack.Screen name="Register" component={RegisterScreen}></Stack.Screen>
          <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  return (
    <View style={styles.container}>
      <Text>user logged in</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
})

