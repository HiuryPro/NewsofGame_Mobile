import React from 'react'
import { DrawerContentScrollView, DrawerItemList, DrawerItem, } from '@react-navigation/drawer';
import { View, Text, Switch, Image, Alert, TouchableOpacity } from 'react-native'
import { styles } from './Const'
import { FontAwesome } from '@expo/vector-icons';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView  {...props}>
      <View>
        <Image style={styles.imageDrawer} source={props.valor ? require("./assets/trans-logo-black.png") : require("./assets/trans-logo-light.png")} />
      </View>
      <View style={{ marginLeft: 15, flexDirection: 'row', marginTop: 10 }}>
        <FontAwesome style={{ flexDirection: "row", justifyContent: "flex-start" }} name="user-circle-o" size={28} color={props.valor ? 'white' : 'black'} />
        <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 16, marginTop: 5 }]}>
          {"\t"}{props.texto}
        </Text>
        <TouchableOpacity style={{ marginTop: 6, marginLeft: 20 }} onPress={() => {
          props.Texto2("Não está logado")
          alert("Você se desconectou de sua conta");
        }} >
          <Text style={props.valor ? { color: "#23E0D9", fontSize: 16 } : { color: "#DC1F26", fontSize: 16 }}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>

      <DrawerItemList {...props} />
      <View>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { marginLeft: 14, paddingBottom: 5, paddingTop: 10 }]}> Black Theme </Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#B2B2B2", true: "#002824" }}
          thumbColor={props.valor ? "#008275" : "#ECECEC"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={props.teste}
          value={props.valor}
        />
      </View>


    </DrawerContentScrollView>
  );
}


function CustomDrawerContent2(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        focused
        activeTintColor={props.color}
        labelStyle={{ marginLeft: 25, textAlign: 'center' }}
        label="Tela de Noticias"
        onPress={props.not}
      />
      <Text style={[props.valor ? styles.textblack : styles.textlight, { textAlign: 'center', fontSize: 20, margin: 10 }]}>PC</Text>
      <DrawerItem
        focused
        activeTintColor={props.color}
        label="Call of Duty: Vanguard"
        onPress={props.new1}
      />
      <DrawerItem
        focused
        activeTintColor={props.color}
        label="The Dark Pictures Anthology"
        onPress={props.new5}
      />
      <DrawerItem
        focused
        activeTintColor={props.color}
        label="Tom Clancy's XDefiant"
        onPress={props.new11}
      />
      <DrawerItem
        focused
        activeTintColor={props.color}
        label="Ghost Recon Frontline"
        onPress={props.new13}
      />
      <DrawerItem
        focused
        activeTintColor={props.color}
        label="GTA: Trilogy"
        onPress={props.new14}
      />
      <DrawerItem
        focused
        activeTintColor={props.color}
        label="God of War no Pc"
        onPress={props.new21}
      />
      <Text style={[props.valor ? styles.textblack : styles.textlight, { textAlign: 'center', fontSize: 20, margin: 10 }]}>PS5</Text>
      <DrawerItem
        focused
        activeTintColor={props.color}
        label="God of War: Ragnarok"
        onPress={props.new2}
      />
      <DrawerItem
        focused
        activeTintColor={props.color}
        label="1 - Far Cry 6"
        onPress={props.new6}
      />
      <DrawerItem
        focused
        activeTintColor={props.color}
        label="2 - Far Cry 6"
        onPress={props.new9}
      />
      <DrawerItem
        focused
        activeTintColor={props.color}
        label="Ride 4"
        onPress={props.new15}
      />
      <DrawerItem
        focused
        activeTintColor={props.color}
        label="The Touryst"
        onPress={props.new16}
      />
      <DrawerItem
        focused
        activeTintColor={props.color}
        label="Among Us"
        onPress={props.new22}
      />
      <Text style={[props.valor ? styles.textblack : styles.textlight, { textAlign: 'center', fontSize: 20, margin: 10 }]}>Xbox</Text>
      <DrawerItem
        focused
        activeTintColor={props.color}
        label="Marvel’s Avengers"
        onPress={props.new4}
      />
      <DrawerItem
        focused
        activeTintColor={props.color}
        label="Forza Horizon 5"
        onPress={props.new7}
      />
      <DrawerItem
        focused
        activeTintColor={props.color}
        label="Back 4 Blood"
        onPress={props.new12}
      />
      <DrawerItem
        focused
        activeTintColor={props.color}
        label="FIFA 22"
        onPress={props.new18}
      />
      <DrawerItem
        focused
        activeTintColor={props.color}
        label="Marvel's Guardians of the Galaxy"
        onPress={props.new20}
      />
      <DrawerItem
        focused
        activeTintColor={props.color}
        label="Halo"
        onPress={props.new24}
      />
      <Text style={[props.valor ? styles.textblack : styles.textlight, { textAlign: 'center', fontSize: 20, margin: 10 }]}>Mobile</Text>
      <DrawerItem
        focused
        activeTintColor={props.color}
        label="Sky Warriors"
        onPress={props.new3}
      />
      <DrawerItem
        focused
        activeTintColor={props.color}
        label="Free Fire Max"
        onPress={props.new8}
      />
      <DrawerItem
        focused
        activeTintColor={props.color}
        label="Wild Rift"
        onPress={props.new10}
      />
      <DrawerItem
        focused
        activeTintColor={props.color}
        label="Genshin Impact"
        onPress={props.new17}
      />
      <DrawerItem
        focused
        activeTintColor={props.color}
        label="NBA NOW 22"
        onPress={props.new19}
      />
      <DrawerItem
        focused
        activeTintColor={props.color}
        label="PUBG New State"
        onPress={props.new23}
      />
    </DrawerContentScrollView>
  );
}

export { CustomDrawerContent, CustomDrawerContent2 }
