import React, { useRef, useEffect, useState } from 'react';
// @ts-ignore
import { Text, TouchableOpacity, Image, Animated, FlatList, ScrollView, ImageBackground, Dimensions } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './Const'
import { FadeInView } from './Teste'
import { Entypo, Feather } from '@expo/vector-icons'


function Pc(props) {
  let butao = Dimensions.get('window').width;
  const teste = useRef();
  const [count, setCount] = useState(1)
  const [valor, setValor] = useState(413)


  function Aumenta() {
    if (count === 3) {
      setCount(1)
      setValor(413)
    }
    else if (count === 2) {
      setCount(3)
      setValor(0)
    }
    else if (count === 1) {
      setCount(2)
      setValor(826)
    }
  }

  return (
    <ImageBackground style={{ flex: 2 }} resizeMode='stretch' source={require('./assets/Gamer.jpg')}>
      <FadeInView>
        <SafeAreaView style={{ alignItems: 'center', justifyContent: 'center' }}>


          <ScrollView>
            <ScrollView
              ref={teste}
              horizontal
              pagingEnabled

            >
              <TouchableOpacity style={[props.valor ? styles.cardark2 : styles.card2, { width: butao, flex: 1 }]}
                onPress={props.teste}
              >
                <Image style={[styles.cardImage, { borderTopRightRadius: 31, borderTopLeftRadius: 30 }]} source={require("./assets/jogo1.jpg")} />
                <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, paddingLeft: 10 }]}>
                  Quebre tudo no beta Call of Duty: Vanguard
                </Text>

              </TouchableOpacity>
              <TouchableOpacity style={[props.valor ? styles.cardark2 : styles.card2, { width: butao, flex: 1 }]}
                onPress={props.teste2}
              >
                <Image style={[styles.cardImage, { borderTopRightRadius: 55, borderTopLeftRadius: 54 }]} source={require("./assets/jogo3.jpg")} />
                <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, paddingLeft: 10 }]}>
                  House of Ashes ganha trailer mostrando armas e monstros
                </Text>

              </TouchableOpacity>
              <TouchableOpacity style={[props.valor ? styles.cardark2 : styles.card2, { width: butao, flex: 1 }]}
                onPress={props.teste3}
              >
                <Image style={[styles.cardImage, { borderTopRightRadius: 49, borderTopLeftRadius: 49 }]} source={require("./assets/Tom.jpg")} />
                <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, paddingLeft: 10 }]}>
                  Tom Clancy's XDefiant é o novo jogo de tiro grátis da Ubisoft
                </Text>

              </TouchableOpacity>
            </ScrollView>
            <TouchableOpacity style={props.valor ? styles.proximodark : styles.proximolight} onPress={() => [
              Aumenta(),
              teste.current.scrollTo({
                x: (valor),
                y: 0,
                animated: true

              }),

            ]}>

              <Text style={props.valor ? styles.textob : styles.textol}>
                <Entypo name="chevron-thin-right" size={50} color={props.valor ? "#23E0D9" : "#DC1F26"} />
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={[props.valor ? styles.cardark : styles.card]}
              onPress={props.teste4}
            >
              <Image style={[styles.cardImage, { borderTopRightRadius: 12, borderTopLeftRadius: 13 }]} source={require("./assets/Ghost.jpg")} />
              <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, paddingLeft: 10, }]}>
                Ghost Recon Frontline: veja requisitos e mais detalhes do jogo da Ubisoft
              </Text>

            </TouchableOpacity>
            <TouchableOpacity style={[props.valor ? styles.cardark : styles.card]}
              onPress={props.teste5}
            >
              <Image style={[styles.cardImage, { borderTopRightRadius: 15, borderTopLeftRadius: 15 }]} source={require("./assets/GTA.jpg")} />
              <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, paddingLeft: 10, }]}>
                Veja requisitos mínimos e recomendados para rodar a trilogia GTA no PC
              </Text>

            </TouchableOpacity>
            <TouchableOpacity style={[props.valor ? styles.cardark : styles.card, { marginBottom: 45 }]}
              onPress={props.teste6}
            >
              <Image style={[styles.cardImage, { borderTopRightRadius: 70, borderTopLeftRadius: 70 }]} source={require("./assets/GodPC.jpg")} />
              <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, paddingLeft: 10, }]}>
                God of War é oficialmente anunciado para PC e chega em janeiro
              </Text>

            </TouchableOpacity>
          </ScrollView>

        </SafeAreaView>
      </FadeInView>
    </ImageBackground>
  );

}

