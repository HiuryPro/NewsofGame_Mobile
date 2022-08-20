import React, { useRef, useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Animated, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

function Sobre(props) {
    return (

        <SafeAreaView style={{ alignItems: 'center', flex: 1, backgroundColor: 'gold' }}>
            <View>
                <Text style={{ textAlign: 'center', fontSize: 18, paddingLeft: 50, paddingRight: 50 }}>
                    {"\n"}{"\n"}News Game tem o foco de trazer o leitor mais para perto do mundo dos jogos,
                    com a finalidade de manter o mesmo sempre informado, deixando-o por dentro de atualizações,
                    lançamentos de jogos ou ate mesmo dlcs.{"\n"}
                    O aplicativo pode facilitar para o leitor ter acesso aos resultados finais de torneios/campeonatos
                    dentre
                    seus jogos favoritos.{"\n"}
                    O aplicativo teve seu formato dentre os padrões do react native,foram formatados na linguaguem
                    JavaScript.{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}
                    VERSÃO DA ATUALIZAÇÃO{"\n"}
                    12.5.1.0(RJWRUXM)

                </Text>
            </View>
        </SafeAreaView>

    );
}

export { Sobre }