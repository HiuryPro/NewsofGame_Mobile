import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './Login2';
import { Home } from './Hardware';


const Drawer2 = createDrawerNavigator();


function gaveta() {
  return (
    <Drawer2.Navigator screenOptions={{ drawerPosition: 'right' }}>
      <Drawer2.Screen name="Consoles" options={{ headerShown: false }} component={Home} />
      <Drawer2.Screen name="Especificações" options={{ headerShown: false }} component={Especificacoes} />
      <Drawer2.Screen name="Controle" options={{ headerShown: false }} component={Controle} />
      <Drawer2.Screen name="Gráficos" options={{ headerShown: false }} component={Graficos} />
      <Drawer2.Screen name="Xbox Series X" options={{ headerShown: false }} component={SeriesX} />
      <Drawer2.Screen name="Xbox Series S" options={{ headerShown: false }} component={SeriesS} />
      <Drawer2.Screen name="Controle Xbox Series" options={{ headerShown: false }} component={ControleX} />
    </Drawer2.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function Lorenzo() {
  return (

    <Drawer.Navigator>
      <Drawer.Screen name="Main" component={gaveta} options={{ headerShown: false }} />
    </Drawer.Navigator>

  );
}

export { Lorenzo }