function PS5(props) {
  let butao = Dimensions.get('window').width;
  const teste = useRef();
  const [count, setCount] = useState(1)
  const [valor, setValor] = useState(413)
  function Aumenta() {
    if (count === 3) {
      setCount(1)
      setValor(413)
    }
    else if (count === 2) {
      setCount(3)
      setValor(0)
    }
    else if (count === 1) {
      setCount(2)
      setValor(826)
    }
  }

  return (

    <ImageBackground style={{ flex: 2 }} resizeMode='stretch' source={require('./assets/wallpaperfoda.jpg')}>
      <FadeInView>
        <SafeAreaView style={{ alignItems: 'center', justifyContent: 'center', }}>

          <ScrollView>
            <ScrollView
              ref={teste}
              horizontal
              pagingEnabled
            >
              <TouchableOpacity style={[props.valor ? styles.cardark2 : styles.card2, { width: butao, flex: 1 }]}
                onPress={props.teste}
              >
                <Image style={[styles.cardImage, { borderTopRightRadius: 12, borderTopLeftRadius: 12 }]} source={require("./assets/GOD.jpeg")} />
                <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, paddingLeft: 10 }]}>
                  God Of War Ragnarok ganha trailer dublado em PT-BR; confira!
                </Text>

              </TouchableOpacity>

              <TouchableOpacity style={[props.valor ? styles.cardark2 : styles.card2, { width: butao, flex: 1 }]}
                onPress={props.teste2}
              >
                <Image style={[styles.cardImage, { borderTopRightRadius: 39, borderTopLeftRadius: 39 }]} source={require("./assets/galo.jpg")} />
                <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, paddingLeft: 10 }]}>
                  Far Cry 6: rinha de galo é repreendida e PETA pede remoção do game
                </Text>

              </TouchableOpacity>
              <TouchableOpacity style={[props.valor ? styles.cardark2 : styles.card2, { width: butao, flex: 1 }]}
                onPress={props.teste3}
              >
                <Image style={[styles.cardImage, { borderTopRightRadius: 12, borderTopLeftRadius: 12 }]} source={require("./assets/animais.jpg")} />
                <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, paddingLeft: 10 }]}>
                  Far Cry 6: Novo vídeo destaca interações com os animais
                </Text>

              </TouchableOpacity>
            </ScrollView>
            <TouchableOpacity style={props.valor ? styles.proximodark : styles.proximolight} onPress={() => [
              Aumenta(),
              teste.current.scrollTo({
                x: (valor),
                y: 0,
                animated: true

              }),

            ]}>

              <Text style={props.valor ? styles.textob : styles.textol}>
                <Entypo name="chevron-thin-right" size={50} color={props.valor ? "#23E0D9" : "#DC1F26"} />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={props.valor ? styles.cardark : styles.card}
              onPress={props.teste4}
            >
              <Image style={[styles.cardImage, { borderTopRightRadius: 12, borderTopLeftRadius: 12 }]} source={require("./assets/Ride.jpg")} />
              <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, paddingLeft: 10 }]}>
                Ride 4: vídeo mostra o jogo rodando em um PS5 e impressiona pelo realismo

              </Text>

            </TouchableOpacity>
            <TouchableOpacity style={[props.valor ? styles.cardark : styles.card]}
              onPress={props.teste5}
            >
              <Image style={[styles.cardImage, { borderTopRightRadius: 58, borderTopLeftRadius: 58 }]} source={require("./assets/Turista.jpg")} />
              <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, paddingLeft: 10 }]}>
                The Touryst é o primeiro jogo de PS5 com resolução nativa 8K a 60 FPS

              </Text>

            </TouchableOpacity>
            <TouchableOpacity style={[props.valor ? styles.cardark : styles.card, { marginBottom: 45 }]}
              onPress={props.teste6}
            >
              <Image style={[styles.cardImage, { borderTopRightRadius: 12, borderTopLeftRadius: 12 }]} source={require("./assets/Among.jpg")} />
              <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, paddingLeft: 10 }]}>
                Among Us ganha data de lançamento para consoles PS4, PS5 e Xbox
              </Text>

            </TouchableOpacity>
          </ScrollView>

        </SafeAreaView >
      </FadeInView>
    </ImageBackground>
  );

}

