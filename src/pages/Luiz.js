
import React, { useState } from 'react'
import { View, Alert, Image, Button, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, FlatList, TextInput, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Entypo, Feather } from '@expo/vector-icons'








const TopTab = createMaterialTopTabNavigator();


function Contato(props) {
  return (
    <ScrollView>
      <SafeAreaView style={props.valor ? { flex: 1, backgroundColor: 'black' } : { flex: 1, backgroundColor: '#ecf0f1' }}>
        <View>
          <Text style={props.valor ? { marginHorizontal: 112, paddingBottom: 10, color: 'white' } : { marginHorizontal: 112, paddingBottom: 10, color: 'black' }} >Desenvolvedorres do projeto </Text>
          <TouchableOpacity style={props.valor ? styles.cartaoblack : styles.cartao}>
            <Image style={styles.fotos} source={require('./assets/Luiz.jpg')} />
            <Text style={props.valor ? styles.infoblack : styles.info} >  Luiz Henrique Rodrigues {"\n"}{"\n"} Whatsapp: (34) 9. 99871-3749{"\n"}{"\n"}e-Mail: luizrodrigues1@unipam.edu.br</Text>
          </TouchableOpacity>
          <TouchableOpacity style={props.valor ? styles.cartaoblack : styles.cartao}>
            <Image style={styles.fotos} source={require('./assets/img2.jpg')} />
            <Text style={props.valor ? styles.infoblack : styles.info} >  Hiury {"\n"}{"\n"} Whatsapp: (34) 9.8893-8608{"\n"}{"\n"}e-Mail: hiurylucas@unipam.edu.br</Text>
          </TouchableOpacity>
          <TouchableOpacity style={props.valor ? styles.cartaoblack : styles.cartao}>
            <Image style={styles.fotos} source={require('./assets/img3.jpg')} />
            <Text style={props.valor ? styles.infoblack : styles.info} >  Guilherme Antony {"\n"}{"\n"} Whatsapp: (34) 9.9906-9153{"\n"}{"\n"}e-Mail: guilhermeantony@unipam.edu.br</Text>
          </TouchableOpacity>
          <TouchableOpacity style={props.valor ? styles.cartaoblack : styles.cartao}>
            <Image style={styles.fotos} source={require('./assets/pedro1.jpg')} />
            <Text style={props.valor ? styles.infoblack : styles.info} >  Pedro  {"\n"}{"\n"} Whatsapp: (38) 9.8819-5386{"\n"}{"\n"}e-Mail: pedrovmo@unipam.edu.br</Text>
          </TouchableOpacity>
          <TouchableOpacity style={props.valor ? styles.cartaoblack : styles.cartao}>
            <Image style={styles.fotos} source={require('./assets/pedro2.jpg')} />
            <Text style={props.valor ? styles.infoblack : styles.info} >  Pedro Maciel{"\n"}{"\n"} Whatsapp: (38) 9.8834-9460{"\n"}{"\n"}e-Mail: pedromaciel@unipam.edu.br</Text>
          </TouchableOpacity>
          <TouchableOpacity style={props.valor ? styles.cartaoblack : styles.cartao}>
            <Image style={styles.fotos} source={require('./assets/img6.jpg')} />
            <Text style={props.valor ? styles.infoblack : styles.info} >  Lorenzo {"\n"}{"\n"} Whatsapp: (34) 9.8408-7080{"\n"}{"\n"}e-Mail: lorenzosilva@unipam.edu.br</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

function PcPersons(props) {
  return (
    <SafeAreaView style={props.valor ? { flex: 1, backgroundColor: 'black' } : { flex: 1, backgroundColor: '#ecf0f1' }}>
      <View>
        <Text style={props.valor ? { textAlign: 'center', paddingBottom: 10, paddingTop: 10, color: "white" } : { textAlign: 'center', paddingBottom: 10, paddingTop: 10, color: "black" }} >Conheça os personagens mais queridos dos games de PC</Text>
        <TouchableOpacity style={props.valor ? styles.cartaoblack : styles.cartao}>
          <Image style={styles.ftPerson} source={require('./assets/fortnitePerson.jpg')} />
          <Text style={props.valor ? styles.infoPersonblack : styles.infoPerson} >Nome: Agente Jonesy{"\n"}{"\n"}Jogo: Fortnite{"\n"}{"\n"}Plataforma: PC/ PS4/ XBOX</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 30 }} >
        <TouchableOpacity style={props.valor ? styles.personCardblack : styles.personCard}>
          <Image style={styles.ftPerson} source={require('./assets/geralt.jpeg')} />
          <Text style={props.valor ? styles.infoPersonblack : styles.infoPerson} >Nome: Geralt {"\n"}{"\n"}Jogo: The Witcher III{"\n"}{"\n"}Plataforma: PC/ PS4/ XBOX</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function PsPersons(props) {
  return (
    <SafeAreaView style={props.valor ? { flex: 1, backgroundColor: 'black' } : { flex: 1, backgroundColor: '#ecf0f1' }}>
      <View>
        <Text style={props.valor ? { textAlign: 'center', paddingBottom: 10, paddingTop: 10, color: "white" } : { textAlign: 'center', paddingBottom: 10, paddingTop: 10, color: "black" }} >Conheça os personagens mais queridos dos games de PS4</Text>
        <TouchableOpacity style={props.valor ? styles.personCardblack : styles.personCard}>
          <Image style={styles.ftPerson} source={require('./assets/kratos.jpg')} />
          <Text style={props.valor ? styles.infoPersonblack : styles.infoPerson} >Nome: Kratos {"\n"}{"\n"}Jogo: Franquia GOD OF WAR{"\n"}{"\n"}Plataforma: Playstation </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 30 }} >
        <TouchableOpacity style={props.valor ? styles.personCardblack : styles.personCard}>
          <Image style={styles.ftPerson} source={require('./assets/thelast.jpg')} />
          <Text style={props.valor ? styles.infoPersonblack : styles.infoPerson} >Nome: Ellie e Joel {"\n"}{"\n"}Jogo: The Last of Us{"\n"}{"\n"}Plataforma: Playstation</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function XboxPersons(props) {
  return (
    <SafeAreaView style={props.valor ? { flex: 1, backgroundColor: 'black' } : { flex: 1, backgroundColor: '#ecf0f1' }}>
      <View>
        <Text style={props.valor ? { textAlign: 'center', paddingBottom: 10, paddingTop: 10, color: "white" } : { textAlign: 'center', paddingBottom: 10, paddingTop: 10, color: "black" }} >Conheça os personagens mais queridos dos games de Xbox</Text>
        <TouchableOpacity style={props.valor ? styles.personCardblack : styles.personCard}>
          <Image style={styles.ftPerson} source={require('./assets/halo.jpg')} />
          <Text style={props.valor ? styles.infoPersonblack : styles.infoPerson} >Nome: Master Chief{"\n"}{"\n"}Jogo: Halo {"\n"}{"\n"}Plataforma: PC/ XBOX </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 30 }} >
        <TouchableOpacity style={props.valor ? styles.personCardblack : styles.personCard}>
          <Image style={styles.ftPerson} source={require('./assets/gears.jpg')} />
          <Text style={props.valor ? styles.infoPersonblack : styles.infoPerson} >Nome: Marcus Fenix {"\n"}{"\n"}Jogo: Franquia GEARS of WAR{"\n"}{"\n"}Plataforma: PC/ XBOX</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function MobilePersons(props) {
  return (
    <SafeAreaView style={props.valor ? { flex: 1, backgroundColor: 'black' } : { flex: 1, backgroundColor: '#ecf0f1' }}>
      <View>
        <Text style={props.valor ? { textAlign: 'center', paddingBottom: 10, paddingTop: 10, color: "white" } : { textAlign: 'center', paddingBottom: 10, paddingTop: 10, color: "black" }} >Conheça os personagens mais queridos dos games de Mobile</Text>
        <TouchableOpacity style={props.valor ? styles.personCardblack : styles.personCard}>
          <Image style={styles.ftPerson} source={require('./assets/alok.jpg')} />
          <Text style={props.valor ? styles.infoPersonblack : styles.infoPerson} >Nome: Alok {"\n"}{"\n"}Jogo: Freefire {"\n"}{"\n"}Plataforma: Mobile </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 30 }} >
        <TouchableOpacity style={props.valor ? styles.personCardblack : styles.personCard}>
          <Image style={styles.ftPerson} source={require('./assets/chrono.jpg')} />
          <Text style={props.valor ? styles.infoPersonblack : styles.infoPerson} >Nome: Chrono {"\n"}{"\n"}Jogo: Freefire{"\n"}{"\n"}Plataforma: Mobile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function Personagens(props) {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name='Personagens de PC' component={props.pcPersons2} />
      <TopTab.Screen name='Personagens de PLAYSTATION' component={props.PsPersons2} />
      <TopTab.Screen name='Personagens de XBOX' component={props.XboxPersons2} />
      <TopTab.Screen name='Personagens de Mobile' component={props.MobilePersons2} />
    </TopTab.Navigator>
  );
}


function PcGames(props) {
  return (
    <SafeAreaView style={props.valor ? { justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: 'black' } : { justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: '#ecf0f1' }}>
      <View>
        <Text style={props.valor ? { marginHorizontal: 105, paddingBottom: 20, color: "white" } : { marginHorizontal: 105, paddingBottom: 20, color: "black" }} >Jogos mais jogados em 2021... </Text>
        <TouchableOpacity style={props.valor ? styles.cardGamesblack : styles.cardGames}>
          <Image style={styles.fotos} source={require('./assets/mine.png')} />
          <Text style={props.valor ? styles.infoblack : styles.info} >  1° -- Minecraft {"\n"}{"\n"} 140 milhões de jogadores simultâneos </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[props.valor ? styles.cardGamesblack : styles.cardGames]}>
          <Image style={styles.fotos} source={require('./assets/fortnite.png')} />
          <Text style={props.valor ? styles.infoblack : styles.info} >  2° -- Fortnite {"\n"}{"\n"} 12.3 Milhões de jogadores simultâneos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={props.valor ? styles.cardGamesblack : styles.cardGames}>
          <Image style={styles.fotos} source={require('./assets/lol.png')} />
          <Text style={props.valor ? styles.infoblack : styles.info} >  3° -- League of Legends {"\n"}{"\n"}  8 milhões de jogadores simultâneos    </Text>
        </TouchableOpacity>
        <TouchableOpacity style={props.valor ? styles.cardGamesblack : styles.cardGames}>
          <Image style={styles.fotos} source={require('./assets/valorant.png')} />
          <Text style={props.valor ? styles.infoblack : styles.info} >  4° -- Valorant {"\n"}{"\n"} 13 milhões de jogadores simultâneos   </Text>
        </TouchableOpacity>
        <TouchableOpacity style={props.valor ? styles.cardGamesblack : styles.cardGames}>
          <Image style={styles.fotos} source={require('./assets/cod.png')} />
          <Text style={props.valor ? styles.infoblack : styles.info} >  5° -- Call of Dutty: Warzone {"\n"}{"\n"} 100 milhões de jogadores simultâneos </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function PsGmaes(props) {
  return (
    <SafeAreaView style={props.valor ? { justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: 'black' } : { justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: '#ecf0f1' }}>
      <View>
        <Text style={props.valor ? { marginHorizontal: 105, paddingBottom: 20, color: "white" } : { marginHorizontal: 105, paddingBottom: 20, color: "black" }} >Jogos mais jogados em 2021... </Text>
        <TouchableOpacity style={props.valor ? styles.cardGamesblack : styles.cardGames}>
          <Image style={styles.fotos} source={require('./assets/gtav.png')} />
          <Text style={props.valor ? styles.infoblack : styles.info} >  1° -- Grand Theft Auto V {"\n"}{"\n"} 140 milhões de jogadores simultâneos </Text>
        </TouchableOpacity>
        <TouchableOpacity style={props.valor ? styles.cardGamesblack : styles.cardGames}>
          <Image style={styles.fotos} source={require('./assets/fortnite.png')} />
          <Text style={props.valor ? styles.infoblack : styles.info} >  2° -- Fortnite {"\n"}{"\n"} 12.3 Milhões de jogadores simultâneos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={props.valor ? styles.cardGamesblack : styles.cardGames}>
          <Image style={styles.fotos} source={require('./assets/apex.png')} />
          <Text style={props.valor ? styles.infoblack : styles.info} >  3° -- Apex Legends {"\n"}{"\n"}  8 milhões de jogadores simultâneos    </Text>
        </TouchableOpacity>
        <TouchableOpacity style={props.valor ? styles.cardGamesblack : styles.cardGames}>
          <Image style={styles.fotos} source={require('./assets/fifa.png')} />
          <Text style={props.valor ? styles.infoblack : styles.info} >  4° -- FIFA 21 {"\n"}{"\n"} 13 milhões de jogadores simultâneos   </Text>
        </TouchableOpacity>
        <TouchableOpacity style={props.valor ? styles.cardGamesblack : styles.cardGames}>
          <Image style={styles.fotos} source={require('./assets/codmw.png')} />
          <Text style={props.valor ? styles.infoblack : styles.info} >  5° -- Call of Duty: Modern Warfare {"\n"}{"\n"} 10 milhões de jogadores simultâneos   </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function XboxGames(props) {
  return (
    <SafeAreaView style={props.valor ? { justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: 'black' } : { justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: '#ecf0f1' }}>
      <View>
        <Text style={props.valor ? { marginHorizontal: 105, paddingBottom: 20, color: "white" } : { marginHorizontal: 105, paddingBottom: 20, color: "black" }} >Jogos mais jogados em 2021... </Text>
        <TouchableOpacity style={props.valor ? styles.cardGamesblack : styles.cardGames}>
          <Image style={styles.fotos} source={require('./assets/forza.png')} />
          <Text style={props.valor ? styles.infoblack : styles.info} >  1° -- Forza Horizon 4 {"\n"}{"\n"} 14 milhões de jogadores simultâneos   </Text>
        </TouchableOpacity>
        <TouchableOpacity style={props.valor ? styles.cardGamesblack : styles.cardGames}>
          <Image style={styles.fotos} source={require('./assets/fortnite.png')} />
          <Text style={props.valor ? styles.infoblack : styles.info} >  2° -- Fortnite {"\n"}{"\n"} 12.3 Milhões de jogadores simultâneos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={props.valor ? styles.cardGamesblack : styles.cardGames}>
          <Image style={styles.fotos} source={require('./assets/fifa22.png')} />
          <Text style={props.valor ? styles.infoblack : styles.info} >  3° -- Fifa 22 {"\n"}{"\n"}  15 milhões de jogadores simultâneos  </Text>
        </TouchableOpacity>
        <TouchableOpacity style={props.valor ? styles.cardGamesblack : styles.cardGames}>
          <Image style={styles.fotos} source={require('./assets/red2.png')} />
          <Text style={props.valor ? styles.infoblack : styles.info} >  4° -- Red Dead Redeption 2 {"\n"}{"\n"} 9 milhões de jogadores                          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={props.valor ? styles.cardGamesblack : styles.cardGames}>
          <Image style={styles.fotos} source={require('./assets/dead.png')} />
          <Text style={props.valor ? styles.infoblack : styles.info} >  5° -- Dead By Daylight {"\n"}{"\n"} 10 milhões de jogadores simultâneos   </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function MobileGames(props) {
  return (
    <SafeAreaView style={props.valor ? { justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: 'black' } : { justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: '#ecf0f1' }}>
      <View>
        <Text style={props.valor ? { marginHorizontal: 105, paddingBottom: 20, color: "white" } : { marginHorizontal: 105, paddingBottom: 20, color: "black" }} >Jogos mais jogados em 2021... </Text>
        <TouchableOpacity style={props.valor ? styles.cardGamesblack : styles.cardGames}>
          <Image style={styles.fotos} source={require('./assets/free.png')} />
          <Text style={props.valor ? styles.infoblack : styles.info} >  1° -- Free Fire {"\n"}{"\n"} 12 milhões de jogadores simultâneos  </Text>
        </TouchableOpacity>
        <TouchableOpacity style={props.valor ? styles.cardGamesblack : styles.cardGames}>
          <Image style={styles.fotos} source={require('./assets/pubg.png')} />
          <Text style={props.valor ? styles.infoblack : styles.info} >  2° -- PUBG Mobile {"\n"}{"\n"} 6 Milhões de jogadores simultâneos    </Text>
        </TouchableOpacity>
        <TouchableOpacity style={props.valor ? styles.cardGamesblack : styles.cardGames}>
          <Image style={styles.fotos} source={require('./assets/sub.png')} />
          <Text style={props.valor ? styles.infoblack : styles.info} >  3° -- Subway Surfres {"\n"}{"\n"}  3 milhões de jogadores                        </Text>
        </TouchableOpacity>
        <TouchableOpacity style={props.valor ? styles.cardGamesblack : styles.cardGames}>
          <Image style={styles.fotos} source={require('./assets/clash.png')} />
          <Text style={props.valor ? styles.infoblack : styles.info} >  4° -- Clash Royale {"\n"}{"\n"} 5 milhões de jogadores simultâneos    </Text>
        </TouchableOpacity>
        <TouchableOpacity style={props.valor ? styles.cardGamesblack : styles.cardGames}>
          <Image style={styles.fotos} source={require('./assets/hellix.png')} />
          <Text style={props.valor ? styles.infoblack : styles.info} >  5° -- Helix Jump {"\n"}{"\n"} 2 milhões de jogadores                          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function Games(props) {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name='PC (WINDOWS)' component={props.PcGames2} />
      <TopTab.Screen name='PLAYSTATION' component={props.PsGmaes2} />
      <TopTab.Screen name='MICROSSOFT XBOX' component={props.XboxGames2} />
      <TopTab.Screen name='MOBILE GAMES' component={props.MobileGames2} />
    </TopTab.Navigator>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7D0000',
  },
  title: {
    color: '#FFF',
    fontSize: 50,
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginTop: 100,
  },
  subtitle: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  entrar: {
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 200,
    backgroundColor: '#fff',
    borderRadius: 30,
  },
  cadastrar: {
    flex: 1,
    backgroundColor: '#7D0000'

  },
  imagem: {
    resizeMode: "stretch",
    width: 350,
    height: 175,
    marginBottom: 20

  },
  titulo: {
    color: 'white',
    fontSize: 40,
    marginBottom: 20,
    marginTop: 20
  },
  buttom: {
    color: 'white',
    width: '80%',
    borderRadius: 10,
    height: 40,
    marginTop: 20,
    backgroundColor: '#22E0D8'

  },
  textInput: {
    fontSize: 18,
    color: 'black',
    width: '80%',
    borderRadius: 10,
    height: 40,
    backgroundColor: 'white',
    marginBottom: 20,
    paddingLeft: 10
  },
  subt: {
    color: 'white',
    marginRight: 150,
    fontSize: 20
  },
  textobut: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: '500'
  },
  cardText: {
    paddingLeft: 10,
    fontSize: 30,
    color: 'black'

  },
  card: {
    backgroundColor: "#DDDDDD",
    marginBottom: 5,
    marginLeft: '2%',
    width: '96%',
    shadowColor: '#22E0D8',
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3
    }
  },
  lista: {
    backgroundColor: '#333333',
    color: '#FFF',
    marginHorizontal: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  cartao: {
    backgroundColor: '#fff',
    marginBottom: 5,
    marginLeft: '2%',
    width: '96%',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOpacity: 1,
    padding: 10,
    shadowOffset: {
      width: 3,
      height: 3,
    }
  },
  cartaoblack: {
    backgroundColor: '#333333',
    marginBottom: 5,
    marginLeft: '2%',
    width: '96%',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOpacity: 1,
    padding: 10,
    shadowOffset: {
      width: 3,
      height: 3,
    }
  },
  info: {
    fontStyle: 'italic',
    marginLeft: 7,
    marginTop: 10,
    color: '#121212',
    paddingLeft: 20,
  },
  infoblack: {
    fontStyle: 'italic',
    marginLeft: 7,
    marginTop: 10,
    color: '#fff',
    paddingLeft: 20,
  },
  fotos: {
    width: 80,
    height: 80,
    resizeMode: 'stretch',
    borderRadius: 20,
    flexDirection: 'row',

  },
  input: {
    fontSize: 18,
    marginHorizontal: 20,
    backgroundColor: '#FFF',
    padding: 10,
    height: 50,
    color: '#000',
    borderRadius: 10,
  },
  cadastro: {
    marginTop: 20,
  },
  textocadastro: {
    color: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 10,
    marginTop: 30,
    fontSize: 20,
  },
  entrarcad: {
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 180,
    backgroundColor: '#fff',
    borderRadius: 30,
    marginHorizontal: 140,
  },
  personCard: {
    marginTop: 10,
    backgroundColor: '#fff',
    marginLeft: '2%',
    width: '96%',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOpacity: 1,
    padding: 10,
    shadowOffset: {
      width: 3,
      height: 3,
    }
  },
  personCardblack: {
    marginTop: 10,
    backgroundColor: '#333333',
    marginLeft: '2%',
    width: '96%',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOpacity: 1,
    padding: 10,
    shadowOffset: {
      width: 3,
      height: 3,
    }
  },
  ftPerson: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    flexDirection: 'row',
  },
  infoPerson: {
    fontStyle: 'italic',
    marginTop: 55,
    color: '#121212',
    paddingLeft: 5,
  },
  infoPersonblack: {
    fontStyle: 'italic',
    marginTop: 55,
    color: 'white',
    paddingLeft: 5,
  },
  cardGames: {
    backgroundColor: '#fff',
    marginBottom: 5,
    marginLeft: '4%',
    width: '96%',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOpacity: 1,
    padding: 10,
    shadowOffset: {
      width: 3,
      height: 3,
    }
  },
  cardGamesblack: {
    backgroundColor: '#333333',
    marginBottom: 5,
    marginLeft: '4%',
    width: '96%',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOpacity: 1,
    padding: 10,
    shadowOffset: {
      width: 3,
      height: 3,
    }
  },
});

export { Games, Contato, Personagens, MobilePersons, PcPersons, XboxPersons, PsPersons, PcGames, PsGmaes, MobileGames, XboxGames }




