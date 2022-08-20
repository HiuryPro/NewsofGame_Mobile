import React from 'react'
//@ts-ignore
import { View, ScrollView, Text, StyleSheet, TextInput, TouchableOpacity, Image, Switch } from 'react-native'

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { styles, Dark, Light } from './Const'
import { WebView } from 'react-native-webview'



function Not1(props) {

  return (
    <ScrollView>
      <SafeAreaView style={props.valor ? styles.dark : styles.light}>
        <Image style={styles.imagem} source={require('./assets/jogoimg.jpg')} />
        <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, fontWeight: 'bold', textAlign: 'center' }]}>
          Quebre tudo no beta Call of Duty: Vanguard
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} Call of Duty: Vanguard chega em novembro, mas finalmente todos poderão testar as novidades
          previstas pela Activision e SledgeHammer Games quando o assunto é o multiplayer. O primeiro
          beta aberto começa neste final de semana, e para deixar você por dentro do que vem por aí, testamo
          s o multiplayer e destacamos algumas das novidades para que você quebre tudo que vier pela frente.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} Dentre os mapas que jogamos, pudemos testar um pouco da ação de alguns dos modos que estarão disponíveis
          no game. O multiplayer da versão final do jogo tem 20 mapas previstos no lançamento, sendo 16 deles 6v6
          e quatro deles 2v2. A Activision nos permitiu testar alguns desses mapas, em diferentes modos, onde pudemos
          observar a qualidade dos gráficos, feedback da jogabilidade e armas, e cenários.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} Dentre eles, clássicos como tomadas de território, ou confirmações de abates - onde você precisa pegar a tag de
          um adversário abatido para poder marcar o ponto. Entretanto, a novidade que mais me chamou atenção foi um modo de
          patrulha, onde há uma área móvel no mapa e é necessário somar pontos ficando dentro dela enquanto ela continua por
          uma rota no mapa, ao mesmo tempo em que você precisa sobreviver e manter os adversários longes dela. Casos eles tomem
          a patrulha, seu time precisará abatê-los e recuperar o área antes que o total de pontos necessário seja atingido.
        </Text>
      </SafeAreaView>
      <View style={[props.valor ? style.black : style.white, { height: 230, marginTop: 20, marginLeft: 5, marginRight: 5 }]}>
        <WebView
          style={{ alignSelf: 'center', width: '100%' }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: "https://www.youtube.com/embed/EfFU-vxbzd0" }}
        />
      </View>
      <SafeAreaView>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} Dentre eles, clássicos como tomadas de território, ou confirmações de abates - onde você precisa pegar a tag de
          um adversário abatido para poder marcar o ponto. Entretanto, a novidade que mais me chamou atenção foi um modo de
          patrulha, onde há uma área móvel no mapa e é necessário somar pontos ficando dentro dela enquanto ela continua por
          uma rota no mapa, ao mesmo tempo em que você precisa sobreviver e manter os adversários longes dela. Casos eles tomem
          a patrulha, seu time precisará abatê-los e recuperar o área antes que o total de pontos necessário seja atingido.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} Dentre eles, clássicos como tomadas de território, ou confirmações de abates - onde você precisa pegar a tag de
          um adversário abatido para poder marcar o ponto. Entretanto, a novidade que mais me chamou atenção foi um modo de
          patrulha, onde há uma área móvel no mapa e é necessário somar pontos ficando dentro dela enquanto ela continua por
          uma rota no mapa, ao mesmo tempo em que você precisa sobreviver e manter os adversários longes dela. Casos eles tomem
          a patrulha, seu time precisará abatê-los e recuperar o área antes que o total de pontos necessário seja atingido.
        </Text>
      </SafeAreaView>

    </ScrollView>
  );
}

