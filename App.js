
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, Image, Animated, ImageBackground } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { Dark, Light } from './src/pages/Const';
import { Start } from './src/pages/Home';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './src/pages/Const'
import { Pc, PS5, Xbox, Mobile, Not } from './src/pages/Menus';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CustomDrawerContent, CustomDrawerContent2 } from './src/pages/CustomDrawers';
import { Fontes } from './src/pages/Fontes';
import { Not1, Not2, Not3, Not4, Not5, Not6, Not7, Not8, Not9, Not10, Not11, Not12 } from './src/pages/Noticias';
import { Not13, Not14, Not15, Not16, Not17, Not18, Not19, Not20, Not21, Not22, Not23, Not24 } from './src/pages/Noticias2';
import { Lancamentos } from './src/pages/Lancamentos';
import { Lorenzo } from './src/pages/Lorenzo'
import { Especificacoes, Controle, Graficos, ControleX, SeriesX, SeriesS, EvolucaoPS, EvolucaoX, FichaSwitch, ControleSwitch, EvolucaoSwitch } from './src/pages/play';
import { Home } from './src/pages/Hardware';
import { Games, Contato, Personagens, MobilePersons, PcPersons, XboxPersons, PsPersons, PcGames, PsGmaes, MobileGames, XboxGames } from "./src/pages/Luiz"
import { FadeInView } from './src/pages/Teste'
import { Sobre } from "./src/pages/Sobre"

const RootDrawer = createDrawerNavigator();