function Mobile(props) {
  let butao = Dimensions.get('window').width;
  const teste = useRef();
  const [count, setCount] = useState(1)
  const [valor, setValor] = useState(413)
  function Aumenta() {
    if (count === 3) {
      setCount(1)
      setValor(413)
    }
    else if (count === 2) {
      setCount(3)
      setValor(0)
    }
    else if (count === 1) {
      setCount(2)
      setValor(826)
    }
  }

  return (
    <ImageBackground style={{ flex: 2 }} resizeMode='stretch' source={require('./assets/android.jpg')}>
      <FadeInView>
        <SafeAreaView style={{ alignItems: 'center', justifyContent: 'center', }}>

          <ScrollView>
            <ScrollView
              ref={teste}
              horizontal
              pagingEnabled
            >
              <TouchableOpacity style={[props.valor ? styles.cardark2 : styles.card2, { width: butao, flex: 1 }]}
                onPress={props.teste}
              >
                <Image style={[styles.cardImage, { borderTopRightRadius: 30, borderTopLeftRadius: 30 }]} source={require("./assets/jogo2.jpg")} />
                <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, paddingLeft: 10 }]}>
                  Sky Warriors: jogo brasileiro de combate aéreo chega globalmente em outubro
                  para IOS e Android
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={[props.valor ? styles.cardark2 : styles.card2, { width: butao, flex: 1 }]}
                onPress={props.teste2}
              >
                <Image style={[styles.cardImage, { borderTopRightRadius: 12, borderTopLeftRadius: 11 }]} source={require("./assets/free.jpg")} />
                <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, paddingLeft: 10 }]}>
                  Free Fire vs Free Fire Max: saiba o que muda entre as versões do jogo
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={[props.valor ? styles.cardark2 : styles.card2, { width: butao, flex: 1 }]}
                onPress={props.teste3}
              >
                <Image style={[styles.cardImage, { borderTopRightRadius: 39, borderTopLeftRadius: 39 }]} source={require("./assets/Wild.jpg")} />
                <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, paddingLeft: 10 }]}>
                  Wild Rift: patch 2.5 tem detalhes revelados pela Riot; veja o que muda
                </Text>
              </TouchableOpacity>

            </ScrollView>
            <TouchableOpacity style={props.valor ? styles.proximodark : styles.proximolight} onPress={() => [
              Aumenta(),
              teste.current.scrollTo({
                x: (valor),
                y: 0,
                animated: true

              }),

            ]}>

              <Text style={props.valor ? styles.textob : styles.textol}>
                <Entypo name="chevron-thin-right" size={50} color={props.valor ? "#23E0D9" : "#DC1F26"} />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[props.valor ? styles.cardark : styles.card]}
              onPress={props.teste4}
            >
              <Image style={[styles.cardImage, { borderTopRightRadius: 47, borderTopLeftRadius: 47 }]} source={require("./assets/Gen.jpg")} />
              <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, paddingLeft: 10 }]}>
                Genshin Impact arrecada US$ 2 bilhões apenas no mobile em um ano
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[props.valor ? styles.cardark : styles.card]}
              onPress={props.teste5}
            >
              <Image style={[styles.cardImage, { borderTopRightRadius: 47, borderTopLeftRadius: 47 }]} source={require("./assets/Nba.jpg")} />
              <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, paddingLeft: 10 }]}>
                NBA NOW 22 é lançado no Android e iOS
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[props.valor ? styles.cardark : styles.card, { marginBottom: 45 }]}
              onPress={props.teste6}
            >
              <Image style={[styles.cardImage, { borderTopRightRadius: 33, borderTopLeftRadius: 33 }]} source={require("./assets/Pub.jpg")} />
              <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, paddingLeft: 10 }]}>
                PUBG New State será lançado para dispositivos móveis em novembro
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      </FadeInView>
    </ImageBackground>
  );

}
function Xbox(props) {
  let butao = Dimensions.get('window').width;
  const teste = useRef();
  const [count, setCount] = useState(1)
  const [valor, setValor] = useState(413)
  function Aumenta() {
    if (count === 3) {
      setCount(1)
      setValor(413)
    }
    else if (count === 2) {
      setCount(3)
      setValor(0)
    }
    else if (count === 1) {
      setCount(2)
      setValor(826)
    }
  }
  return (
    <ImageBackground style={{ flex: 2 }} resizeMode='stretch' source={require('./assets/xbox.jpg')}>
      <FadeInView>
        <SafeAreaView style={{ alignItems: 'center', justifyContent: 'center', }}>
          <ScrollView>
            <ScrollView
              ref={teste}
              horizontal
              pagingEnabled
            >
              <TouchableOpacity style={[props.valor ? styles.cardark2 : styles.card2, { width: butao, flex: 1 }]}
                onPress={props.teste}
              >
                <Image style={[styles.cardImage, { borderTopRightRadius: 25, borderTopLeftRadius: 25 }]} source={require("./assets/Marvel.jpg")} />
                <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, paddingLeft: 10, flex: 1 }]}>
                  Marvel’s Avengers Chega Ao Xbox Game Pass Em 30 De Setembro
                </Text>

              </TouchableOpacity>
              <TouchableOpacity style={[props.valor ? styles.cardark2 : styles.card2, { width: butao, flex: 1 }]}
                onPress={[props.teste2, props.teste]}
              >
                <Image style={[styles.cardImage, { borderTopRightRadius: 38, borderTopLeftRadius: 38 }]} source={require("./assets/jogo4.jpg")} />
                <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, paddingLeft: 10 }]}>
                  Forza Horizon 5 tem lindos cenários e bastante conteúdo; veja destaques
                </Text>

              </TouchableOpacity>
              <TouchableOpacity style={[props.valor ? styles.cardark2 : styles.card2, { width: butao, flex: 1 }]}
                onPress={props.teste3}
              >
                <Image style={[styles.cardImage, { borderTopRightRadius: 12, borderTopLeftRadius: 12 }]} source={require("./assets/Back.jpg")} />
                <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, paddingLeft: 10 }]}>
                  Back 4 Blood ultrapassa número máximo de jogadores simultâneos de Left 4 Dead

                </Text>

              </TouchableOpacity>
            </ScrollView>
            <TouchableOpacity style={props.valor ? styles.proximodark : styles.proximolight} onPress={() => [
              Aumenta(),
              teste.current.scrollTo({
                x: (valor),
                y: 0,
                animated: true

              }),

            ]}>

              <Text style={props.valor ? styles.textob : styles.textol}>
                <Entypo name="chevron-thin-right" size={50} color={props.valor ? "#23E0D9" : "#DC1F26"} />
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={props.valor ? styles.cardark : styles.card}
              onPress={props.teste4}
            >
              <Image style={[styles.cardImage, { borderTopRightRadius: 12, borderTopLeftRadius: 12 }]} source={require("./assets/Fifa.jpg")} />
              <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, paddingLeft: 10 }]}>
                FIFA 22: usuários reclamam dos gráficos do jogo no Xbox Series S

              </Text>

            </TouchableOpacity>

            <TouchableOpacity style={props.valor ? styles.cardark : styles.card}
              onPress={props.teste5}
            >
              <Image style={[styles.cardImage, { borderTopRightRadius: 30, borderTopLeftRadius: 30 }]} source={require("./assets/Galaxy.jpg")} />
              <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, paddingLeft: 10 }]}>
                Confira os primeiro minutos de Marvel's Guardians of the Galaxy

              </Text>

            </TouchableOpacity>
            <TouchableOpacity style={props.valor ? styles.cardark : styles.card}
              onPress={props.teste6}
            >
              <Image style={[styles.cardImage, { borderTopRightRadius: 55, borderTopLeftRadius: 55 }]} source={require("./assets/halo.jpg")} />
              <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, paddingLeft: 10 }]}>
                ‘Halo’: serviços online da franquia no Xbox 360 serão fechados em janeiro de 2022

              </Text>

            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      </FadeInView>
    </ImageBackground>
  );

}


const TopTab = createMaterialTopTabNavigator();

function Not(props) {

  return (

    <TopTab.Navigator>
      <TopTab.Screen name='PC' component={props.pc} />
      <TopTab.Screen name='PS5' component={props.ps5} />
      <TopTab.Screen name='Xbox' component={props.xbox} />
      <TopTab.Screen name='Mobile' component={props.mobile} />
    </TopTab.Navigator>

  );
}


export { Pc, PS5, Xbox, Mobile, Not }