import 'react-native-gesture-handler';
import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { LinearGradient } from 'expo-linear-gradient';

const Tab = createMaterialTopTabNavigator();

function PlaystationScreen({ navigation }) {
  return (
    <ScrollView>
      <View>
        <ImageBackground source={{ uri: 'https://gmedia.playstation.com/is/image/SIEPDC/astro-bot-rescue-mission-wallpaper-01-en-us-06jul20?$native$' }} style={styles.background} />
        <View style={styles.container, { marginTop: 15, marginBottom: 35 }}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Especificações')}>
            <ImageBackground source={{ uri: 'https://files.tecnoblog.net/meiobit/wp-content/uploads/2018/10/20181009ps5-768x407.jpg' }} resizeMode="cover" style={styles.cardImage} imageStyle={{ borderRadius: 23 }} />
            <LinearGradient colors={['transparent', 'transparent', 'black']} style={styles.gradient} />
          </TouchableOpacity>
          <Text style={styles.cardText}>Especificações do PS5</Text>

        </View>

        <View style={styles.container, { marginTop: 10, marginBottom: 35 }}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Controle')}>
            <ImageBackground source={{ uri: 'https://t2.tudocdn.net/573428?w=1200&h=900' }} resizeMode="cover" style={styles.cardImage} imageStyle={{ borderRadius: 23 }} />
            <LinearGradient colors={['transparent', 'transparent', 'black']} style={styles.gradient} />
          </TouchableOpacity>
          <Text style={styles.cardText}>Controle do PS5</Text>
        </View>

        <View style={styles.container, { marginTop: 10, marginBottom: 35 }}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Gráficos')}>
            <ImageBackground source={{ uri: 'https://psverso.com.br/wp-content/uploads/2020/10/marvels-spider-man-remasterizado-ray-tracing-1024x576.jpg' }} resizeMode="cover" style={styles.cardImage} imageStyle={{ borderRadius: 23 }} />
            <LinearGradient colors={['transparent', 'transparent', 'black']} style={styles.gradient} />
          </TouchableOpacity>
          <Text style={styles.cardText}>Gráficos nos Jogos</Text>
        </View>

        <View style={styles.container, { marginTop: 10, marginBottom: 35 }}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Evolução PS")}>
            <ImageBackground source={{ uri: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/2c0fa2e1-ec30-4ff2-95fb-92230e028788.__CR0,0,970,600_PT0_SX970_V1___.jpg' }} resizeMode="cover" style={styles.cardImage} imageStyle={{ borderRadius: 23 }} />
            <LinearGradient colors={['transparent', 'transparent', 'black']} style={styles.gradient} />
          </TouchableOpacity>
          <Text style={styles.cardText}>Evolução</Text>
        </View>

      </View>
    </ScrollView>
  );
}

function XboxScreen({ navigation }) {
  return (
    <ScrollView>
      <View>
        <ImageBackground source={{ uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/63d95f7a-d6bf-4a9b-a80a-6fc8e684ed23/d7fj4r2-0d5e1fd7-4033-4a2f-855d-b51757911eed.png/v1/fill/w_1192,h_670,q_70,strp/green_explosion__by_rapturedreaper_d7fj4r2-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzYzZDk1ZjdhLWQ2YmYtNGE5Yi1hODBhLTZmYzhlNjg0ZWQyM1wvZDdmajRyMi0wZDVlMWZkNy00MDMzLTRhMmYtODU1ZC1iNTE3NTc5MTFlZWQucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.A67EYiuG_Alx8Qsno9MMdkq2d1ueel2i0zDap0mEPp4' }} style={styles.background} />

        <View style={styles.container, { marginTop: 15, marginBottom: 35 }}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Xbox Series X')}>
            <ImageBackground source={{ uri: 'https://ambrosia.com.br/wp-content/uploads/2021/01/Microsoft-Xbox-Series-X-AMD-Games-Noticias-Ambrosia.jpg' }} resizeMode="cover" style={styles.cardImage} imageStyle={{ borderRadius: 23 }} />
            <LinearGradient colors={['transparent', 'transparent', '#1D1F1F']} style={styles.gradient} />
          </TouchableOpacity>
          <Text style={styles.cardText2}>Xbox Series X</Text>
        </View>


        <View>
          <View style={styles.container, { marginTop: 15, marginBottom: 35 }}>
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Xbox Series S')}>
              <ImageBackground source={{ uri: 'https://s2.glbimg.com/4D6KIv7aj6AbNpyojwUHY5003DY=/0x0:1200x675/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/d/e/hfuFVBQbAWyZelT1QLsA/xbox.jpg' }} resizeMode="cover" style={styles.cardImage} imageStyle={{ borderRadius: 23 }} />
              <LinearGradient colors={['transparent', 'transparent', '#1D1F1F']} style={styles.gradient} />
            </TouchableOpacity>
            <Text style={styles.cardText2}>Xbox Series S</Text>
          </View>
        </View>

        <View>
          <View style={styles.container, { marginTop: 15, marginBottom: 35 }}>
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Controle Xbox Series')}>
              <ImageBackground source={{ uri: 'https://compass-ssl.xbox.com/assets/84/f3/84f33bea-0f8d-4332-bbad-402c712f5378.jpg?n=111101_Gallery-0_1_1350x759.jpg' }} resizeMode="cover" style={styles.cardImage} imageStyle={{ borderRadius: 23 }} />
              <LinearGradient colors={['transparent', 'transparent', '#1D1F1F']} style={styles.gradient} />
            </TouchableOpacity>
            <Text style={styles.cardText2}>Controle Xbox Series</Text>
          </View>
        </View>

        <View>
          <View style={styles.container, { marginTop: 15, marginBottom: 35 }}>
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Evolução Xbox')}>
              <ImageBackground source={{ uri: 'https://s2.glbimg.com/4D6KIv7aj6AbNpyojwUHY5003DY=/0x0:1200x675/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/d/e/hfuFVBQbAWyZelT1QLsA/xbox.jpg' }} resizeMode="cover" style={styles.cardImage} imageStyle={{ borderRadius: 23 }} />
              <LinearGradient colors={['transparent', 'transparent', '#1D1F1F']} style={styles.gradient} />
            </TouchableOpacity>
            <Text style={styles.cardText2}>Evolução Xbox</Text>
          </View>
        </View>

      </View>

    </ScrollView>
  );
}

function NintendoScreen({ navigation }) {
  return (
    <ScrollView>
      <View>
        <ImageBackground source={{ uri: 'https://media.istockphoto.com/photos/red-background-vertical-picture-id856556290?k=20&m=856556290&s=170667a&w=0&h=Ll7tZffsudZgCUWvP14Qj6wIY01koga_7Y-2EPjrV1Q=' }} style={styles.background} />

        <View style={styles.container, { marginTop: 15, marginBottom: 35 }}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Ficha Técnica')}>
            <ImageBackground source={{ uri: 'https://i.redd.it/u09c8lh3ap071.png' }} resizeMode="cover" style={styles.cardImage} imageStyle={{ borderRadius: 23 }} />
            <LinearGradient colors={['transparent', 'transparent', '#000145']} style={styles.gradient} />
          </TouchableOpacity>
          <Text style={styles.cardText3}>Ficha Técnica</Text>
        </View>

        <View style={styles.container, { marginTop: 15, marginBottom: 35 }}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Controle Switch')}>
            <ImageBackground source={{ uri: 'https://www.saudosonerd.com.br/wp-content/uploads/2019/07/1-2.jpg' }} resizeMode="cover" style={styles.cardImage} imageStyle={{ borderRadius: 23 }} />
            <LinearGradient colors={['transparent', 'transparent', '#000145']} style={styles.gradient} />
          </TouchableOpacity>
          <Text style={styles.cardText3}>Controle Switch</Text>
        </View>

        <View style={styles.container, { marginTop: 15, marginBottom: 35 }}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Evolução Switch')}>
            <ImageBackground source={{ uri: 'https://turbologo.com/articles/wp-content/uploads/2019/11/Nintendo-Handheld-Evolution.png' }} resizeMode="cover" style={styles.cardImage} imageStyle={{ borderRadius: 23 }} />
            <LinearGradient colors={['transparent', 'transparent', '#000145']} style={styles.gradient} />
          </TouchableOpacity>
          <Text style={styles.cardText3}>Evolução Switch</Text>
        </View>

      </View>
    </ScrollView>
  );
}


export function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Playstation" component={PlaystationScreen} />
      <Tab.Screen name="Xbox" component={XboxScreen} />
      <Tab.Screen name="Switch" component={NintendoScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardText: {
    fontSize: 25,
    color: '#FFF',
    textAlign: 'center',
    marginTop: 160,
    textShadowColor: 'rgba(0, 0, 0, 0.9)',
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 5,
    marginLeft: 20,
    marginRight: 20,
    position: 'relative'
  },
  cardText2: {
    fontSize: 25,
    color: '#DCF6BD',
    textAlign: 'center',
    marginTop: 160,
    textShadowColor: 'rgba(0, 0, 0, 0.9)',
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 5,
    marginLeft: 20,
    marginRight: 20,
    position: 'relative'
  },
  cardText3: {
    fontSize: 25,
    color: '#FF002D',
    textAlign: 'center',
    marginTop: 160,
    textShadowColor: 'rgba(0, 0, 0, 0.9)',
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 5,
    marginLeft: 20,
    marginRight: 20,
    position: 'relative'
  },
  card: {
    position: 'absolute',
    marginLeft: '3.5%',
    marginRight: '10%',
    width: '95%',
    height: 220,
    borderRadius: 23,
  },
  gradient: {
    position: 'absolute',
    marginRight: '10%',
    width: '101.1%',
    height: 220,
    borderRadius: 23,
  },
  cardImage: {
    flex: 1,
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  background: {
    resizeMode: 'cover',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
  }
})

