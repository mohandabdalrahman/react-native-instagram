import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button } from 'react-native'
import firebase from 'firebase';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const onSignIn = async () => {
    try {
      const result = await firebase.auth().signInWithEmailAndPassword(email, password)
      console.log('🚀 ~ file: Login.jsx ~ line 12 ~ onSignUp ~ result', result)
    } catch (error) {
      console.log('🚀 ~ file: Login.jsx ~ line 13 ~ onSignUp ~ error', error)
    }
  }
  return (
    <View style={styles.container}>
      <TextInput placeholder="email" onChangeText={(email) => setEmail(email)} />
      <TextInput placeholder="password" secureTextEntry={true} onChangeText={(password) => setPassword(password)} />
      <Button title="Login" onPress={() => onSignIn()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {}
})

export default Login