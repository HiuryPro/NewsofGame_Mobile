import React, { useRef, useEffect } from 'react';
// @ts-ignore
import { View, Text, TouchableOpacity, Image, Animated, ScrollView, Linking, ImageBackground } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './Const'

function Fontes(props) {

    return (
        <ScrollView>
            <View>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 40, textAlign: 'center', marginBottom: 15 }]}>
                    Fontes
                </Text>

                <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 40, marginBottom: 15, marginLeft: 10 }]}>
                    PC
                </Text>

                <TouchableOpacity onPress={() => Linking.openURL('https://br.ign.com/call-of-duty-vanguard/92777/preview/quebre-tudo-no-beta-call-of-duty-vanguard')} >
                    <Text style={[styles.fontes, props.valor ? { color: "#23E0D9" } : { color: "#DC1F26" }]}>
                        IGN: Quebre tudo no beta Call of Duty Vanguard
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Linking.openURL('https://www.tecmundo.com.br/voxel/226532-house-of-ashes-ganha-trailer-mostrando-armas-monstros.htm')} >
                    <Text style={[styles.fontes, props.valor ? { color: "#23E0D9" } : { color: "#DC1F26" }]}>
                        Tecmundo: House of Ashes ganha trailer mostrando armas e monstros
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Linking.openURL('https://www.techtudo.com.br/noticias/2021/07/tom-clancys-xdefiant-e-novo-jogo-de-tiro-gratis-da-ubisoft.ghtml')} >
                    <Text style={[styles.fontes, props.valor ? { color: "#23E0D9" } : { color: "#DC1F26" }]}>
                        Techtudo: Tom Clancys Xdefiant e novo jogo de tiro gratis da ubisoft
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Linking.openURL('https://www.techtudo.com.br/noticias/2021/10/ghost-recon-frontline-veja-requisitos-e-mais-detalhes-do-jogo-da-ubisoft.ghtml')} >
                    <Text style={[styles.fontes, props.valor ? { color: "#23E0D9" } : { color: "#DC1F26" }]}>
                        Techtudo: Ghost Recon Frontline: Veja requisitos e mais detalhes do jogo da Ubisoft
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Linking.openURL('https://adrenaline.com.br/noticias/v/71502/veja-requisitos-minimos-e-recomendados-para-rodar-a-trilogia-gta-no-pc')} >
                    <Text style={[styles.fontes, props.valor ? { color: "#23E0D9" } : { color: "#DC1F26" }]}>
                        Adrenaline: Veja requisitos mínimos e recomendados para rodar a trilogia GTA no PC
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Linking.openURL('https://gamerview.com.br/noticias/god-of-war-anuncio-pc')} >
                    <Text style={[styles.fontes, props.valor ? { color: "#23E0D9" } : { color: "#DC1F26" }]}>
                        gamerview: God of War é oficialmente anunciado para PC e chega em janeiro
                    </Text>
                </TouchableOpacity>


                <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 40, marginBottom: 15, marginLeft: 10 }]}>
                    PS5
                </Text>

                <TouchableOpacity onPress={() => Linking.openURL('https://www.tecmundo.com.br/voxel/225960-god-of-war-ragnarok-ganha-trailer-dublado-pt-br-confira.htm')} >
                    <Text style={[styles.fontes, props.valor ? { color: "#23E0D9" } : { color: "#DC1F26" }]}>
                        Tecmundo: God of War: Ragnarok ganha trailer dublado pt-br Confira!
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Linking.openURL('https://www.techtudo.com.br/noticias/2021/10/far-cry-6-rinha-de-galo-e-repreendida-e-peta-pede-remocao-do-game.ghtml')} >
                    <Text style={[styles.fontes, props.valor ? { color: "#23E0D9" } : { color: "#DC1F26" }]}>
                        Techtudo: Far Cry 6: Rinha de galo e repreendida e PETA pede remoção do game
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Linking.openURL('https://www.theenemy.com.br/pc/far-cry-6-novo-video-destaca-as-interacoes-com-os-animais')} >
                    <Text style={[styles.fontes, props.valor ? { color: "#23E0D9" } : { color: "#DC1F26" }]}>
                        The enemy: Far Cry 6: Novo video destaca as interações com os animais
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Linking.openURL('https://adrenaline.com.br/noticias/v/71226/the-touryst-e-o-primeiro-jogo-de-ps5-com-resolucao-nativa-8k-a-60-fps')} >
                    <Text style={[styles.fontes, props.valor ? { color: "#23E0D9" } : { color: "#DC1F26" }]}>
                        Adrenaline: The Touryst é o primeiro jogo de PS5 com resolução nativa 8K a 60 FPS
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Linking.openURL('https://www.theenemy.com.br/pc/far-cry-6-novo-video-destaca-as-interacoes-com-os-animais')} >
                    <Text style={[styles.fontes, props.valor ? { color: "#23E0D9" } : { color: "#DC1F26" }]}>
                        The enemy: Far Cry 6: Novo video destaca as interações com os animais
                    </Text>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => Linking.openURL('https://www.techtudo.com.br/noticias/2021/10/among-us-ganha-data-de-lancamento-para-consoles-ps4-ps5-e-xbox.ghtml')} >
                    <Text style={[styles.fontes, props.valor ? { color: "#23E0D9" } : { color: "#DC1F26" }]}>
                        Techtudo: Among Us ganha data de lançamento para consoles PS4, PS5 e Xbox
                    </Text>
                </TouchableOpacity>

                <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 40, marginBottom: 15, marginLeft: 10 }]}>
                    Xbox
                </Text>

                <TouchableOpacity onPress={() => Linking.openURL('https://www.arenaxbox.com.br/marvels-avengers-game-pass-30-setembro')} >
                    <Text style={[styles.fontes, props.valor ? { color: "#23E0D9" } : { color: "#DC1F26" }]}>
                        Arena xbox:  Marvel’s Avengers Chega Ao Xbox Game Pass Em 30 De Setembro
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Linking.openURL('https://www.techtudo.com.br/noticias/2021/10/forza-horizon-5-tem-lindos-cenarios-e-bastante-conteudo-veja-impressoes.ghtml')} >
                    <Text style={[styles.fontes, props.valor ? { color: "#23E0D9" } : { color: "#DC1F26" }]}>
                        Techtudo:  Forza Horizon 5 tem lindos cenários e bastante conteúdo; veja destaques
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Linking.openURL('https://adrenaline.com.br/noticias/v/71464/back-4-blood-ultrapassa-numero-maximo-de-jogadores-simultaneos-de-left-4-dead')} >
                    <Text style={[styles.fontes, props.valor ? { color: "#23E0D9" } : { color: "#DC1F26" }]}>
                        Adrenaline: Back 4 Blood ultrapassa número máximo de jogadores simultâneos de Left 4 Dead
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Linking.openURL('https://www.techtudo.com.br/noticias/2021/09/fifa-22-usuarios-reclamam-dos-graficos-do-jogo-no-xbox-series-s.ghtml')} >
                    <Text style={[styles.fontes, props.valor ? { color: "#23E0D9" } : { color: "#DC1F26" }]}>
                        Techtudo: FIFA 22: usuários reclamam dos gráficos do jogo no Xbox Series S
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Linking.openURL('https://www.gamevicio.com/amp/noticias/2021/10/confira-os-primeiro-minutos-de-marvel-s-guardians-of-the-galaxy/')} >
                    <Text style={[styles.fontes, props.valor ? { color: "#23E0D9" } : { color: "#DC1F26" }]}>
                        Gamevicio: Confira os primeiro minutos de Marvel's Guardians of the Galaxy
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Linking.openURL('https://olhardigital.com.br/2021/10/26/games-e-consoles/halo-servicos-online-xbox-360-fechados-2022/')} >
                    <Text style={[styles.fontes, props.valor ? { color: "#23E0D9" } : { color: "#DC1F26" }]}>
                        Olhar Digital: ‘Halo’: serviços online da franquia no Xbox 360 serão fechados em janeiro de 2022
                    </Text>
                </TouchableOpacity>

                <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 40, marginBottom: 15, marginLeft: 10 }]}>
                    Mobile
                </Text>

                <TouchableOpacity onPress={() => Linking.openURL('https://www.mobilegamer.com.br/2021/10/sky-warriors-jogo-brasileiro-de-combate-aereo-chega-globalmente-em-outubro-para-ios-e-android.html')} >
                    <Text style={[styles.fontes, props.valor ? { color: "#23E0D9" } : { color: "#DC1F26" }]}>
                        Mobile gamer: Sky Warriors: jogo brasileiro de combate aéreo chega globalmente em outubro para IOS e Android
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Linking.openURL('https://www.techtudo.com.br/noticias/2021/10/free-fire-vs-free-fire-max-saiba-o-que-muda-entre-as-versoes-do-jogo-esports.ghtml')} >
                    <Text style={[styles.fontes, props.valor ? { color: "#23E0D9" } : { color: "#DC1F26" }]}>
                        Techtudo: Free Fire vs Free Fire Max: saiba o que muda entre as versões do jogo
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Linking.openURL('https://www.techtudo.com.br/noticias/2021/10/wild-rift-patch-25-tem-detalhes-revelados-pela-riot-veja-o-que-muda-esports.ghtml')} >
                    <Text style={[styles.fontes, props.valor ? { color: "#23E0D9" } : { color: "#DC1F26" }]}>
                        Techtudo: Wild Rift: patch 2.5 tem detalhes revelados pela Riot; veja o que muda
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Linking.openURL('https://www.techtudo.com.br/noticias/2021/09/genshin-impact-arrecada-us-2-bilhoes-apenas-no-mobile-em-um-ano.ghtml')} >
                    <Text style={[styles.fontes, props.valor ? { color: "#23E0D9" } : { color: "#DC1F26" }]}>
                        Techtudo: Genshin Impact arrecada US$ 2 bilhões apenas no mobile em um ano
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Linking.openURL('https://www.mobilegamer.com.br/2021/10/nba-now-22-e-lancado-no-android-e-ios.html')} >
                    <Text style={[styles.fontes, props.valor ? { color: "#23E0D9" } : { color: "#DC1F26" }]}>
                        MobileGamer: NBA NOW 22 é lançado no Android e iOS
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Linking.openURL('https://www.theenemy.com.br/mobile/pubg-new-state-sera-lancado-para-dispositivos-moveis-em-novembro')} >
                    <Text style={[styles.fontes, props.valor ? { color: "#23E0D9" } : { color: "#DC1F26" }]}>
                        TheEnemy: PUBG New State será lançado para dispositivos móveis em novembro
                    </Text>
                </TouchableOpacity>

                <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 40, textAlign: 'center', marginBottom: 15, marginTop: 10 }]}>
                    Fonte dos Lançamentos
                </Text>

                <TouchableOpacity onPress={() => Linking.openURL('https://canaltech.com.br/games/os-lancamentos-de-jogos-mais-aguardados-para-outubro-de-2021-197589/')} >
                    <Text style={[styles.fontes, props.valor ? { color: "#23E0D9" } : { color: "#DC1F26" }]}>
                        Canaltech: Os lançamentos de jogos mais aguardados para outubro de 2021
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>


    );

}

export { Fontes }