function Not2(props) {

  return (
    <ScrollView>
      <SafeAreaView style={props.valor ? styles.dark : styles.light}>
        <Image style={styles.imagem} source={require('./assets/GOD.jpeg')} />
        <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, fontWeight: 'bold', textAlign: 'center' }]}>
          God Of War Ragnarok ganha trailer dublado em PT-BR; confira!
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} A PlayStation divulgou, nesta quarta-feira (29), uma versão dublada em português do Brasil do trailer de God Of War Ragnarok.
          O vídeo praticamente confirma que o game será 100% localizado, assim como foi o título anterior da franquia.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} A empresa não confirmou, mas os atores Ricardo Juarez (Kratos), Lipe Volpato (Atreus) e Milton Levy (Mimir) devem reprisar
          seus papéis no novo game. Além disso, as vozes dos irmãos Brok e Sindri devem voltar a ser feitas por Mauro Castro e Marcelo Salsicha
          , respectivamente.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} Confira, abaixo, o trailer dublado em português:
        </Text>
      </SafeAreaView>
      <View style={[props.valor ? style.black : style.white, { height: 230, marginTop: 20, marginLeft: 5, marginRight: 5 }]}>
        <WebView
          style={{ alignSelf: 'center', width: '100%' }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: "https://www.youtube.com/embed/x6oF3Jxu7X0" }}
        />
      </View>

      <SafeAreaView style={props.valor ? styles.dark : styles.light}>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} “Kratos e Atreus devem viajar para cada um dos Nove Reinos em busca de respostas enquanto se preparam para a batalha profeti
          zada que acabará com o mundo. Juntos, Kratos e Atreus se aventuram profundamente nos Nove Reinos em busca de respostas enquanto as
          forças Asgardianas se preparam para a guerra”, diz trecho da sinopse oficial.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} O game recebeu o nome oficial e o primeiro material de gameplay em 9 de setembro, durante o evento PlayStation Showcase.
          Na oportunidade, a empresa explicou que a história se passará logo após o fim de God of War (2021) e que Freya e Thor serão dois
          dos principais antagonistas.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} Dentre outras novidades, Cory Barlog não será o diretor, já que passou o cargo para Eric Willims, que trabalha no
          Santa Monica Studios há bastante tempo.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} God Of War Ragnarok será lançado em 2022 exclusivamente para PlayStation 4 e PlayStation 5. E aí, o que achou do trailer
          dublado? Pretende jogar o título em português ou em inglês? Deixe a sua opinião na seção de comentários abaixo!
        </Text>

      </SafeAreaView>
    </ScrollView>
  );
}


function Not3(props) {

  return (
    <ScrollView>
      <SafeAreaView style={props.valor ? styles.dark : styles.light}>
        <Image style={styles.imagem} source={require('./assets/jogo2.jpg')} />
        <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, fontWeight: 'bold', textAlign: 'center' }]}>
          Sky Warriors: jogo brasileiro de combate aéreo chega globalmente em outubro para IOS e Android
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} Desenvolvido pelo estúdio brasileiro Wildlife, Sky Warriors é um jogo de combate aéreo moderno multiplayer que chega
          globalmente na próxima quarta-feira (06) para dispositivos Android e IOS.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} A equipe brasileira está colocando muitos esforços neste PvP, usando informações de pilotos de caças da vida real para
          criar uma experiência autêntica, além do grande foco em físicas realistas e atualizações constantes.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"}Pensando em uma boa jogabilidade ao pilotar o avião, os desenvolvedores criaram dois tipos de controles, um para os novatos
          e outro para jogadores que possuem maior experiência. Wildlife se esforçou para que esses controles fossem bem recebidos e
          otimizados para todo tipo de aparelho, de acordo com Luiz “Palarus” Piccini, diretor do jogo.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"}O visual tanto dos mapas como nas aeronaves também estão na mira do estúdio, explica Piccini que “Nossos artistas estão
          se esforçando muito para que os aviões e o ambiente pareçam o melhor possível, e grandes atualizações chegando nessa área”.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"}Confira um trailer:
        </Text>
      </SafeAreaView>
      <View style={[props.valor ? style.black : style.white, { height: 230, marginTop: 20, marginLeft: 5, marginRight: 5 }]}>
        <WebView
          style={{ alignSelf: 'center', width: '100%' }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: "https://www.youtube.com/embed/2FkPK-t5iBo" }}
        />
      </View>

      <SafeAreaView style={props.valor ? styles.dark : styles.light}>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} Os aviões podem ser personalizados e você pode conseguir novos modelos dependendo da sua pontuação nas partidas,
          e dependerá totalmente do trabalho em equipe para alcançar a vitória.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} Sky Warriors atualmente está no chamado “soft launch”, ou seja, foi lançado para alguns países e está em testes para
          que o time atualize, modifique e teste, e para surpresa de todos, ou nem tanto, o Brasil está incluindo nessa. Você pode instalar
          o jogo agora mesmo, caso esteja no Brasil.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} Já globalmente, o game estará disponível no dia 6 de outubro de 2021, tanto para Android como IOS e será necessário 138MB
          e 339.4MB de espaço livre respectivamente, além dos sistemas Android 7.0 ou superior, e caso tenha um dispositivo da Apple, é
          necessário iOS 10.0 ou superior.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} A recepção dos jogadores estão excelentes com uma média das avaliações acima de 4,2 estrelas nas respectivas lojas. O jogo é
          gratuito e possui compras no aplicativo para acelerar caixas de loot, por exemplo.
        </Text>

      </SafeAreaView>
    </ScrollView>
  );
}


