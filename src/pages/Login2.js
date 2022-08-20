import React, { useState, useEffect } from 'react';
import {
  Button,
  View,
  KeyboardAvoidingView,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Animated,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

export default function Login(props) {

  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({ x: 300, y: 100 }));

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  useEffect(() => {



    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: true
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      })
    ]).start();

  }, []);




  return (

    <KeyboardAvoidingView style={styles.background}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.containerLogo}>
          <Animated.Image
            style={{
              width: logo.x,
              height: logo.y,
            }}
            source={require('./assets/trans-logo-black.png')}
          />
        </View>
      </TouchableWithoutFeedback>
      <Animated.View
        style={[
          styles.container,
          {
            opacity: opacity,
            transform: [
              { translateY: offset.y }
            ]
          }
        ]}>

        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={() => { }} /*não vai salvar em nenhum local*/
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={() => { }} /*não vai salvar em nenhum local*/
        />

        <TouchableOpacity style={styles.btnAcessar}>
          <Text style={styles.acessarText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnCriar}>
          <Text
            onPress={props.teste}
            style={styles.criarText}>Acessar sem fazer login</Text>
        </TouchableOpacity>

      </Animated.View>
    </KeyboardAvoidingView>

  );
}




const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EE1C4A'
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  input: {
    backgroundColor: '#fff',
    width: '90%',
    marginBottom: 20,
    color: '#222',
    fontSize: 15,
    borderRadius: 7,
    padding: 10,
  },
  btnAcessar: {
    backgroundColor: '#0D1117',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  acessarText: {
    color: '#fff',
    fontSize: 15,
  },
  btnCriar: {
    color: '#fff',
    width: '50%',
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginTop: 10,
  },
  criarText: {
    color: '#FFF',
    fontSize: 14,
  }
});
