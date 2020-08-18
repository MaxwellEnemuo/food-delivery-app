import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Text, View, ImageBackground } from 'react-native';

import { RootStackParamList } from '../../types';

/**
 * Screen displays the Registration and SignIn Buttons
 * @param StackScreenProps<RootStackParamList, 'Auth'>
 */
export default function AuthScreen({ navigation }: StackScreenProps<RootStackParamList, 'Auth'>) {
  return (
    <ImageBackground
      style={styles.imageBackground}
      source={require('../assets/images/burgers.png')}
    >
      <View style={styles.main}>
        <RegisterButton />
        <SignInButton />
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Root')}>
          <Text style={styles.text}>Go to home screen!</Text>
        </TouchableWithoutFeedback>
      </View>
    </ImageBackground>
  );
}

function RegisterButton() {
  return (
    <TouchableOpacity
      style={[styles.button, styles.registerButton]}
      onPress={() => console.log('Register tapped!')}
    >
      <Text style={styles.registerText}>Create an Account</Text>
    </TouchableOpacity>
  );
}

function SignInButton() {
  return (
    <TouchableOpacity
      style={[styles.button, styles.signInButton]}
      onPress={() => console.log('SignIn tapped!')}
    >
      <Text style={styles.signInText}>Sign In</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    marginTop: 5,
    width: '90%',
    alignItems: 'center',
  },
  registerButton: {
    backgroundColor: 'orange',
    borderRadius: 8,
  },
  registerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signInButton: {
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'orange',
  },
  signInText: {
    color: 'orange',
    fontSize: 18,
    fontWeight: 'bold',
  },
  main: {
    marginBottom: 100,
    alignItems: 'center',
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  text: {
    marginTop: 15,
    color: 'black',
    fontWeight: '500',
  },
});