function Not4(props) {

  return (
    <ScrollView>
      <SafeAreaView style={props.valor ? styles.dark : styles.light}>
        <Image style={styles.imagem} source={require('./assets/Marvel.jpg')} />
        <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, fontWeight: 'bold', textAlign: 'center' }]}>
          Marvel’s Avengers Chega Ao Xbox Game Pass Em 30 De Setembro
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"}Hoje (28), foi anunciado pelo blog de Xbox que Marvel’s Avengers estará chegando ao catálogo do Xbox Game Pass em 30 de setembro (quinta-feira),
          trazendo todo o conteúdo pós-lançamento (vale lembrar que menos o Homem-Aranha), assim como as missões.
        </Text>
      </SafeAreaView>
      <View style={[props.valor ? style.black : style.white, { height: 230, marginTop: 20, marginLeft: 5, marginRight: 5 }]}>
        <WebView
          style={{ alignSelf: 'center', width: '100%' }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: "https://www.youtube.com/embed/x91lpMZ_wWk" }}
        />
      </View>

      <SafeAreaView style={props.valor ? styles.dark : styles.light}>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} “Se você estiver jogando no Xbox Series X | S, poderá jogar a versão otimizada dos Vingadores para aproveitar os tempos de
          carregamento mais rápidos e as taxas de quadros mais altas, resultando em uma experiência de jogo mais suave. Os Vingadores também
          oferecem suporte ao Smart Delivery, dando a você a melhor versão do jogo entregue automaticamente no seu console, independentemente
          da geração, sem etapas extras exigidas de você“, disse Hunter Wolfe, Coordenador da Comunidade da Crystal Dynamics.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} Publicado pela Square Enix e desenvolvido pelo estúdio Crystal Dynamics, Marvel’s Avengers foi anunciado em 2017, causando uma
          enorme curiosidade e ansiedade para controlar os heróis mais poderosos da terra. Mas somente durante a E3 2019, o jogo ganhou seu
          primeiro trailer, causando uma impressão muito duvidosa, principalmente com relação aos gráficos dos personagens. Impressão que foi
          evaporando, conforme novidades eram reveladas e o game era mais polido. Mas nem por isso o game deixou de receber muitas críticas,
          especialmente pela falta de variedade no combate, assim como um multiplayer com pouco conteúdo.
        </Text>

      </SafeAreaView>
    </ScrollView>
  );
}

