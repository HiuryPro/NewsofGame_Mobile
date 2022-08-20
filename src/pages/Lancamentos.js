import React, { useRef, useEffect, useState } from 'react';
// @ts-ignore
import { Text, TouchableOpacity, View, Image, StyleSheet, Animated, FlatList, ScrollView, ImageBackground, Dimensions } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './Const'
import { FadeInView } from './Teste'
import { Entypo, Feather } from '@expo/vector-icons'
import { WebView } from 'react-native-webview'

function Lancamentos(props) {

    return (

        <ScrollView nestedScrollEnabled={true}>
            <View style={[props.valor ? styles.lancab : styles.lancal, { paddingBottom: 20, marginBottom: 40 }]}>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginLeft: 8, marginRight: 8 }]}>
                    FIFA 22
                </Text>
                <View style={[props.valor ? style.black : style.white, { height: 230, marginTop: 20, marginLeft: 5, marginRight: 5, }]}>
                    <WebView
                        style={{ alignSelf: 'center', width: '100%' }}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        source={{ uri: "https://www.youtube.com/embed/SYsi5QuOJNE" }}
                    />
                </View>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginLeft: 8, marginRight: 8 }]}>
                    Informações
                </Text>
                <ScrollView nestedScrollEnabled={true} style={{ height: 150, marginTop: 15 }} >

                    <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                        Abrindo as grandes estreias, o simulador de futebol da Electronic Arts chega para mais uma edição. Neste ano, as principais novidades
                        são a nova tecnologia de captura de movimentos Hypermotion, a criação de clubes para as carreiras e a adição dos elencos femininos
                        no Pro Clubes.
                    </Text>
                    <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                        FIFA 22 chegou em 1º de outubro para PC, PlayStation 4, PlayStation 5, Switch, Xbox One e Xbox Series X e Series S
                    </Text>
                </ScrollView>


            </View>
            <View style={[props.valor ? styles.lancab : styles.lancal, { paddingBottom: 20, marginBottom: 40 }]}>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginLeft: 8, marginRight: 8 }]}>
                    Alan Wake Remastered
                </Text>
                <View style={[props.valor ? style.black : style.white, { height: 230, marginTop: 20, marginLeft: 5, marginRight: 5, }]}>
                    <WebView
                        style={{ alignSelf: 'center', width: '100%' }}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        source={{ uri: "https://www.youtube.com/embed/mRVBZC-RJF0" }}
                    />
                </View>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginLeft: 8, marginRight: 8 }]}>
                    Informações
                </Text>
                <ScrollView nestedScrollEnabled={true} style={{ height: 150, marginTop: 15 }} >

                    <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                        A versão remasterizada do aclamado exclusivo de Xbox 360, lançado em 2010, será produzida pela Remedy Entertainment
                        e publicada pela Epic Games Publishing. O game terá gráficos em 4K e inclui também as expansões The Signal e
                        The Writer. No papel do escritor Alan Wake, o jogador encontra páginas de uma história de terror escritas por
                        ele mesmo. Sem se lembrar de tê-las escrito, o protagonista começa a questionar sua própria sanidade.
                    </Text>
                    <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                        Alan Wake Remastered será lançou em 5 de outubro para PC, PS4, PS5, Xbox One e Xbox Series X|S.
                    </Text>
                </ScrollView>


            </View>
            <View style={[props.valor ? styles.lancab : styles.lancal, { paddingBottom: 20, marginBottom: 40 }]}>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginLeft: 8, marginRight: 8 }]}>
                    Far Cry 6
                </Text>
                <View style={[props.valor ? style.black : style.white, { height: 230, marginTop: 20, marginLeft: 5, marginRight: 5, }]}>
                    <WebView
                        style={{ alignSelf: 'center', width: '100%' }}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        source={{ uri: "https://www.youtube.com/embed/GVr5AjHasEs" }}
                    />
                </View>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginLeft: 8, marginRight: 8 }]}>
                    Informações
                </Text>
                <ScrollView nestedScrollEnabled={true} style={{ height: 150, marginTop: 15 }} >

                    <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                        O novo jogo da franquia será ambientado em Yara, uma ilha caribenha onde um grupo luta para derrubar o
                        ditador Antón Castillo (Giancarlo Esposito). O jogador controlará a combatente Dani Rojas, em uma jornada
                        típica do FPS da Ubisoft. O game de ação em mundo aberto foi revelado em julho de 2020, mas sofreu adiamentos desde então.
                    </Text>
                    <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                        Far Cry 6 chega em 7 de outubro para Amazon Luna, PC, PS4, PS5, Stadia, Xbox One e Series X|S.
                    </Text>
                </ScrollView>


            </View>
            <View style={[props.valor ? styles.lancab : styles.lancal, { paddingBottom: 20, marginBottom: 40 }]}>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginLeft: 8, marginRight: 8 }]}>
                    Metroid Dread
                </Text>
                <View style={[props.valor ? style.black : style.white, { height: 230, marginTop: 20, marginLeft: 5, marginRight: 5, }]}>
                    <WebView
                        style={{ alignSelf: 'center', width: '100%' }}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        source={{ uri: "https://www.youtube.com/embed/V_XnbTayTH4" }}
                    />
                </View>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginLeft: 8, marginRight: 8 }]}>
                    Informações
                </Text>
                <ScrollView nestedScrollEnabled={true} style={{ height: 150, marginTop: 15 }} >

                    <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                        Em 19 anos da franquia, Samus Aran retorna para uma história inédita de Metroid. Anunciado durante a
                        E3 2021, o game se passa após os eventos de Metroid Fusion, de 2002, quando a protagonista aterrissa
                        no planeta ZDR para investigar transmissões misteriosas enviadas à federação galáctica.
                    </Text>
                    <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                        Metroid Dread chegou exclusivamente para o Nintendo Switch em 8 de outubro.
                    </Text>
                </ScrollView>


            </View>
            <View style={[props.valor ? styles.lancab : styles.lancal, { paddingBottom: 20, marginBottom: 40 }]}>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginLeft: 8, marginRight: 8 }]}>
                    Back 4 Blood
                </Text>
                <View style={[props.valor ? style.black : style.white, { height: 230, marginTop: 20, marginLeft: 5, marginRight: 5, }]}>
                    <WebView
                        style={{ alignSelf: 'center', width: '100%' }}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        source={{ uri: "https://www.youtube.com/embed/piY-dwt4eCw" }}
                    />
                </View>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginLeft: 8, marginRight: 8 }]}>
                    Informações
                </Text>
                <ScrollView nestedScrollEnabled={true} style={{ height: 150, marginTop: 15 }} >

                    <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                        O novo FPS de sobrevivência multiplayer com zumbis da Turtle Rock Studios, equipe responsável por Left 4 Dead
                        , foi anunciado em 2019 e, desde então, já passou por períodos de testes entre os jogadores. Com diferentes
                        modos de jogo, o lançamento promete reviver um gênero muito querido pelos fãs. Será que vai dar certo?
                    </Text>
                    <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                        Back 4 Blood foi lançado em 12 de outubro para PC, PS4 e PS5, Xbox One e Series X|S. O game também estará no Game Pass já na estreia.
                    </Text>
                </ScrollView>


            </View>
            <View style={[props.valor ? styles.lancab : styles.lancal, { paddingBottom: 20, marginBottom: 40 }]}>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginLeft: 8, marginRight: 8 }]}>
                    Demon Slayer
                </Text>
                <View style={[props.valor ? style.black : style.white, { height: 230, marginTop: 20, marginLeft: 5, marginRight: 5, }]}>
                    <WebView
                        style={{ alignSelf: 'center', width: '100%' }}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        source={{ uri: "https://www.youtube.com/embed/foQQfRXvCk0" }}
                    />
                </View>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginLeft: 8, marginRight: 8 }]}>
                    Informações
                </Text>
                <ScrollView nestedScrollEnabled={true} style={{ height: 150, marginTop: 15 }} >

                    <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                        A CyberConnect2, responsável pela consagrada série Naruto: Ultimate Ninja Storm, lançará o game do mangá e anime que conta a história do
                        caçador de demônios Tangiro e sua irmã corrompida Nezuko. O jogos passará pelos arcos da Seleção, Primeira Missão, Asakusa,
                        da Mansão Tsuzumi, da Montanha Natagumo, de treinamento e Mugen Train. Ao todo, o jogador poderá controlar 18 personagens,
                        mas apenas os heróis.
                    </Text>
                    <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                        Demon Slayer: Kimetsu no Yaiba - The Hinokami Chronicles chegou em 157 de outubro para PC, PS4, PS5, Xbox One e Xbox Series X e Series S
                    </Text>
                </ScrollView>


            </View>
            <View style={[props.valor ? styles.lancab : styles.lancal, { paddingBottom: 20, marginBottom: 40 }]}>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginLeft: 8, marginRight: 8 }]}>
                    The Dark Pictures Anthology: House of Ashes
                </Text>
                <View style={[props.valor ? style.black : style.white, { height: 230, marginTop: 20, marginLeft: 5, marginRight: 5, }]}>
                    <WebView
                        style={{ alignSelf: 'center', width: '100%' }}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        source={{ uri: "https://www.youtube.com/embed/_AlYAVqxJao" }}
                    />
                </View>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginLeft: 8, marginRight: 8 }]}>
                    Informações
                </Text>
                <ScrollView nestedScrollEnabled={true} style={{ height: 150, marginTop: 15 }} >

                    <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                        O novo jogo da série de drama e survival horror da Bandai Namco é o terceiro da série (dos oito planejados) e será ambientando na Guerra
                        do Iraque, em 2003. Em um templo subterrâneo na Mesopotâmia, os cinco protagonistas precisam encontrar uma forma de sobreviver,
                        mas suas escolhas podem ser letais e talvez nem todos saiam vivos. Uma das personagens é Rachel King, que será interpretada por
                        Ashley Tisdale, conhecida pelo papel de Sharpay Evans em High School Musical.
                    </Text>
                    <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                        The Dark Pictures Anthology: House of Ashes foi lançado em 22 de outubro no PC, PS4, Xbox One e Xbox Series X|S
                    </Text>
                </ScrollView>


            </View>
            <View style={[props.valor ? styles.lancab : styles.lancal, { paddingBottom: 20, marginBottom: 40 }]}>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginLeft: 8, marginRight: 8 }]}>
                    Marvel’s Guardians of the Galaxy
                </Text>
                <View style={[props.valor ? style.black : style.white, { height: 230, marginTop: 20, marginLeft: 5, marginRight: 5, }]}>
                    <WebView
                        style={{ alignSelf: 'center', width: '100%' }}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        source={{ uri: "https://www.youtube.com/embed/szsW6vCWCI8" }}
                    />
                </View>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginLeft: 8, marginRight: 8 }]}>
                    Informações
                </Text>
                <ScrollView nestedScrollEnabled={true} style={{ height: 150, marginTop: 15 }} >

                    <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                        Senhor das Estrelas, Groot, Gamora, Rocket e Drax voltam para o mundo dos videogames pelas mãos da Eidos-Montréal e
                        da Square Enix. Mesmo com todos os personagens, apenas Peter Quill será jogável, mas as mecânicas de combate permitem
                        misturar os ataques de todos os heróis. O game ainda fará jus aos filmes, com uma trilha sonora repleta de músicas do
                        Iron Maiden, KISS, New Kids On The Block, Rick Astley e outros grandes nomes dos anos 80.
                    </Text>
                    <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                        Marvel’s Guardians of the Galaxy chegou em 26 de outubro para PC, PS4, PS5, Switch Xbox One e Series X|S.
                    </Text>
                </ScrollView>


            </View>
            <View style={[props.valor ? styles.lancab : styles.lancal, { paddingBottom: 20, marginBottom: 40 }]}>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginLeft: 8, marginRight: 8 }]}>
                    Riders Republic
                </Text>
                <View style={[props.valor ? style.black : style.white, { height: 230, marginTop: 20, marginLeft: 5, marginRight: 5, }]}>
                    <WebView
                        style={{ alignSelf: 'center', width: '100%' }}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        source={{ uri: "https://www.youtube.com/embed/AYdufZtUAPM" }}
                    />
                </View>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginLeft: 8, marginRight: 8 }]}>
                    Informações
                </Text>
                <ScrollView nestedScrollEnabled={true} style={{ height: 150, marginTop: 15 }} >

                    <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                        A Ubisoft apostará na loucura de motos, paraquedas, BMXs e snowboards ocupando um único mapa, tudo ao mesmo tempo.
                        Já foram confirmados para o game modos de corrida e arena, todos repletos de muita adrenalina para todos os tipos de atletas.
                    </Text>
                    <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                        Riders Republic foi adiado uma vez, mas agora foi lançado em 28 de outubro para PC, Amazon Luna, Stadia, PlayStation 4, PlayStation 5, Xbox One e Series X/S.
                    </Text>
                </ScrollView>


            </View>
            <View style={[props.valor ? styles.lancab : styles.lancal, { paddingBottom: 20, marginBottom: 40 }]}>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginLeft: 8, marginRight: 8 }]}>
                    Fatal Frame: Maiden of Black Water
                </Text>
                <View style={[props.valor ? style.black : style.white, { height: 230, marginTop: 20, marginLeft: 5, marginRight: 5, }]}>
                    <WebView
                        style={{ alignSelf: 'center', width: '100%' }}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        source={{ uri: "https://www.youtube.com/embed/t-b0v0l-UTA" }}
                    />
                </View>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginLeft: 8, marginRight: 8 }]}>
                    Informações
                </Text>
                <ScrollView nestedScrollEnabled={true} style={{ height: 150, marginTop: 15 }} >

                    <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                        A remasterização do game de Wii U de 2015 coloca o jogador no controle dos protagonistas Yuri Kozukata, Ren Hojo e
                        Miu Hinasaki explorando o Mt. Hikami para encontrar desaparecidos. Para superar os espíritos malignos do lago
                        da montanha e descobrir sua história, eles precisam fotografá-los. Na versão, os gráficos e iluminação são
                        aprimorados para uma experiência ainda mais assustadora.
                    </Text>
                    <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                        Fatal Frame: Maiden of Black Water foi lançado em 27 de outubro para PC, PS4, PS5, Switch, Xbox One, Xbox Series X e Series S.
                    </Text>
                </ScrollView>


            </View>
            <View style={[props.valor ? styles.lancab : styles.lancal, { paddingBottom: 20, marginBottom: 40 }]}>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginLeft: 8, marginRight: 8 }]}>
                    Age of Empires IV
                </Text>
                <View style={[props.valor ? style.black : style.white, { height: 230, marginTop: 20, marginLeft: 5, marginRight: 5, }]}>
                    <WebView
                        style={{ alignSelf: 'center', width: '100%' }}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        source={{ uri: "https://www.youtube.com/embed/TTaCrP_U4ao" }}
                    />
                </View>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginLeft: 8, marginRight: 8 }]}>
                    Informações
                </Text>
                <ScrollView nestedScrollEnabled={true} style={{ height: 150, marginTop: 15 }} >

                    <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                        No quarto game da série de estratégia e conquista da Microsoft, o jogador poderá controlar o Império Chinês, o Sultanato de Déli
                        (Índia), a Inglaterra, os mongóis, a França, a Dinastia Abássida (árabes) e a Rússia. As mecânicas são as mesmas dos
                        anteriores, exigindo o gerenciamento de recursos, liderança de tropas e outras características clássicas de jogos RTS.
                    </Text>
                    <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                        Age of Empires IV foi lançado em 28 de outubro no PC.
                    </Text>
                </ScrollView>


            </View>
            <View style={[props.valor ? styles.lancab : styles.lancal, { paddingBottom: 20, marginBottom: 40 }]}>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginLeft: 8, marginRight: 8 }]}>
                    Mario Party Superstars
                </Text>
                <View style={[props.valor ? style.black : style.white, { height: 230, marginTop: 20, marginLeft: 5, marginRight: 5, }]}>
                    <WebView
                        style={{ alignSelf: 'center', width: '100%' }}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        source={{ uri: "https://www.youtube.com/embed/lTiFERyYlPY" }}
                    />
                </View>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginLeft: 8, marginRight: 8 }]}>
                    Informações
                </Text>
                <ScrollView nestedScrollEnabled={true} style={{ height: 150, marginTop: 15 }} >

                    <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                        O super jogo de festas da Nintendo terá mais de 100 mini jogos para jogar com amigos localmente ou online. O game
                        contará também com mapas clássicos de outros Mario Party de Game Cube e Nintendo 64, além de textos e legendas
                        em português do Brasil.
                    </Text>
                    <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                        Mario Party Superstars chegou em 29 de outubro no Switch.
                    </Text>
                </ScrollView>


            </View>
        </ScrollView>


    );



}
const style = StyleSheet.create({

    black: {
        backgroundColor: 'white'
    },
    white: {
        backgroundColor: 'black'
    }

})

export { Lancamentos }