import React, { Component, useState } from 'react'
// @ts-ignore
import { Text, TextInput, TouchableOpacity, Image, Animated, ImageBackground } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo, Feather } from '@expo/vector-icons'
import { styles } from './Const'
import { FadeInView } from './Teste'


function Start(props) {

  return (

    <FadeInView style={{ flex: 1, justifyContent: 'center' }} >
      <SafeAreaView style={[props.valor ? styles.dark : styles.light, { flex: 1 }]}>
        <Image style={styles.imagem} source={props.valor ? require("./assets/trans-logo-black.png") : require("./assets/trans-logo-light.png")} />
        <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, textAlign: 'center', marginBottom: 15 }]}>
          Bem-vindo a melhor plataforma de noticias sobre games!

        </Text>
        <TouchableOpacity style={props.valor ? styles.entrarB : styles.entrar}
          onPress={props.teste}
        >
          <Text style={styles.buttonText}> Entrar</Text>

        </TouchableOpacity>

      </SafeAreaView>
    </FadeInView>


  );

}

export { Start }; 