function Not5(props) {

  return (
    <ScrollView>
      <SafeAreaView style={props.valor ? styles.dark : styles.light}>
        <Image style={styles.imagem} source={require('./assets/jogo3.jpg')} />
        <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, fontWeight: 'bold', textAlign: 'center' }]}>
          House of Ashes ganha trailer mostrando armas e monstros
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"}Estamos cada vez mais próximos do lançamento de The Dark Pictures Anthology: House of Ashes, e para dar uma ideia extra do que
          teremos no game a produtora Supermassive Games divulgou um novo trailer do game.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"}A gravação divulgada pelo time de produção dá uma ideia do que teremos no game em termos de armas, inimigos e até mesmo algumas
          cinemáticas referentes a momentos que vão compor a nossa jornada nesta aventura.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} Veja o vídeo em questão a seguir:
        </Text>
      </SafeAreaView>
      <View style={[props.valor ? style.black : style.white, { height: 230, marginTop: 20, marginLeft: 5, marginRight: 5 }]}>
        <WebView
          style={{ alignSelf: 'center', width: '100%' }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: "https://www.youtube.com/embed/Am8E_BRbPYE" }}
        />
      </View>

      <SafeAreaView style={props.valor ? styles.dark : styles.light}>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} The Dark Pictures Anthology: House of Ashes será lançado em 22 de outubro em edições para PC, PlayStation 4,
          PlayStation 5, Xbox One e Xbox Series X/S.
        </Text>

      </SafeAreaView>
    </ScrollView>
  );
}
function Not6(props) {

  return (
    <ScrollView>
      <SafeAreaView style={props.valor ? styles.dark : styles.light}>
        <Image style={styles.imagem} source={require('./assets/galo.jpg')} />
        <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, fontWeight: 'bold', textAlign: 'center' }]}>
          Far Cry 6: rinha de galo é repreendida e PETA pede remoção do game
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} Far Cry 6 foi envolvido em uma polêmica devido ao minigame de rinha de galos que está disponível no jogo. Pouco depois do
          lançamento do game, a PETA, associação que defende o tratamento ético de animais, emitiu um comunicado repreendendo a escolha da
          Ubisoft e pedindo a remoção do modo. O TechTudo entrou em contato com a desenvolvedora, que reforçou o fato de Yara, onde se passa
          o jogo, ser um país fictício, mas não citou a reclamação da ONG.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} Vale lembrar que Far Cry 6 está disponível para PlayStation 4 (PS4) e Xbox One, com upgrades inclusos para o PlayStation 5
          (PS5) e Xbox Series X/S, por R$ 279,95 e No PC na Ubisoft Store e Epic Games Store por R$ 249,99.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"}Durante a passagem dos jogadores pelo mundo aberto de Far Cry 6, é possível apostar em uma rinha de galos que se revela
          uma paródia de jogos de luta famosos, como Street Fighter e Tekken. O usuário escolhe seu galo em uma tela de seleção de person
          agens e enfrenta um adversário em uma arena 3D, com barras de energia e golpes especiais.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"}O minigame é totalmente opcional, sendo uma forma de ganhar dinheiro no jogo, e não é necessário para completar a história.
          No entanto, há troféus e conquistas relacionados a ele, o que o torna obrigatório para jogadores que querem platinar o game.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"}A gerente sênior da PETA Latino, Alicia Aguayo, falou em um comunicado que "Transformar um esporte sangrento horrível como
          a rinha de galos em uma partida de videogame no estilo Mortal Kombat está longe de ser uma inovação". Segundo ela, a prática é
          reprimida pela sociedade atual e ainda citou algumas características comuns de maus-tratos envolvendo as brigas. A nota termina
          pedindo à Ubisoft para "substituir este minigame repreensível por um que não glorifique a crueldade".
        </Text>

        <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} O TechTudo entrou em contato com a Ubisoft por um posicionamento oficial, e a empresa não entrou em detalhes, justificando a
          presença do minigame sem citar o pedido da PETA e tampouco a organização. Confira a resposta, na íntegra:
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} "Far Cry 6 é uma obra de ficção que se passa em Yara, uma ilha fictícia do Caribe. Muitas das atividades secundárias
          opcionais são parte da cultura e história de Yara, que foi inspirada por diversas culturas da América Latina".
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} Parte da inspiração citada pela empresa para Yara é a ilha de Cuba, onde a rinha de galos ainda é comum, supostamente,
          pesar de apostas nos resultados serem consideradas ilegais. A PETA ficou conhecida no mundo dos games por críticas passadas a
          títulos como Pokémon Black por crueldade contra animais, Super Mario 3D Land pelo uso de pele e Assassin's Creed 4: Black Flag
          pela caça a baleias.
        </Text>


      </SafeAreaView>
    </ScrollView>
  );
}


function Not7(props) {

  return (
    <ScrollView>
      <SafeAreaView style={props.valor ? styles.dark : styles.light}>
        <Image style={styles.imagem} source={require('./assets/jogo4.jpg')} />
        <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, fontWeight: 'bold', textAlign: 'center' }]}>
          Forza Horizon 5 tem lindos cenários e bastante conteúdo; veja destaques
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"}Forza Horizon 5 é o novo título da franquia, que chega exclusivamente para Xbox Series X/S, Xbox One e PC. O jogo de corrida
          traz gráficos de alta qualidade e bastante conteúdo para jogar, além de diferentes cenários e pistas espalhadas pelo mundo aberto.
          O título da Playground Games tem lançamento previsto para 9 de novembro e preços que começam em R$ 249 no Steam e na Microsoft Store.
          Também será possível acessar o game via Xbox Game Pass. O TechTudo foi convidado a testar o mais novo Forza antecipadamente e traz a
          seguir as primeiras impressões do game.
        </Text>
      </SafeAreaView>
      <View style={[props.valor ? style.black : style.white, { height: 230, marginTop: 20, marginLeft: 5, marginRight: 5 }]}>
        <WebView
          style={{ alignSelf: 'center', width: '100%' }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: "https://www.youtube.com/embed/FYH9n37B7Yw" }}
        />
      </View>

      <SafeAreaView style={props.valor ? styles.dark : styles.light}>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} Diferentes da maioria dos games concorrentes, Forza apresenta um mundo aberto onde o jogador decide seu destino dentro do
          jogo. Há centenas de eventos e possibilidades a serem exploradas no mundo de Forza Horizon 5. O título apresenta o maior mapa de
          toda a franquia, com uma diversidade muito grande de biomas. A história se passa no México, onde podemos encontrar florestas, des
          ertos, áreas urbanas, praias, desfiladeiros, entre outros.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} O jogador participa de circuitos no asfalto, corridas de racha (as famosas corridas de arrancada), corridas mistas que possuem
          partes de pista e outra offroad. Há mesmo missões para ajudar personagens da história a tirarem fotos de belas paisagens.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} Conteúdo não vai faltar: há sempre eventos para escolher e se divertir. A maioria dos desafios de Forza 5 podem ser
          jogados em modo cooperativo online, mas, durante os testes do TechTudo, o recurso ainda não estava disponível.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} Outro opção de personalização interessante é a possibilidade de criar corridas e eventos para chamar outros jogadores
          online. Cada usuário pode usar toda sua criatividade para criar os mais diversos circuitos e convidar seus amigos para uma corrida.
        </Text>
      </SafeAreaView>
    </ScrollView>
  );
}