function App({ navigation }) {
  const [valor, setValor] = useState(false)
  const [esconde, setEsconde] = useState(true)
  const [first, setFirst] = useState(true)
  const [texto, setTexto] = useState("Não está logado")
  const [senha1, setSenha1] = useState("")
  const [login, setLogin] = useState("")

  function Inicio({ navigation }) {
    return (

      <Start teste={() => {
        {
          first ? navigation.navigate('Noticia') : navigation.navigate('Tela de Noticias')
          setEsconde(true)
          setFirst(false)


        }
      }} valor={valor} />

    );

  }

  function Entrar({ navigation }) {
    const [texto2, setTexto2] = useState("")

    const [senha, setSenha] = useState("")
    return (
      <FadeInView style={{ flex: 1, justifyContent: 'center' }}>
        <SafeAreaView style={[valor ? styles.dark : styles.light, { flex: 1 }]}>
          <Image style={styles.imagem} source={valor ? require("./assets/trans-logo-black.png") : require("./assets/trans-logo-light.png")} />
          <Text style={[valor ? styles.textblack : styles.textlight, { fontSize: 30, textAlign: 'center', marginBottom: 30, marginTop: 10 }]}>
            Faça Login no NewsGame
          </Text>
          <TextInput placeholder="Escreva seu Usuario" value={texto2} placeholderTextColor={valor ? 'black' : 'white'} style={valor ? styles.textinputBlack : styles.textInput} onChangeText={text => setTexto2(text)} />
          <TextInput placeholder="Escreva sua senha" value={senha} placeholderTextColor={valor ? 'black' : 'white'} secureTextEntry={true} style={valor ? styles.textinputBlack : styles.textInput} onChangeText={text => setSenha(text)} />
          <TouchableOpacity style={valor ? styles.entrarB : styles.entrar}
            onPress={() => {
              {
                if ((texto2 == texto && senha == senha1) || (texto2 == login && senha == senha1)) {
                  setTexto(texto2)
                  first ? navigation.navigate('Noticia') : navigation.navigate('Tela de Noticias');
                  setEsconde(true);
                  setFirst(false);
                  alert("Seja Bem Vindo " + texto2);
                  setTexto2("")
                  setSenha("")

                }
                else {

                  alert("Usuario/Senha Incorretos")
                }


              }
            }}
          >
            <Text style={styles.buttonText}> Entrar</Text>

          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              {
                first ? navigation.navigate('Noticia') : navigation.navigate('Tela de Noticias');
              }
            }}
          >
            <Text style={valor ? { color: '#23E0D9', fontSize: 14, } : { color: '#DC1F26', fontSize: 14, }}> Entrar sem Login</Text>

          </TouchableOpacity>
        </SafeAreaView>

      </FadeInView>


    );
  }

  function Cadastrar({ navigation }) {

    const [texto3, setTexto3] = useState("")
    const [senha2, setSenha2] = useState("")

    return (
      <FadeInView style={{ flex: 1, justifyContent: 'center' }}>
        <SafeAreaView style={[valor ? styles.dark : styles.light, { flex: 1 }]}>
          <Image style={styles.imagem} source={valor ? require("./assets/trans-logo-black.png") : require("./assets/trans-logo-light.png")} />
          <Text style={[valor ? styles.textblack : styles.textlight, { fontSize: 30, textAlign: 'center', marginBottom: 30, marginTop: 10 }]}>
            Faça o seu Cadastro no NewsGame

          </Text>
          <TextInput placeholder="Escreva seu Usuario" placeholderTextColor={valor ? 'black' : 'white'} style={valor ? styles.textinputBlack : styles.textInput} onChangeText={text => setTexto3(text)} />
          <TextInput placeholder="Escreva seu email" placeholderTextColor={valor ? 'black' : 'white'} style={valor ? styles.textinputBlack : styles.textInput} />
          <TextInput placeholder="Escreva sua senha" placeholderTextColor={valor ? 'black' : 'white'} secureTextEntry={true} style={valor ? styles.textinputBlack : styles.textInput} onChangeText={text => setSenha2(text)} />
          <TouchableOpacity style={valor ? styles.entrarB : styles.entrar}
            onPress={() => {
              navigation.navigate('Entrar');
              alert('Seu cadastro foi feito com Sucesso!!');
              setSenha1(senha2)
              setTexto(texto3)
              setLogin(texto3)

            }}>
            <Text style={styles.buttonText}> Cadastrar</Text>

          </TouchableOpacity>
        </SafeAreaView>

      </FadeInView>


    );
  }

  const Tab2 = createBottomTabNavigator();

  function Home2() {
    return (
      <Tab2.Navigator>

        <Tab2.Screen
          options={{
            headerShown: false, tabBarIcon: ({ size, color }) => (
              <Feather name="user-check" size={24} color={valor ? 'white' : 'black'} />
            )
          }}

          name="Entrar"
          component={Entrar}
        />

        <Tab2.Screen
          options={{
            headerShown: false, tabBarIcon: ({ size, color }) => (
              <Feather name="user-plus" size={24} color={valor ? 'white' : 'black'} />
            )
          }}

          name="Primeiro Acesso"
          component={Cadastrar}
        />

      </Tab2.Navigator>



    )



  }



  function Pcnews({ navigation }) {
    return (
      <Pc valor={valor}
        teste={() => {
          navigation.navigate('Call of Duty: Vanguard')
          setEsconde(false)
        }}
        teste2={() => {
          navigation.navigate('The Dark Pictures Anthology')
          setEsconde(false)
        }}
        teste3={() => {
          navigation.navigate("Tom Clancy's XDefiant")
          setEsconde(false)
        }}
        teste4={() => {
          navigation.navigate('Ghost Recon Frontline')
          setEsconde(false)
        }}
        teste5={() => {
          navigation.navigate('GTA: Trilogy')
          setEsconde(false)
        }}
        teste6={() => {
          navigation.navigate('God of War no Pc')
          setEsconde(false)
        }}



      />
    );
  }


  function PS5news({ navigation }) {
    return (
      <PS5 valor={valor} teste={() => {
        navigation.navigate('God of War')
        setEsconde(false)
      }}
        teste2={() => {
          navigation.navigate('1 - Far Cry 6')
          setEsconde(false)
        }}
        teste3={() => {
          navigation.navigate('2 - Far Cry 6')
          setEsconde(false)
        }}
        teste4={() => {
          navigation.navigate('Ride 4')
          setEsconde(false)
        }}
        teste5={() => {
          navigation.navigate('The Touryst')
          setEsconde(false)
        }}
        teste6={() => {
          navigation.navigate('Among Us')
          setEsconde(false)
        }}
      />
    );
  }


  function Mobilenews({ navigation }) {
    return (
      <Mobile valor={valor} teste={() => {
        navigation.navigate('Sky Warriors')
        setEsconde(false)
      }}
        teste2={() => {
          navigation.navigate('Free Fire Max')
          setEsconde(false)
        }}
        teste3={() => {
          navigation.navigate('Wild Rift')
          setEsconde(false)
        }}
        teste4={() => {
          navigation.navigate('Genshin Impact')
          setEsconde(false)
        }}
        teste5={() => {
          navigation.navigate('NBA NOW 22')
          setEsconde(false)
        }}
        teste6={() => {
          navigation.navigate('PUBG New State')
          setEsconde(false)
        }}
      />
    );
  }

  function Xboxnews({ navigation }) {
    return (
      <Xbox valor={valor} teste={() => {
        navigation.navigate('Marvel’s Avengers')
        setEsconde(false)
      }}
        teste2={() => {
          navigation.navigate('Forza Horizon 5')
          setEsconde(false)
        }}
        teste3={() => {
          navigation.navigate('Back 4 Blood')
          setEsconde(false)
        }}
        teste4={() => {
          navigation.navigate('FIFA 22')
          setEsconde(false)
        }}
        teste5={() => {
          navigation.navigate("Marvel's Guardians of the Galaxy")
          setEsconde(false)
        }}
        teste6={() => {
          navigation.navigate("Halo")
          setEsconde(false)
        }}
      />
    );
  }


  function NotTabs() {
    return (
      <Not pc={Pcnews} ps5={PS5news} xbox={Xboxnews} mobile={Mobilenews} />
    );
  }


  function Call({ navigation }) {
    return (
      <Not1 valor={valor} />
    );
  }

  function God({ navigation }) {
    return (

      <Not2 valor={valor} />

    );
  }
  function Sky() {
    return (
      <Not3 valor={valor} />
    );
  }

  function Avengers() {
    return (
      <Not4 valor={valor} />
    );
  }
  function Ash() {

    return (
      <Not5 valor={valor} />
    );
  }
  function Far() {
    return (
      <Not6 valor={valor} />
    );
  }

  function Forza() {
    return (
      <Not7 valor={valor} />
    );
  }
  function Free() {

    return (
      <Not8 valor={valor} />
    );
  }
  function Far2() {

    return (
      <Not9 valor={valor} />
    );
  }
  function Wild() {

    return (
      <Not10 valor={valor} />
    );
  }
  function Tom() {
    return (
      <Not11 valor={valor} />
    );

  }
  function Back() {
    return (
      <Not12 valor={valor} />
    );

  }
  function Ghost() {
    return (
      <Not13 valor={valor} />
    );

  }
  const Tab = createDrawerNavigator();

  function Gta() {

    return (
      <Not14 valor={valor} />
    );
  }

  function Ride() {

    return (
      <Not15 valor={valor} />
    );
  }
  function Tour() {

    return (
      <Not16 valor={valor} />
    );
  }
  function Gen() {

    return (
      <Not17 valor={valor} />
    );
  }
  function Fifa() {

    return (
      <Not18 valor={valor} />
    );
  }
  function Nba() {

    return (
      <Not19 valor={valor} />
    );
  }
  function Galaxy() {

    return (
      <Not20 valor={valor} />
    );
  }

  function Godc() {

    return (
      <Not21 valor={valor} />
    );
  }

  function Among() {

    return (
      <Not22 valor={valor} />
    );
  }

  function Pubg() {

    return (
      <Not23 valor={valor} />
    );
  }

  function Halo() {

    return (
      <Not24 valor={valor} />
    );
  }


  function TabNoticias({ navigation }) {
    return (

      <Tab.Navigator
        drawerContent={(props) => <CustomDrawerContent2
          color={valor ? "#23E0D9" : "#DC1F26"}
          valor={valor}
          not={() => {
            navigation.navigate('Tela de Noticias')
            setEsconde(true)
          }}
          new1={() => {
            navigation.navigate('Call of Duty: Vanguard')
            setEsconde(false)
          }}
          new2={() => {
            navigation.navigate('God of War')
            setEsconde(false)
          }}
          new3={() => {
            navigation.navigate('Sky Warriors')
            setEsconde(false)
          }}
          new4={() => {
            navigation.navigate('Marvel’s Avengers')
            setEsconde(false)
          }}
          new5={() => {
            navigation.navigate('The Dark Pictures Anthology')
            setEsconde(false)
          }}
          new6={() => {
            navigation.navigate('1 - Far Cry 6')
            setEsconde(false)
          }}
          new7={() => {
            navigation.navigate('Forza Horizon 5')
            setEsconde(false)
          }}
          new8={() => {
            navigation.navigate('Free Fire Max')
            setEsconde(false)
          }}
          new9={() => {
            navigation.navigate('2 - Far Cry 6')
            setEsconde(false)
          }}
          new10={() => {
            navigation.navigate('Wild Rift')
            setEsconde(false)
          }}
          new11={() => {
            navigation.navigate("Tom Clancy's XDefiant")
            setEsconde(false)
          }}
          new12={() => {
            navigation.navigate("Back 4 Blood")
            setEsconde(false)
          }}
          new13={() => {
            navigation.navigate("Ghost Recon Frontline")
            setEsconde(false)
          }}
          new14={() => {
            navigation.navigate("GTA: Trilogy")
            setEsconde(false)
          }}
          new15={() => {
            navigation.navigate("Ride 4")
            setEsconde(false)
          }}
          new16={() => {
            navigation.navigate("The Touryst")
            setEsconde(false)
          }}
          new17={() => {
            navigation.navigate("Genshin Impact")
            setEsconde(false)
          }}
          new18={() => {
            navigation.navigate("FIFA 22")
            setEsconde(false)
          }}
          new19={() => {
            navigation.navigate("NBA NOW 22")
            setEsconde(false)
          }}
          new20={() => {
            navigation.navigate("Marvel's Guardians of the Galaxy")
            setEsconde(false)
          }}
          new21={() => {
            navigation.navigate("God of War no Pc")
            setEsconde(false)
          }}
          new22={() => {
            navigation.navigate("Among Us")
            setEsconde(false)
          }}
          new23={() => {
            navigation.navigate("PUBG New State")
            setEsconde(false)
          }}
          new24={() => {
            navigation.navigate("Halo")
            setEsconde(false)
          }}
          {...props} />}
        screenOptions={{ drawerPosition: 'right' }}

      >

        <Tab.Screen options={{ headerShown: false }} name='Tela de Noticias' component={NotTabs} />
        <Tab.Screen options={{
          headerLeft: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                navigation.navigate('Tela de Noticias', { screen: 'PC' })
                setEsconde(true)
              }}
            >
              <Feather
                // @ts-ignore
                style={{ paddingLeft: 20 }} name="arrow-left" size={28} color={valor ? 'white' : 'black'} />
            </TouchableOpacity>
          ),
        }} name='Call of Duty: Vanguard' component={Call} />

        <Tab.Screen options={{
          headerLeft: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                navigation.navigate('Tela de Noticias', { screen: 'PS5' })
                setEsconde(true)
              }}
            >
              <Feather
                // @ts-ignore
                style={{ paddingLeft: 20, }} name="arrow-left" size={28} color={valor ? 'white' : 'black'} />
            </TouchableOpacity>
          ),
        }} name='God of War' component={God} />
        <Tab.Screen options={{
          headerLeft: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                navigation.navigate('Tela de Noticias', { screen: 'Mobile' })
                setEsconde(true)
              }}
            >
              <Feather
                // @ts-ignore

                // @ts-ignore
                style={{ paddingLeft: 20, }} name="arrow-left" size={28} color={valor ? 'white' : 'black'} />
            </TouchableOpacity>
          ),
        }} name='Sky Warriors' component={Sky} />
        <Tab.Screen options={{
          headerLeft: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                navigation.navigate('Tela de Noticias', { screen: 'Xbox' })
                setEsconde(true)
              }}
            >
              <Feather
                // @ts-ignore

                // @ts-ignore
                style={{ paddingLeft: 20, }} name="arrow-left" size={28} color={valor ? 'white' : 'black'} />
            </TouchableOpacity>
          ),
        }} name='Marvel’s Avengers' component={Avengers} />
        <Tab.Screen options={{
          headerLeft: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                navigation.navigate('Tela de Noticias', { screen: 'PC' })
                setEsconde(true)
              }}
            // @ts-ignore
            >
              <Feather
                // @ts-ignore
                style={{ paddingLeft: 20, }} name="arrow-left" size={28} color={valor ? 'white' : 'black'} />
            </TouchableOpacity>
          ),
        }} name='The Dark Pictures Anthology' component={Ash} />
        <Tab.Screen options={{
          headerLeft: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                navigation.navigate('Tela de Noticias', { screen: 'PS5' })
                setEsconde(true)
              }}
            >
              <Feather
                // @ts-ignore
                style={{ paddingLeft: 20, }} name="arrow-left" size={28} color={valor ? 'white' : 'black'} />
            </TouchableOpacity>
          ),
        }} name='1 - Far Cry 6' component={Far} />
        <Tab.Screen options={{
          headerLeft: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                navigation.navigate('Tela de Noticias', { screen: 'PS5' })
                setEsconde(true)
              }}
            >
              <Feather
                // @ts-ignore

                // @ts-ignore
                style={{ paddingLeft: 20, }} name="arrow-left" size={28} color={valor ? 'white' : 'black'} />
            </TouchableOpacity>
          ),
        }} name='2 - Far Cry 6' component={Far2} />
        <Tab.Screen options={{
          headerLeft: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                navigation.navigate('Tela de Noticias', { screen: 'Xbox' })
                setEsconde(true)
              }}
            >
              <Feather
                // @ts-ignore

                // @ts-ignore
                style={{ paddingLeft: 20, }} name="arrow-left" size={28} color={valor ? 'white' : 'black'} />
            </TouchableOpacity>
          ),
        }} name='Forza Horizon 5' component={Forza} />
        <Tab.Screen options={{
          headerLeft: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                navigation.navigate('Tela de Noticias', { screen: 'Mobile' })
                setEsconde(true)
              }}
            >
              <Feather
                // @ts-ignore
                style={{ paddingLeft: 20, }} name="arrow-left" size={28} color={valor ? 'white' : 'black'} />
            </TouchableOpacity>
          ),
        }} name='Free Fire Max' component={Free} />
        <Tab.Screen options={{
          headerLeft: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                navigation.navigate('Tela de Noticias', { screen: 'Mobile' })
                setEsconde(true)
              }}
            >
              <Feather
                // @ts-ignore

                // @ts-ignore
                style={{ paddingLeft: 20, }} name="arrow-left" size={28} color={valor ? 'white' : 'black'} />
            </TouchableOpacity>
          ),
        }} name='Wild Rift' component={Wild} />
        <Tab.Screen options={{
          headerLeft: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                navigation.navigate('Tela de Noticias', { screen: 'PC' })
                setEsconde(true)
              }}
            >
              <Feather
                // @ts-ignore
                style={{ paddingLeft: 20, }} name="arrow-left" size={28} color={valor ? 'white' : 'black'} />
            </TouchableOpacity>
          ),
        }} name="Tom Clancy's XDefiant" component={Tom} />
        <Tab.Screen options={{
          headerLeft: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                navigation.navigate('Tela de Noticias', { screen: 'Xbox' })
                setEsconde(true)
              }}
            >
              <Feather
                // @ts-ignore
                style={{ paddingLeft: 20, }} name="arrow-left" size={28} color={valor ? 'white' : 'black'} />
            </TouchableOpacity>
          ),
        }} name='Back 4 Blood' component={Back} />
        <Tab.Screen options={{
          headerLeft: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                navigation.navigate('Tela de Noticias', { screen: 'PC' })
                setEsconde(true)
              }}
            >
              <Feather
                // @ts-ignore

                // @ts-ignore
                style={{ paddingLeft: 20, }} name="arrow-left" size={28} color={valor ? 'white' : 'black'} />
            </TouchableOpacity>
          ),
        }} name='Ghost Recon Frontline' component={Ghost} />
        <Tab.Screen options={{
          headerLeft: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                navigation.navigate('Tela de Noticias', { screen: 'PC' })
                setEsconde(true)
              }}
            >
              <Feather
                // @ts-ignore
                style={{ paddingLeft: 20, }} name="arrow-left" size={28} color={valor ? 'white' : 'black'} />
            </TouchableOpacity>
          ),
        }} name='GTA: Trilogy' component={Gta} />
        <Tab.Screen options={{
          headerLeft: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                navigation.navigate('Tela de Noticias', { screen: 'PS5' })
                setEsconde(true)
              }}
            >
              <Feather
                // @ts-ignore
                style={{ paddingLeft: 20, }} name="arrow-left" size={28} color={valor ? 'white' : 'black'} />
            </TouchableOpacity>
          ),
        }} name='Ride 4' component={Ride} />
        <Tab.Screen options={{
          headerLeft: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                navigation.navigate('Tela de Noticias', { screen: 'PS5' })
                setEsconde(true)
              }}
            >
              <Feather
                // @ts-ignore
                style={{ paddingLeft: 20, }} name="arrow-left" size={28} color={valor ? 'white' : 'black'} />
            </TouchableOpacity>
          ),
        }} name='The Touryst' component={Tour} />
        <Tab.Screen options={{
          headerLeft: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                navigation.navigate('Tela de Noticias', { screen: 'Xbox' })
                setEsconde(true)
              }}
            >
              <Feather
                // @ts-ignore
                style={{ paddingLeft: 20, }} name="arrow-left" size={28} color={valor ? 'white' : 'black'} />
            </TouchableOpacity>
          ),
        }} name='FIFA 22' component={Fifa} />
        <Tab.Screen options={{
          headerLeft: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                navigation.navigate('Tela de Noticias', { screen: 'Mobile' })
                setEsconde(true)
              }}
            >
              <Feather
                // @ts-ignore
                style={{ paddingLeft: 20, }} name="arrow-left" size={28} color={valor ? 'white' : 'black'} />
            </TouchableOpacity>
          ),
        }} name='Genshin Impact' component={Gen} />
        <Tab.Screen options={{
          headerLeft: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                navigation.navigate('Tela de Noticias', { screen: 'Mobile' })
                setEsconde(true)
              }}
            >
              <Feather
                // @ts-ignore
                style={{ paddingLeft: 20, }} name="arrow-left" size={28} color={valor ? 'white' : 'black'} />
            </TouchableOpacity>
          ),
        }} name='NBA NOW 22' component={Nba} />
        <Tab.Screen options={{
          headerLeft: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                navigation.navigate('Tela de Noticias', { screen: 'Xbox' })
                setEsconde(true)
              }}
            >
              <Feather
                // @ts-ignore
                style={{ paddingLeft: 20, }} name="arrow-left" size={28} color={valor ? 'white' : 'black'} />
            </TouchableOpacity>
          ),
        }} name="Marvel's Guardians of the Galaxy" component={Galaxy} />
        <Tab.Screen options={{
          headerLeft: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                navigation.navigate('Tela de Noticias', { screen: 'PC' })
                setEsconde(true)
              }}
            >
              <Feather
                // @ts-ignore
                style={{ paddingLeft: 20, }} name="arrow-left" size={28} color={valor ? 'white' : 'black'} />
            </TouchableOpacity>
          ),
        }} name="God of War no Pc" component={Godc} />
        <Tab.Screen options={{
          headerLeft: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                navigation.navigate('Tela de Noticias', { screen: 'PC' })
                setEsconde(true)
              }}
            >
              <Feather
                // @ts-ignore
                style={{ paddingLeft: 20, }} name="arrow-left" size={28} color={valor ? 'white' : 'black'} />
            </TouchableOpacity>
          ),
        }} name="Among Us" component={Among} />
        <Tab.Screen options={{
          headerLeft: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                navigation.navigate('Tela de Noticias', { screen: 'Mobile' })
                setEsconde(true)
              }}
            >
              <Feather
                // @ts-ignore
                style={{ paddingLeft: 20, }} name="arrow-left" size={28} color={valor ? 'white' : 'black'} />
            </TouchableOpacity>
          ),
        }} name="PUBG New State" component={Pubg} />
        <Tab.Screen options={{
          headerLeft: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                navigation.navigate('Tela de Noticias', { screen: 'Xbox' })
                setEsconde(true)
              }}
            >
              <Feather
                // @ts-ignore
                style={{ paddingLeft: 20, }} name="arrow-left" size={28} color={valor ? 'white' : 'black'} />
            </TouchableOpacity>
          ),
        }} name="Halo" component={Halo} />
      </Tab.Navigator>



    );
  }
  function TelaFontes() {
    return (
      <Fontes valor={valor} />

    );

  }

  function Lanca() {
    return (
      <Lancamentos valor={valor} />
    );

  }

  const Drawer2 = createDrawerNavigator();

  function gaveta({ navigation }) {
    return (
      <Drawer2.Navigator screenOptions={{ drawerPosition: 'right' }}>
        <Drawer2.Screen options={{ headerShown: false }} name="Home" component={Home} />
        <Drawer2.Screen options={{
          headerLeft: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                navigation.navigate('Home', { screen: 'Playstation' })
                setEsconde(true)
              }}
            >
              <Feather
                // @ts-ignore
                style={{ paddingLeft: 20, }} name="arrow-left" size={28} color={valor ? 'white' : 'black'} />
            </TouchableOpacity>
          ),
        }} name="Especificações" component={Especificacoes} />
        <Drawer2.Screen options={{
          headerLeft: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                navigation.navigate('Home', { screen: 'Playstation' })
                setEsconde(true)
              }}
            >
              <Feather
                // @ts-ignore
                style={{ paddingLeft: 20, }} name="arrow-left" size={28} color={valor ? 'white' : 'black'} />
            </TouchableOpacity>
          ),
        }} name="Controle" component={Controle} />
        <Drawer2.Screen options={{
          headerLeft: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                navigation.navigate('Home', { screen: 'Playstation' })
                setEsconde(true)
              }}
            >
              <Feather
                // @ts-ignore
                style={{ paddingLeft: 20, }} name="arrow-left" size={28} color={valor ? 'white' : 'black'} />
            </TouchableOpacity>
          ),
        }} name="Gráficos" component={Graficos} />
        <Drawer2.Screen options={{
          headerLeft: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                navigation.navigate('Home', { screen: 'Playstation' })
                setEsconde(true)
              }}
            >
              <Feather
                // @ts-ignore
                style={{ paddingLeft: 20, }} name="arrow-left" size={28} color={valor ? 'white' : 'black'} />
            </TouchableOpacity>
          ),
        }} name="Evolução PS" component={EvolucaoPS} />
        <Drawer2.Screen options={{
          headerLeft: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                navigation.navigate('Home', { screen: 'Xbox' })
                setEsconde(true)
              }}
            >
              <Feather
                // @ts-ignore
                style={{ paddingLeft: 20, }} name="arrow-left" size={28} color={valor ? 'white' : 'black'} />
            </TouchableOpacity>
          ),
        }} name="Xbox Series X" component={SeriesX} />
        <Drawer2.Screen options={{
          headerLeft: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                navigation.navigate('Home', { screen: 'Xbox' })
                setEsconde(true)
              }}
            >
              <Feather
                // @ts-ignore
                style={{ paddingLeft: 20, }} name="arrow-left" size={28} color={valor ? 'white' : 'black'} />
            </TouchableOpacity>
          ),
        }} name="Xbox Series S" component={SeriesS} />
        <Drawer2.Screen options={{
          headerLeft: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                navigation.navigate('Home', { screen: 'Xbox' })
                setEsconde(true)
              }}
            >
              <Feather
                // @ts-ignore
                style={{ paddingLeft: 20, }} name="arrow-left" size={28} color={valor ? 'white' : 'black'} />
            </TouchableOpacity>
          ),
        }} name="Controle Xbox Series" component={ControleX} />
        <Drawer2.Screen options={{
          headerLeft: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                navigation.navigate('Home', { screen: 'Xbox' })
                setEsconde(true)
              }}
            >
              <Feather
                // @ts-ignore
                style={{ paddingLeft: 20, }} name="arrow-left" size={28} color={valor ? 'white' : 'black'} />
            </TouchableOpacity>
          ),
        }} name="Evolução Xbox" component={EvolucaoX} />
        <Drawer2.Screen options={{
          headerLeft: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                navigation.navigate('Home', { screen: 'Switch' })
                setEsconde(true)
              }}
            >
              <Feather
                // @ts-ignore
                style={{ paddingLeft: 20, }} name="arrow-left" size={28} color={valor ? 'white' : 'black'} />
            </TouchableOpacity>
          ),
        }} name="Ficha Técnica" component={FichaSwitch} />
        <Drawer2.Screen options={{
          headerLeft: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                navigation.navigate('Home', { screen: 'Switch' })
                setEsconde(true)
              }}
            >
              <Feather
                // @ts-ignore
                style={{ paddingLeft: 20, }} name="arrow-left" size={28} color={valor ? 'white' : 'black'} />
            </TouchableOpacity>
          ),
        }} name="Controle Switch" component={ControleSwitch} />
        <Drawer2.Screen options={{
          headerLeft: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                navigation.navigate('Home', { screen: 'Switch' })
                setEsconde(true)
              }}
            >
              <Feather
                // @ts-ignore
                style={{ paddingLeft: 20, }} name="arrow-left" size={28} color={valor ? 'white' : 'black'} />
            </TouchableOpacity>
          ),
        }} name="Evolução Switch" component={EvolucaoSwitch} />
      </Drawer2.Navigator>
    );
  }

  function Contato2() {

    return (
      <Contato valor={valor} />
    )
  }

  function PcPersons2() {

    return (
      <PcPersons valor={valor} />
    );

  }

  function PsPersons2() {

    return (
      <PsPersons valor={valor} />
    );

  }

  function MobilePersons2() {

    return (
      <MobilePersons valor={valor} />
    );

  }

  function XboxPersons2() {

    return (
      <XboxPersons valor={valor} />
    );

  }

  function PcGames2() {

    return (
      <PcGames valor={valor} />
    );

  }

  function PsGames2() {

    return (
      <PsGmaes valor={valor} />
    );

  }

  function MobileGames2() {

    return (
      <MobileGames valor={valor} />
    );

  }

  function XboxGames2() {

    return (
      <XboxGames valor={valor} />
    );

  }

  function Personagens2() {

    return (
      <Personagens pcPersons2={PcPersons2} PsPersons2={PsPersons2} XboxPersons2={XboxPersons2} MobilePersons2={MobilePersons2} />
    )
  }

  function Games2() {

    return (
      <Games PcGames2={PcGames2} PsGmaes2={PsGames2} XboxGames2={XboxGames2} MobileGames2={MobileGames2} />
    )
  }

  function Sobre2() {

    return (
      <Sobre valor={valor} />
    );
  }


  const scheme = useColorScheme();

  return (

    // @ts-ignore
    <AppearanceProvider>
      <SafeAreaProvider>



        <NavigationContainer theme={scheme === (valor ? 'light' : 'dark') ? Dark : Light}>
          <RootDrawer.Navigator drawerContent={(props) => <CustomDrawerContent
            color={valor ? "#23E0D9" : "#DC1F26"}
            valor={valor}
            teste={() => {
              setValor(previousState => !previousState)
            }}
            texto={texto}
            Texto2={setTexto}
            {...props} />}>
            <RootDrawer.Screen options={{ headerShown: false }} name="Login" component={Home2} />
            <RootDrawer.Screen options={esconde ? { headerShown: true } : { headerShown: false }} name="Noticia" component={TabNoticias} />
            <RootDrawer.Screen name="Lançamentos" component={Lanca} />
            <RootDrawer.Screen name="Consoles" component={gaveta} />
            <RootDrawer.Screen name="Games" component={Games2} />
            <RootDrawer.Screen name="Personagens" component={Personagens2} />
            <RootDrawer.Screen name="Contatos" component={Contato2} />
            <RootDrawer.Screen name="Sobre" component={Sobre2} />
            <RootDrawer.Screen name="Fontes das Noticias" component={TelaFontes} />
          </RootDrawer.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </AppearanceProvider>
  );
}


export default App;
