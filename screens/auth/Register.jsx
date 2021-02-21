import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button } from 'react-native'
import firebase from 'firebase';

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const onSignUp = async () => {
    try {
      const result = await firebase.auth().createUserWithEmailAndPassword(email, password)
      console.log('🚀 ~ file: Register.jsx ~ line 12 ~ onSignUp ~ result', result)
    } catch (error) {
      console.log('🚀 ~ file: Register.jsx ~ line 13 ~ onSignUp ~ error', error)
    }
  }
  return (
    <View style={styles.container}>
      <TextInput placeholder="name" onChangeText={(name) => setName(name)} />
      <TextInput placeholder="email" onChangeText={(email) => setEmail(email)} />
      <TextInput placeholder="password" secureTextEntry={true} onChangeText={(password) => setPassword(password)} />
      <Button title="Register" onPress={() => onSignUp()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {}
})

export default Register