function Not8(props) {

  return (
    <ScrollView>
      <SafeAreaView style={props.valor ? styles.dark : styles.light}>
        <Image style={styles.imagem} source={require('./assets/free.jpg')} />
        <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, fontWeight: 'bold', textAlign: 'center' }]}>
          Free Fire vs Free Fire Max: saiba o que muda entre as versões do jogo
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"}O Free Fire Max foi lançado na terça-feira (28) para Android e iPhone (iOS) como uma versão aprimorada de Free Fire. O jogo traz algumas mudanças de
          visual, sons e também de gameplay para melhorar a experiência de seus usuários. Vale lembrar que, apesar de ser uma versão nova, o Free Fire Max possui a
          mesma essência do jogo original, além de possibilitar que jogadores de ambos games se divirtam juntos. Confira, a seguir, algumas das principais diferenças
          entre as versões do Battle Royale da Garena.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"}O objetivo principal do Free Fire Max é entregar aos jogadores a mesma experiência do Free Fire antigo, mas com uma mudança gráfica
          total. Essa transformação acontece principalmente no mapa, dando texturas mais realistas à vegetação e às estruturas em geral nas
          arenas. Alguns detalhes mais específicos também foram adicionados, como as marcas da freada de um veículo no asfalto, por exemplo.
          Além disso, os personagens também ganharam uma atenção especial e possuem melhorias visuais em seu design.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} Além das melhorias visuais, o Free Fire Max também dá atenção para as animações e para os sons em geral. A nova versão
          conta com animações diferentes nos personagens, como no momento de se agachar após um salto, ao recarregar as armas, quando se
          utiliza o kit de reparo e também ao correr, onde a animação pode mudar dependendo da arma que seu personagem estiver segurando.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} Em relação aos efeitos sonoros, a mudança também é bastante notável. Por exemplo, disparos de qualquer arma, o eco do mapa
          e também o acelerar de um veículo se tornaram mais realistas do que no jogo original. Tudo isso faz parte do objetivo da Garena em
          criar uma experiência muito mais imersiva em Free Fire Max.
        </Text>
      </SafeAreaView>
      <View style={[props.valor ? style.black : style.white, { height: 230, marginTop: 20, marginLeft: 5, marginRight: 5 }]}>
        <WebView
          style={{ alignSelf: 'center', width: '100%' }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: "https://www.youtube.com/embed/oqqDlygbqvY" }}
        />
      </View>

      <SafeAreaView style={props.valor ? styles.dark : styles.light}>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} O Free Fire Max também conta com duas grandes novidades para o jogo. Primeiro, o novo lobby com a visão em 360°, que dá
          uma forma de visualização muito mais imersiva do seu personagem e de todas as opções de personalização disponíveis nos menus.
          Outro novo conteúdo está no mapa Bermuda, que também recebeu uma repaginação especial em Free Fire Max, com destaque para as
          localizações Clock Tower e Factory.
        </Text>

      </SafeAreaView>
    </ScrollView>
  );
}

function Not9(props) {

  return (
    <ScrollView>
      <SafeAreaView style={props.valor ? styles.dark : styles.light}>
        <Image style={styles.imagem} source={require('./assets/animais.jpg')} />
        <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, fontWeight: 'bold', textAlign: 'center' }]}>
          Far Cry 6: Novo vídeo destaca interações com os animais
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"}Far Cry 6 está sendo um dos jogos mais aguardados deste ano e será lançado no dia 7 de outubro para Playstation 4,
          Playstation 5, Xbox One, Xbox Series X|S e PC.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"}Já vimos muitas novidades sobre o jogo durante os últimos meses, como o upgrade gratuito que os jogadores de PS4 e Xbox One terão
          para consoles de nova geração e diversos trailers incríveis do jogo, mostrando Yara - o mundo do jogo - e o ditador Antón Castillo,
          entre outros.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} Agora, um canal no Youtube de um usuário chamado “Cycu1” compartilhou um vídeo destacando a interação com os animais do
          game, que - como você pode imaginar pelos jogos anteriores - são muitos.
        </Text>
      </SafeAreaView>
      <View style={[props.valor ? style.black : style.white, { height: 230, marginTop: 20, marginLeft: 5, marginRight: 5 }]}>
        <WebView
          style={{ alignSelf: 'center', width: '100%' }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: "https://www.youtube.com/embed/8R-xJc4Zvok" }}
        />
      </View>

      <SafeAreaView style={props.valor ? styles.dark : styles.light}>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} No vídeo, podemos ver a interação com alguns dos animais, como fazer carinho no cachorrinho, no cavalo, alimentar o jacaré
          , o galo, um pelicano e até mesmo um castor! Além disso, ele também mostra como você pode utilizar os animais no combate contra
          seus inimigos.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} Se quiser saber mais sobre o jogo, o The Enemy pôde jogar um pouco dele a convite da Ubisoft e falamos neste texto sobre
          ele: “Far Cry 6 é promissor. Trazendo um tema absolutamente atual como pano de fundo para toda a destruição e os tiroteios, pode
          ser que a Ubisoft cumpra, desta vez, o que não conseguiu em Far Cry 5: propor um debate realmente relevante em vez de se limitar
          à superficialidade da "polêmica" para atrair alguns jogadores”.
        </Text>
      </SafeAreaView>
    </ScrollView>
  );
}
function Not10(props) {

  return (
    <ScrollView>
      <SafeAreaView style={props.valor ? styles.dark : styles.light}>
        <Image style={styles.imagem} source={require('./assets/Wild.jpg')} />
        <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, fontWeight: 'bold', textAlign: 'center' }]}>
          Wild Rift: patch 2.5 tem detalhes revelados pela Riot; veja o que muda
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"}A Riot Games revelou, nesta segunda-feira (11), mais detalhes sobre o patch 2.5 em League of Legends: Wild Rift. Entre os destaques
          estão a chegada de três novos campeões, Veigar, Caitlyn e o Jayce, e o lançamento de diversas skins. Outras novidades são, mudanças no
          arauto e na selva, a chegada de um sistema de guildas, alterações no matchmaking das partidas ranqueadas, um recurso para transmitir
          suas partidas na Twitch TV e a preferência de posição em partidas sem rank. Veja a seguir mais detalhes sobre as novidades do patch 2.5.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"}Os novos campeões serão lançados em datas distintas. Veigar, o Pequeno Mestre do Mal, estará disponível ainda em outubro.
          O campeão será mais uma opção para os jogadores da rota do meio que gostam de recursos de controle de grupo e de causarem um dano
          massivo com as habilidades. Caitlyn, a Xerife de Piltover, e Jayce, o Defensor do Amanhã, chegarão para aumentar o leque de
          campeões na rota do dragão e na rota do barão, respectivamente. Ambos estão previstos para novembro.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} Agora, um canal no Youtube de um usuário chamado “Cycu1” compartilhou um vídeo destacando a interação com os animais do
          game, que - como você pode imaginar pelos jogos anteriores - são muitos.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} Em relação às skins, serão lançadas a Kai'Sa Dragoa da Laguna, Master Yi Dragão de Zéfiro, Brand Dragão Eterno,
          Aurelion Sol Dragão da Tormenta, Ashe Dragoa Feérica, Irelia Espada Divina e Riven Espada Valorosa. Além dessas, também chegam
          Nami Cajado Esplendoroso, Janna Feiticeira, Wukong do Submundo, Leona Eclipse Solar, Caitlyn Caçadora de Cabeças e Veigar, o Super
          Vilão.
        </Text>

      </SafeAreaView>
      <View style={[props.valor ? style.black : style.white, { height: 230, marginTop: 20, marginLeft: 5, marginRight: 5 }]}>
        <WebView
          style={{ alignSelf: 'center', width: '100%' }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: "https://www.youtube.com/embed/4c8BqZBlVks" }}
        />
      </View>

      <SafeAreaView style={props.valor ? styles.dark : styles.light}>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} Para a nova atualização, algumas mudanças no arauto e na selva também são planejadas. O arauto poderá ser feito pelas equipes
          duas vezes antes do Barão Na'Shor nascer e causará mais dano em torres, além de receber mais dano quando executar seu avanço nas estruturas.
          Em relação à selva, serão aumentados o tempo de ressurgimento dos monstros que não concedem efeitos especiais, mas, em contrapartida,
          vão render mais ouro para os caçadores.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} O ARAM também estará recebendo um pouco mais de atenção. O modo é ideal para aqueles que desejam testar campeões ou que
          simplesmente gostam de partidas mais rápidas e com ação do começo ao fim. A partir do patch 2.5, o mapa do ARAM terá Florividentes
          para que os jogadores possam ter mais visão de seus adversários.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"}A Riot Games também anunciou o sistema de guildas. Com esse recurso, os interessados poderão chamar seus amigos para criar
          uma guilda, escolher nome, tag, ícone e descrição do grupo, além de terem a oportunidade de fazer missões para conquistar
          recompensas exclusivas.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"}Quando o jogador estiver em um guilda, seu nome mostrará o ícone e outras informações em diversos lugares do
          Wild Rift, como na tela de carregamento e nas leaderboards. O sistema também deve permitir o confronto interno de guildas
          por mais recompensas no jogo.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} Será adicionada no patch 2.5 a Preferência de posição em jogos não ranqueados. Isso significa que os jogadores poderão
          selecionar suas rotas favoritas para que o gerenciamento de partidas possa priorizá-las no momento de organizar sua equipe.
          Ainda será possível cair em uma rota que você colocou baixa preferência, mas as chances serão mínimas.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} A Riot Games também mencionou que isso não afetará negativamente o tempo de espera por partidas e que os jogos às
          cegas, sem banimentos, ainda estarão disponíveis. A empresa também se diz pronta para ouvir o feedback da comunidade a
          respeito dessa adição.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} Outro ponto importante na atualização está relacionado ao matchmaking das partidas ranqueadas. A Riot Games reconheceu
          os problemas enfrentados quando o sistema acabava criando partidas com companheiros e oponentes de níveis muito diferentes, o
          que tornava o jogo bastante desequilibrado.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"}Agora, as partidas serão pareadas com base no nível dos jogos realizados pelos usuários, e não mais no rank de cada um.
          O objetivo da decisão é tornar os jogos mais justos e a experiência mais saudável para todos.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} Para aqueles que desejam criar conteúdo com o Wild Rift, o patch 2.5 terá um recurso especial. Dentro do jogo, haverá
          um botão indicando que você poderá iniciar imediatamente uma transmissão na plataforma Twitch TV. Basta clicar no botão,
          colocar as informações da sua conta na plataforma de streaming e começar a transmissão de suas partidas.
        </Text>
      </SafeAreaView>
    </ScrollView>
  );
}
function Not11(props) {

  return (
    <ScrollView>
      <SafeAreaView style={props.valor ? styles.dark : styles.light}>
        <Image style={styles.imagem} source={require('./assets/Tom.jpg')} />
        <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, fontWeight: 'bold', textAlign: 'center' }]}>
          Tom Clancy's XDefiant é o novo jogo de tiro grátis da Ubisoft
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"}Tom Clancy’s XDefiant é o novo jogo de tiro em primeira pessoa grátis da Ubisoft que está em produção para PC, PlayStation
          4 (PS4), PlayStation 5 (PS5), Xbox One e Xbox Series X/S, ainda sem data de lançamento. Desenvolvido pela Ubisoft San Francisco
          (Rocksmith), o projeto foi anunciado nesta segunda-feira (19) e é descrito como um jogo rápido e dinâmico, de maneira semelhante
          a Call of Duty. Todos os interessados em participar do teste antecipado podem se inscrever no site oficial, mas ainda não há uma
          previsão para o Brasil.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"}Segundo as primeiras informações, Tom Clancy’s XDefiant traz combates entre equipes de seis jogadores e apresenta
          personagens, armamentos e mapas familiares aos fãs de franquias populares como The Division, Splinter Cell e Ghost Recon.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} As classes do jogo, chamadas de facções, podem ser personalizadas livremente e trazem características únicas, incluindo habilidades
          e os chamados “ultras”. A cada renascimento, o jogador é capaz de trocar sua configuração para se ajustar ao andamento das partidas.
        </Text>
      </SafeAreaView>
      <View style={[props.valor ? style.black : style.white, { height: 230, marginTop: 20, marginLeft: 5, marginRight: 5 }]}>
        <WebView
          style={{ alignSelf: 'center', width: '100%' }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: "https://www.youtube.com/embed/MQ40t531nC0" }}
        />
      </View>
      <SafeAreaView style={props.valor ? styles.dark : styles.light}>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} O time de desenvolvimento reforça, no entanto, que o jogo tem como prioridade o tiroteio realista, apesar da existência de
          poderes e outros equipamentos tecnológicos.
          A Ubisoft também tem a intenção de tratar o jogo como um serviço, oferecendo suporte a longo prazo com novos conteúdos, incluindo
          facções.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} Além disso, o jogo promete uma variedade de modalidades voltadas tanto ao público competitivo como também ao mais casual, que
          deseja apenas reunir um grupo de amigos. Modos como Dominação e Escolta já estão entre os confirmados, mas não receberam maiores detalhes
          até o momento.
        </Text>
      </SafeAreaView>


    </ScrollView>
  );
}
function Not12(props) {

  return (
    <ScrollView>
      <SafeAreaView style={props.valor ? styles.dark : styles.light}>
        <Image style={styles.imagem} source={require('./assets/Back.jpg')} />
        <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginRight: 10, marginLeft: 10 }]}>
          Back 4 Blood ultrapassa número máximo de jogadores simultâneos de Left 4 Dead
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} Back 4 Blood finalmente foi lançado, o título foi desenvolvido pela Turtle Rock Studios, mesma empresa que trabalhou em Left 4 Dead e Left 4
          Dead 2, e traz a mesma premissa encontrada nos dois jogos desenvolvidos para a Valve.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"}No jogo, você junto de sua equipe de mais três pessoas (ou bots), precisam ir do ponto A para o ponto B até chegarem a
          área de segurança, durante o trajeto é preciso eliminar uma imensidão de zumbis que surgem pelo mapa, além de diversos monstros
          que possuem características especiais que farão de tudo para atrasar a sua vida e impedir que você conclua o seu objetivo.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} Parece ser algo simples, mas é uma fórmula que funcionou para a franquia Left 4 Dead e está de volta em Back 4 Blood,
          oferecendo bastante diversão, principalmente se jogado junto de amigos.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"}O jogo foi lançado em 12 de outubro e mesmo em pouco tempo, o Gamerant apurou com base em dados retirados do SteamDB, que o
          novo jogo já ultrapassou o máximo de jogadores simultâneos que o Left 4 Dead original alcançou na Steam.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"}O primeiro Left 4 Dead alcançou um pico máximo de 30.616 jogadores a 13 anos atrás, enquanto o Back 4 Blood chegou na marca
          57.883 no dia 13 de outubro, um dia após seu lançamento. Claro que estamos falando de épocas diferentes, mas mesmo assim
          é uma marca que deve ser considerada.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"}Já Left 4 Dead 2, teve um pico de 162.399 jogadores a 8 anos atrás, um número bem maior que o novo jogo, porém esse valor foi
          registrado em uma data em que o jogo estava grátis para ser jogado na Steam.
        </Text>
      </SafeAreaView>
      <View style={[props.valor ? style.black : style.white, { height: 230, marginTop: 20, marginLeft: 5, marginRight: 5 }]}>
        <WebView
          style={{ alignSelf: 'center', width: '100%' }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: "https://www.youtube.com/embed/UkP8dOQrIyk" }}
        />
      </View>

      <SafeAreaView style={props.valor ? styles.dark : styles.light}>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"} Outro fator a ser considerado é o acesso limitado ao Left 4 Dead em seu lançamento, que estava disponível apenas no PC via Steam
          e no Xbox 360 (que não entra nessa contagem do SteamDB). Já Back 4 Blood está disponível para Xbox One, Xbox Series, PlayStation 4,
          PlayStation 5 e PC, nos computadores o jogo também pode ser adquirido em outras lojas, o que dilui ainda mais a base de jogadores.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"}Mas um dos pontos que deve ser levado em conta aqui é a presença do jogo no Xbox Game Pass desde seu lançamento,
          permitindo que assinantes do serviço usufruam do jogo no Xbox One, Xbox Series e PC sem custo adicional.
        </Text>
        <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
          {"\t"}Para todos os efeitos, Back 4 Blood ultrapassou Left 4 Dead no número de jogadores simultâneos na Steam, e se a
          base de jogadores seguir aumentando o próximo objetivo do jogo será ultrapassar o segundo título da série.
        </Text>
      </SafeAreaView>
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

export { Not1, Not2, Not3, Not4, Not5, Not6, Not7, Not8, Not9, Not10, Not11, Not12 }