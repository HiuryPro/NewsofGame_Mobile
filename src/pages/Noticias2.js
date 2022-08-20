import React from 'react'
import { View, ScrollView, Text, StyleSheet, Image } from 'react-native'

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { styles, Dark, Light } from './Const'
import { WebView } from 'react-native-webview'


function Not13(props) {

    return (
        <ScrollView>
            <SafeAreaView style={props.valor ? styles.dark : styles.light}>
                <Image style={styles.imagem} source={require('./assets/Ghost.jpg')} />
                <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginRight: 10, marginLeft: 10 }]}>
                    Ghost Recon Frontline: veja requisitos e mais detalhes do jogo da Ubisoft
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"}Ghost Recon Frontline é o mais novo Battle Royale gratuito anunciado pela Ubisoft. O game, desenvolvido pela
                    filial Ubisoft Bucarest, ainda não tem uma data de lançamento definida, mas chega para PlayStation 5 (PS5), Xbox Series
                    X/S, PlayStation 4 (PS4), Xbox One e PC. Vale ressaltar que o título terá uma fase beta de testes fechada em 14 de outubro
                    , mas que fica disponível apenas em países europeus. Ainda assim, o site oficial está com inscrições abertas para o caso
                    de futuras betas em outras regiões. Confira a seguir mais detalhes do jogo e requisitos mínimos para rodar no computador.
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"}Em Frontline, jogadores podem esperar pela natureza tática da franquia Ghost Recon aplicada à fórmula dos Battle
                    Royale tradicionais. O principal modo de jogo chama-se Expedition, no qual trios de competidores são lançados na ilha
                    de Drakemoor para obter documentos e pedir uma extração segura para a vitória.
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"} Os usuários podem decidir como pretendem vencer o jogo, seja tentando conquistar o objetivo antes de
                    todos os outros ou esperando para emboscar adversários quando já estiverem de posse dos documentos.
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"} Cada jogador pode se especializar em uma classe entre Assault, Support e Scout, que oferecem diferentes
                    habilidades. O Assault é um soldado que ganha vantagem nos confrontos diretos entre jogadores, enquanto o Support
                    pode colocar defesas como escudos para fortalecer uma posição. Já o Scout é capaz de detectar inimigos à distância e
                    marcá-los para os outros jogadores.
                </Text>

            </SafeAreaView>
            <View style={[props.valor ? style.black : style.white, { height: 230, marginTop: 20, marginLeft: 5, marginRight: 5 }]}>
                <WebView
                    style={{ alignSelf: 'center', width: '100%' }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{ uri: "https://www.youtube.com/embed/7NewkthNMDE" }}
                />
            </View>

            <SafeAreaView style={props.valor ? styles.dark : styles.light}>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"} A ilha de Drakemoor tem uma extensão de 4x4 km, dividida em quatro biomas diferentes e 20 pontos de referência,
                    com montanhas altas e regiões áridas, além de trazer clima dinâmico. Durante o combate, o campo de batalha pode mudar
                    com a requisição de suportes táticos que podem ser entregues. É possível pedir torretas, torres para observação ou
                    sniper, barricadas e drones que soltam fumaça.
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 25, textAlign: 'justify', marginLeft: 8, marginBottom: 15 }]}>
                    Requisitos mínimos
                </Text>
                <Image style={{ width: 400, height: 175, resizeMode: 'stretch', marginBottom: 10 }} source={require('./assets/tabela1.jpg')} />
                <Image style={{ width: 400, height: 175, resizeMode: 'stretch', marginBottom: 10 }} source={require('./assets/tabela2.jpg')} />
            </SafeAreaView>
        </ScrollView>
    );
}
function Not14(props) {

    return (
        <ScrollView>
            <SafeAreaView style={props.valor ? styles.dark : styles.light}>
                <Image style={styles.imagem} source={require('./assets/GTA.jpg')} />
                <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginRight: 10, marginLeft: 10 }]}>
                    Veja requisitos mínimos e recomendados para rodar a trilogia GTA no PC
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"}Agora é a vez dos novos jogos serem encontrados no site SteamDB, indicando o lançamento para a plataforma de jogos
                    da Valve, além disso, informaçõse vindas do GTAForums apontam os requisitos necessários para rodar os novos jogos em PCs.
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"}Os que desejarem ter uma experiência mínima no jogo precisarão de um processador Intel i7-2700K ou um AMD
                    FX-6300 junto de uma GeForce GTX 760 ou uma Radeon R9 280. Para atender os requisitos recomendados, será preciso
                    um Ryzen 5 2600 ou um Intel i5-6600K junto de uma GTX 970 ou uma RX 570. Ambos os requisitos pedem 45 GB de armaze
                    namento e Windows 10, o mínimo de memória exigido é de 8 GB e o recomendado é 16 GB, confira abaixo os requisitos
                    completos para ter uma boa experiência com a coletânea.
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"}Requisitos Mínimos:{"\n"}

                    * Processador: Intel Core i7-2700K / AMD FX-6300{"\n"}
                    * Placa de vídeo: Nvidia GeForce GTX 760 2GB / AMD Radeon R9 280 3GB{"\n"}
                    * Memória: 8 GB RAM{"\n"}
                    * Armazenamento: 45 GB de espaço livre{"\n"}
                    * Sistema Operacional: Windows 10{"\n"}
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"}Requisitos Recomendados:{"\n"}

                    * Processador: Intel Core i5-6600K / AMD Ryzen 5 2600{"\n"}
                    * Placa de vídeo: Nvidia GeForce GTX 970 4GB / AMD Radeon RX 570 4GB{"\n"}
                    * Memória: 16 GB RAM{"\n"}
                    * Armazenamento: 45 GB de espaço livre{"\n"}
                    * Sistema Operacional: Windows 10{"\n"}
                </Text>

            </SafeAreaView>
            <View style={[props.valor ? style.black : style.white, { height: 230, marginTop: 20, marginLeft: 5, marginRight: 5 }]}>
                <WebView
                    style={{ alignSelf: 'center', width: '100%' }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{ uri: "https://www.youtube.com/embed/7x7zr1onxfU" }}
                />
            </View>

            <SafeAreaView style={props.valor ? styles.dark : styles.light}>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"} Grand Theft Auto: The Trilogy - The Definitive Edition ainda não tem data de lançamento confirmada e contará com
                    novas versões se três famosos jogos que foram lançados nos anos 2000 e inauguraram a era tridimensional da franquia, Grand Theft
                    Auto III, Grand Theft Auto: Vice City e Grand Theft Auto: San Andreas.
                </Text>
            </SafeAreaView>
        </ScrollView>
    );
}
function Not15(props) {

    return (
        <ScrollView>
            <SafeAreaView style={props.valor ? styles.dark : styles.light}>
                <Image style={styles.imagem} source={require('./assets/Ride.jpg')} />
                <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginRight: 10, marginLeft: 10 }]}>
                    Ride 4: vídeo mostra o jogo rodando em um PS5 e impressiona pelo realismo
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"}Já faz um tempo que Ride 4, jogo de corrida com motos, foi lançado, contudo, em janeiro deste ano,
                    o título recebeu uma atualização gratuita para o PS5, que trouxe diversas melhorias gráficas da nova geração.
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"}Esta semana, um vídeo com uma gameplay em primeira pessoa do jogo viralizou na internet
                    e deixou muitos impressionados com a qualidade fotorrealista dos gráficos.
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"} Publicado pelo canal Joy of Gaming no YouTube, o vídeo é espetacular ao ponto de ser difícil distinguir
                    alguns momentos, onde nos perguntamos: isso é mesmo um jogo de videogame?
                </Text>
            </SafeAreaView>
            <View style={[props.valor ? style.black : style.white, { height: 230, marginTop: 20, marginLeft: 5, marginRight: 5 }]}>
                <WebView
                    style={{ alignSelf: 'center', width: '100%' }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{ uri: "https://www.youtube.com/embed/S3DEM6XDDTk" }}
                />
            </View>

            <SafeAreaView style={props.valor ? styles.dark : styles.light}>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"}Embora os consoles da nova geração ainda estejam no começo de sua vida útil, nós
                    certamente veremos muitos outros vídeos como esse surgindo no decorrer dos próximos anos.
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginBottom: 8, marginRight: 8 }]}>
                    {"\t"} Ride 4 está disponível em versões para PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S e PC.
                </Text>
            </SafeAreaView>
        </ScrollView>
    );
}
function Not16(props) {

    return (
        <ScrollView>
            <SafeAreaView style={props.valor ? styles.dark : styles.light}>
                <Image style={styles.imagem} source={require('./assets/Turista.jpg')} />
                <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginRight: 10, marginLeft: 10 }]}>
                    The Touryst é o primeiro jogo de PS5 com resolução nativa 8K a 60 FPS
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"}The Touryst é o mais novo jogo da desenvolvedora Shin'en Multimedia. Lançado para PlayStation 5, PS4, Xbox One, Xbox
                    Series X|S, Nintendo Switch e PCs, o game vem chamando a atenção principalmente na plataforma da Sony, por ser o primeiro jogo
                    de PS5 a rodar na resolução nativa de 8K, a 60 frames por segundo.
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"}A informação foi confirmada pela coluna Digital Foundry, da Eurogamer, que entrevistou a
                    desenvolvedora para saber mais detalhes do jogo.
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"} De acordo com a Shin'en, The Touryst para PlayStation 5 roda a uma resolução nativa de 7680 x 4320
                    pixels (4320p), sem fazer uso de qualquer tipo de anti-aliasing, reprojeção, upscaling ou ainda do método de checkerboard rendering.
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"} Contudo, há uma pegadinha: o PlayStation 5 ainda não é capaz de passar imagens
                    8K a 60 FPS para a TV, com a sua porta HDMI 2.1. Por isso, essa resolução é utilizada apenas para a renderização interna do jogo.
                </Text>

            </SafeAreaView>
            <View style={[props.valor ? style.black : style.white, { height: 230, marginTop: 20, marginLeft: 5, marginRight: 5 }]}>
                <WebView
                    style={{ alignSelf: 'center', width: '100%' }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{ uri: "https://www.youtube.com/embed/DNGA_XnWVMg" }}
                />
            </View>

            <SafeAreaView style={props.valor ? styles.dark : styles.light}>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"} Uma vez gerada, essa imagem é então processada e reescalonada via downsampling para o padrão 4K.
                    Cada quatro pixels se transformam em um, por amostragem. O resultado é uma qualidade de imagem extremamente
                    limpa, sem serrilhados, com o uso do que é conhecido como super-sampling anti-aliasing (SSAA).
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 25, textAlign: 'justify', marginLeft: 8, marginBottom: 15 }]}>
                    {"\t"}Além das bordas mais definidas e limpas, outras melhorias são vistas no efeito de profundidade de campo (que muda consideravelmente
                    entre os modos 4K e 8K, segundo a Digital Foundry) e na projeção das sombras, que ganham ainda mais detalhes.
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 25, textAlign: 'justify', marginLeft: 8, marginBottom: 15 }]}>
                    {"\t"} Falando em definição de sombras, a versão de PS5 apresenta mais nitidez do que a do Xbox Series X. A explicação
                    para isso está no fato de que o jogo também faz downsampling no console da Microsoft, mas a partir da resolução 6K
                    5760 x 3240 (contra 8K na plataforma da Sony). Apesar de sutil, a diferença pode ser notada em algumas regiões mais sombreadas do game.
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 25, textAlign: 'justify', marginLeft: 8, marginBottom: 15 }]}>
                    {"\t"} A Shin’en afirma ter conseguido ir até 8K no PS5 em virtude da arquitetura do console, que opera com clocks
                    mais altos para a unidade gráfica (muito embora ela conte com menos conjuntos de processamento do que a do console
                    rival Xbox Series X).
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 25, textAlign: 'justify', marginLeft: 8, marginBottom: 15 }]}>
                    {"\t"}Outro fator que pesou para isso foi a maneira como a memória é distribuída
                    nos consoles, tendo a arquitetura otimizada pela Sony favorecido o funcionamento da engine utilizada em The Touryst.
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 25, textAlign: 'justify', marginLeft: 8, marginBottom: 15 }]}>
                    {"\t"}Vale destacar que o jogo foi projetado com escalabilidade em mente, rodando tranquilamente na
                    resolução de 720p a 60 FPS no Nintendo Switch.


                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 25, textAlign: 'justify', marginLeft: 8, marginBottom: 15 }]}>
                    {"\t"}Independentemente da resolução, a análise da Digital Foundry ainda aponta diversos dos benefícios que os jogadores terão ao optar
                    pelo modo de 120 Hz de The Touryst, que traz mais suavidade aos movimentos e principalmente ao deslocamento
                    dos personagens e cenários.
                </Text>

                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 25, textAlign: 'justify', marginLeft: 8, marginBottom: 15 }]}>
                    {"\t"}Mesmo essa opção não estando disponível em todas as plataformas para as quais o game foi lançado, a
                    publicação destaca que todas as versões contam com excelente desempenho e taxas de frames constantes, que
                    devem agradar até mesmo nos consoles da geração passada.
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 25, textAlign: 'justify', marginLeft: 8, marginBottom: 15 }]}>
                    {"\t"}Inclusive, no PS4, o jogo roda a 1080p 60 FPS, fazendo o uso de resoluções
                    dinâmicas para manter tudo fluindo perfeitamente na tela.
                </Text>
            </SafeAreaView>
        </ScrollView>
    );
}
function Not17(props) {

    return (
        <ScrollView>
            <SafeAreaView style={props.valor ? styles.dark : styles.light}>
                <Image style={styles.imagem} source={require('./assets/Gen.jpg')} />
                <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginRight: 10, marginLeft: 10 }]}>
                    Genshin Impact arrecada US$ 2 bilhões apenas no mobile em um ano
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"}Genshin Impact comemorou seu primeiro aniversário nesta última terça-feira (28) com números expressivos de
                    arrecadação. Um levantamento da consultoria mobile Sensor Tower, publicado nesta quarta (29), aponta que o jogo da
                    miHoYo alcançou a marca de US$ 2 bilhões (cerca de R$ 11 bilhões) em microtransações em celulares Android e iPhone
                    (iOS) durante seu primeiro ano de atividades. Como resultado, Genshin Impact foi o terceiro jogo mobile que mais
                    gerou receita globalmente neste período, ficando atrás apenas de Honor of Kings e PUBG Mobile.
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"}Ainda de acordo com o Sensor Tower, Genshin Impact teve um dos lançamentos mais bem-sucedidos da história dos
                    jogos mobile e arrecadou US$ 1 bilhão nos primeiros seis meses após seu lançamento. Em comparação, Pokémon GO
                    alcançou esta marca apenas nove meses após seu lançamento.
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"} Vale lembrar que Genshin Impact também está disponível gratuitamente para PC, PlayStation 4
                    (PS4) e PlayStation 5 (PS5). Isso significa que, na prática, o faturamento da miHoYo foi ainda maior. Uma
                    versão para Nintendo Switch também está em produção, mas segue sem detalhes de lançamento.

                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"}O primeiro aniversário de Genshin Impact foi marcado por críticas da comunidade. Os jogadores manifestaram
                    descontentamento com as recompensas e eventos anunciados pela desenvolvedora e recorreram aos canais oficiais
                    para publicar críticas. Muitas das atividades envolviam sorteios e concursos de talentos.
                </Text>


                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"} No entanto, a miHoYo começou a tomar medidas e deletou várias das mensagens, sendo acusada de censura.
                    Além disso, a empresa bloqueou temporariamente a opção de editar assinaturas de perfil dentro do jogo —
                    que estavam sendo utilizadas para protestar.
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 25, textAlign: 'justify', marginLeft: 8, marginBottom: 15 }]}>
                    Como consequência, vários reviews negativos começaram a ser publicados pelos jogadores na Google Play Store para criticar
                    a postura da empresa. A nota do jogo na plataforma caiu consideravelmente, saltando de 4.5 para 2.0 estrelas. No momento
                    desta publicação, a nota subiu para 3.1. Além disso, como forma de protestar nas redes sociais do game, fãs estão utiliz
                    ando um sticker de uma das personagens para mostrar seu descontentamento.
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 25, textAlign: 'justify', marginLeft: 8, marginBottom: 15 }]}>
                    Em resposta, a miHoYo começou a distribuir brindes para agradecer à comunidade, incluindo 400 unidades de Gemas
                    Essenciais e um novo planador. Outros brindes devem chegar às contas dos jogadores nos próximos dias. A empresa
                    também pretende realizar um concerto digital na próxima segunda (3) com as músicas mais icônicas do jogo.
                </Text>
            </SafeAreaView>
        </ScrollView>
    );
}
function Not18(props) {

    return (
        <ScrollView>
            <SafeAreaView style={props.valor ? styles.dark : styles.light}>
                <Image style={styles.imagem} source={require('./assets/Fifa.jpg')} />
                <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginRight: 10, marginLeft: 10 }]}>
                    FIFA 22: usuários reclamam dos gráficos do jogo no Xbox Series S
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"}O FIFA 22 apresentou problemas em sua versão do Xbox Series S, segundo usuários que tiveram acesso antecipado
                    ao jogo pela assinatura do EA Play (antigo EA Access). O serviço da Electronic Arts disponibilizou uma versão grátis
                    de FIFA 22 com 10 horas de gameplay a partir da última quarta-feira (22), mas usuários no console da Microsoft relata
                    ram gráficos embaçados e outros bugs visuais.
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"}As reclamações tomaram os fóruns e ajuda da produtora e foram parar em redes sociais como Twitter e Reddit.
                    O TechTudo entrou em contato com a EA para entender o problema, mas até o momento não recebeu uma resposta. Vale
                    ressaltar que, além do Series S, o game chega no próximo dia 1º de outubro também para Xbox One, Xbox Series X,
                    PlayStation 4 (PS4), PlayStation 5 (PS5) e PC.
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"} De acordo com os relatos, os personagens do jogo estão embaçados, com um visual estranho ao redor dos modelos
                    3D e muito pixelados. Objetos que se movem rapidamente, como a bola e o cabelo dos jogadores, também parecem deixar
                    um rastro na tela quando se mexem.
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"} Um usuário chamado Cechmeoutt mencionou que o game aparenta ser renderizado em 720p e, então,
                    teria upscale na imagem para alcançar 1080p no console. Isso explicaria alguns dos problemas visuais,
                    mas não ouve confirmação por parte da EA.
                </Text>

                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"} Também foi relatado que os menus do jogo rodam a uma taxa de quadros de 30 FPS no Series
                    S, enquanto no Xbox Series X rodam a 60 FPS, um comprometimento estranho já que menus não demandam
                    muito processamento gráfico.
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 25, textAlign: 'justify', marginLeft: 8, marginBottom: 15 }]}>
                    Vale ressaltar que o Xbox Series S é um modelo menos potente do console de nova geração da Microsoft, o Xbox Series X.
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 25, textAlign: 'justify', marginLeft: 8, marginBottom: 15 }]}>
                    Enquanto o top de linha custa R$ 4.349, o Series S sai a R$ 2.649 e visa trazer uma experiência de jogo semelhante,
                    mas com uma diferença pontual: enquanto o Series X busca atingir 4K, a versão mais simples tem resolução menor, norm
                    almente 1080p. Apesar disso, o console não deveria apresentar dificuldades para rodar o jogo, já que o conteúdo, em
                    si, não seria diferente.
                </Text>
            </SafeAreaView>
        </ScrollView>
    );
}
function Not19(props) {

    return (
        <ScrollView>
            <SafeAreaView style={props.valor ? styles.dark : styles.light}>
                <Image style={styles.imagem} source={require('./assets/Nba.jpg')} />
                <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginRight: 10, marginLeft: 10 }]}>
                    NBA NOW 22 é lançado no Android e iOS
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"}Desenvolvido e publicado pela Com2uS, NBA NOW 22 finalmente chegou na última terça-feira (19)
                    para os dispositivos móveis iOS e Android. O jogo era esperado por muitas pessoas, mas infelizmente
                    chegou com diversos problemas.
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"}NBA NOW 22 é um simulador de basquete e coleção de cartas onde os jogadores montam o seu time
                    dos sonhos usando a carta de verdadeiros astros do basquete americanos com stats reais dos jogadores
                    e lendas já aposentadas.
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"} Entretanto, a recepção dos jogadores na Google Play não foi a das melhores, com
                    quase 1.500 análises o jogo conta com uma média de 3,3/5 estrelas. O jogo contou
                    com muitas avaliações máximas, sendo a mais votada pelos jogadores, porém a segunda nota com mais votos foi 1 estrela, que é um alerta bem grande.
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"} Vídeo de gameplay:
                </Text>

            </SafeAreaView>
            <View style={[props.valor ? style.black : style.white, { height: 230, marginTop: 20, marginLeft: 5, marginRight: 5 }]}>
                <WebView
                    style={{ alignSelf: 'center', width: '100%' }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{ uri: "https://www.youtube.com/embed/p5rQwFdMqoM" }}
                />
            </View>

            <SafeAreaView style={props.valor ? styles.dark : styles.light}>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"} Dentre os problemas principais relatados pelos usuários estão uma otimização ruim feita pela equipe de desenvolvimento,
                    com muitos travamentos e lags, outro recorrente são alguns usuários que nem sequer conseguiram acessar o
                    jogo, pois por algum motivo ele não abriu ou ficou na angustiante tela preta infinita.
                </Text>
            </SafeAreaView>
        </ScrollView>
    );
}
function Not20(props) {

    return (
        <ScrollView>
            <SafeAreaView style={props.valor ? styles.dark : styles.light}>
                <Image style={styles.imagem} source={require('./assets/Galaxy.jpg')} />
                <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginRight: 10, marginLeft: 10 }]}>
                    Confira os primeiro minutos de Marvel's Guardians of the Galaxy
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"}Com o lançamento se aproximando, começaram a sair vídeos mostrando os primeiros minutos de Marvel's Guardians of the Galaxy.
                    São dois vídeos, um em Inglês e o outro em Português. A dublagem para o Brasil está excelente. Confira abaixo os primeiros minutos:
                </Text>

            </SafeAreaView>
            <View style={[props.valor ? style.black : style.white, { height: 230, marginTop: 20, marginLeft: 5, marginRight: 5 }]}>
                <WebView
                    style={{ alignSelf: 'center', width: '100%' }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{ uri: "https://www.youtube.com/embed/YzcAynjWxAA" }}
                />
            </View>
            <View style={[props.valor ? style.black : style.white, { height: 230, marginTop: 20, marginLeft: 5, marginRight: 5 }]}>
                <WebView
                    style={{ alignSelf: 'center', width: '100%' }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{ uri: "https://www.youtube.com/embed/p9GtWs_WHQs" }}
                />
            </View>
            <SafeAreaView style={props.valor ? styles.dark : styles.light}>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"} Em Marvel's Guardians of the Galaxy, embarque numa nova e empolgante viagem pelo cosmos. Neste
                    jogo de ação e aventura em terceira pessoa, você é o Senhor das Estrelas, que, graças à sua liderança
                    ousada, porém questionável, reuniu uma tripulação excêntrica de heróis improváveis. Algum idiota
                    (com certeza não foi você) desencadeou uma série de eventos catastróficos, e só você pode manter os
                    imprevisíveis Guardiões unidos por tempo suficiente para impedir o colapso interplanetário absoluto.
                    Use pistolas elementais, ataques coletivos, botas a jato... Vale tudo.
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"} Marvel's Guardians of the Galaxy está sendo desenvolvido pela Eidos-Montréa e será lançado em 26 de outubro para PC, PS4, PS5, Xbox One e Xbox Series.
                </Text>

            </SafeAreaView>
        </ScrollView>
    );
}
function Not21(props) {

    return (
        <ScrollView>
            <SafeAreaView style={props.valor ? styles.dark : styles.light}>
                <Image style={styles.imagem} source={require('./assets/GodPC.jpg')} />
                <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginRight: 10, marginLeft: 10 }]}>
                    God of War é oficialmente anunciado para PC e chega em janeiro
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"}Pela primeira vez na história, God of War está saindo do ecossistema da Sony. O título lançado em 2018
                    para PlayStation 4 já tem data para chegar ao PC: 14 de janeiro de 2022. A versão de PC terá suporte a 4K,
                    monitores ultrawide 21:9 e quadros por segundo destravados, além do recurso exclusivo das placas NVIDIA GeForce
                    RTX, o DLSS. Segundo o anúncio, o jogo também terá suporte ao NVIDIA Reflex, que irá permitir “uma experiência
                    mais responsiva, para você poder reagir mais rapidamente e criar combos melhores”.
                </Text>

            </SafeAreaView>
            <View style={[props.valor ? style.black : style.white, { height: 230, marginTop: 20, marginLeft: 5, marginRight: 5 }]}>
                <WebView
                    style={{ alignSelf: 'center', width: '100%' }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{ uri: "https://www.youtube.com/embed/HqQMh_tij0c" }}
                />
            </View>

            <SafeAreaView style={props.valor ? styles.dark : styles.light}>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"} A Sony garante que “God of War no PC pode atingir uma qualidade visual única à plataforma”.
                    Além dos controles, será possível usar o teclado e mouse e os comandos serão totalmente customizáveis.
                    Deixando de lado toda a melhoria técnica comum em ports para PC, a versão da Steam também terá os seguintes
                    conteúdos:
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"}*Conjunto de armadura Death’s Vow para Kratos e Atreus{"\n"}
                    {"\t"}*Skin de escudo Exile’s Guardian{"\n"}
                    {"\t"}*Skin de escudo Buckler of the Forge{"\n"}
                    {"\t"}*Skin de escudo Shining Elven Soul{"\n"}
                    {"\t"}*Skin de escudo Dökkenshieldr
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"} Já é possível fazer a pré-compra no valor de R$ 199,90 ou adicionar na lista de desejo para esperar aquela
                    promoção que nos ajuda muito. God of War para PS4 vendeu mais de 19 milhões de cópias e é um sucesso unânime
                    e se seguir a tradição de bons ports para PC, como Days Gone e Horizon Zero Dawn, mais sucessos aguardam Kratos e Atreus.
                </Text>
            </SafeAreaView>
        </ScrollView>
    );
}
function Not22(props) {

    return (
        <ScrollView>
            <SafeAreaView style={props.valor ? styles.dark : styles.light}>
                <Image style={styles.imagem} source={require('./assets/Among.jpg')} />
                <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginRight: 10, marginLeft: 10 }]}>
                    Among Us ganha data de lançamento para consoles PS4, PS5 e Xbox
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"}Among Us teve sua data de lançamento confirmada para 14 de dezembro no PlayStation 4 (PS4), PlayStation 5
                    (PS5), e Xbox One e Xbox Series X/S, onde chega direto ao Xbox Game Pass. Segundo as produtoras Innersloth e Dual
                    Wield Studio, o jogo terá suporte a crossplay para jogar com seus amigos em qualquer console e PC, além de edições
                    físicas para colecionadores. Among Us já está disponível atualmente em versões pagas para Nintendo Switch e PC,
                    além de versões gratuitas para Android e iPhone (iOS).
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"}O game se tornou extremamente popular durante o período de isolamento da pandemia da covid-19, impulsionado por
                    YouTubers e streamers da Twitch. Após seu sucesso, Among Us passou a receber mais conteúdo, como um novo mapa,
                    novo limite máximo de 15 jogadores e promessas de atualizações futuras que atribuirão papéis aos membros da tripulação.
                    Durante o mês de outubro o game também recebeu uma decoração extra para o Dia das Bruxas ou Halloween. Nas plataformas
                    PlayStation, usuários terão ainda acesso a uma skin e pet exclusivos baseados em Ratchet e Clank.
                </Text>


            </SafeAreaView>
            <View style={[props.valor ? style.black : style.white, { height: 230, marginTop: 20, marginLeft: 5, marginRight: 5 }]}>
                <WebView
                    style={{ alignSelf: 'center', width: '100%' }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{ uri: "https://www.youtube.com/embed/_N-ScngsApY" }}
                />
            </View>

            <SafeAreaView style={props.valor ? styles.dark : styles.light}>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"} Além da chegada para consoles, o game também terá versões físicas. A Crewmate Edition de Among Us
                    incluirá o jogo, seus DLCs e extras como papéis de parede para download, pôster do mapa Skeld e cartão
                    holográfico por US$ 29,99 (em torno de R$ 169) a partir de 11 de janeiro de 2022 na América Latina.
                    No outono de 2022, a Imposter Edition será lançada por US$ 49,99 (por volta de R$ 282) e trará o
                    conteúdo da Crewmate Edition, além de um broche "Spinning into Space", um cordão e uma pelúcia do
                    tripulante roxo. Já a Ejected Edition sai por US$ 89,99 (aproximadamente R$ 505) e traz o conteúdo
                    anterior, mais uma caixa padrão steelbook, uma manta temática e um gorro do tripulante vermelho.
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"} Among Us é um game multiplayer onde uma tripulação precisa realizar a manutenção de uma nave ou base espacial
                    enquanto há um ou mais impostores infiltrados entre eles. Se todos conseguirem realizar suas tarefas, a tripulação
                    vence, mas se durante o processo o impostor conseguir eliminá-los, os inimigos vencem. A maior parte da diversão
                    está nas discussões para tentar descobrir quem é o infiltrado, com intrigas e manipulação.
                </Text>

            </SafeAreaView>
        </ScrollView>
    );
}
function Not23(props) {

    return (
        <ScrollView>
            <SafeAreaView style={props.valor ? styles.dark : styles.light}>
                <Image style={styles.imagem} source={require('./assets/Pub.jpg')} />
                <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginRight: 10, marginLeft: 10 }]}>
                    PUBG New State será lançado para dispositivos móveis em novembro
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"} A sequência de PUBG: Battlegrounds chamada PUBG: New State será lançada para dispositivos
                    Android e iOS em 11 de novembro.
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"} Desenvolvido pela mesma empresa do jogo original, o novo game gratuito
                    baseado em temporadas será lançado em 200 países e estará disponível em 17 idiomas.
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"} De acordo com a Krafton, mais de 50 milhões de usuários móveis pré-registraram seu interesse no
                    título. Ele será ambientado em 2051 e terá quatro mapas no lançamento, incluindo Troi e
                    o campo de batalha original da franquia, Erangel.
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"} A data de lançamento foi anunciada, junto com vários recursos,
                    durante uma apresentação de mídia de 50 minutos nesta sexta-feira (22).
                </Text>
            </SafeAreaView>
            <View style={[props.valor ? style.black : style.white, { height: 230, marginTop: 20, marginLeft: 5, marginRight: 5 }]}>
                <WebView
                    style={{ alignSelf: 'center', width: '100%' }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{ uri: "https://www.youtube.com/embed/VDyFgXSk0o8" }}
                />
            </View>
            <SafeAreaView style={props.valor ? styles.dark : styles.light}>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"} Eles disseram que os principais recursos incluem um sistema de armas de fogo “no mesmo nível do que
                    é encontrado na versão para PC” de PUBG, um foco na personalização de armas, um sistema de recrutamento
                    de jogadores exclusivo e o mercado da loja Drone do jogo.
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"} Um teste técnico final para o jogo será realizado de 29 a 30 de outubro em 28 países
                    da Europa, Ásia e Oriente Médio.
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"}Também já foi afirmado que a sequência de PUBG também será direcionada para consoles e PC em 2022. Além disso,
                    The Callisto Protocol, o jogo
                    de survival horror ambientado no universo PUBG, também tem lançamento previsto para o próximo ano.
                </Text>
            </SafeAreaView>
        </ScrollView>
    );
}
function Not24(props) {

    return (
        <ScrollView>
            <SafeAreaView style={props.valor ? styles.dark : styles.light}>
                <Image style={styles.imagem} source={require('./assets/halo.jpg')} />
                <Text style={[props.valor ? styles.textblack : styles.textlight, { fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginRight: 10, marginLeft: 10 }]}>
                    ‘Halo’: serviços online da franquia no Xbox 360 serão fechados em janeiro de 2022
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"}Em comunicado oficial, a Microsoft e a ‎343 Industries confirmaram que os servidores online para vários
                    jogos de ‘Halo‘ no Xbox 360 serão fechados no dia 13 de janeiro de 2022. A decisão é um pequeno adiamento em
                    comparação a data anterior, 18 de dezembro de 2021, que havia sido anunciada no ano passado.‎
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"}Os títulos que sofrerão com o encerramento são: ‘Halo 3’, ‘Halo 3: ODST’, ‘Halo 4’, ‘Halo: Combat Evolved
                    Anniversary’, ‘Spartan Assault’ e ‘Halo Wars’. Obviamente, você ainda poderá aproveitá-los de forma offline.
                    “Todo o tempo investido em manter e suportar os títulos Xbox 360 de ‘Halo’ é tempo que não estamos a investir
                    no futuro da série”, explicou o estúdio 343 Industries.
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"} ‎”Até o momento, fizemos malabarismos com o trabalho e as prioridades futuras com a manutenção contínua dos
                    serviços de ‘Halo’ no Xbox 360. A manutenção desses serviços hoje requer tempo e recursos significativos que
                    impactam diretamente nossa capacidade de apoiar projetos atuais e futuros, como ‘Halo: The Master Chief Collection’
                    e ‘‎‎Halo Infinite'”, detalhou a desenvolvedora.
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"} “Quem tiver estes jogos [de Xbox 360], poderá continuar a jogá-los indefinidamente, contudo,
                    algumas funcionalidades online, bem como algumas experiências, em particular o matchmaking online,
                    serão limitadas ou desligadas”, concluiu o anúncio da 343 Industries.
                </Text>

                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"} O próximo título da franquia, ‘Halo Infinite’, tinha lançamento marcado para novembro de 2020 nos novíssimos Xbox
                    Series X/S, mas foi posteriormente adiado para dia 8 de dezembro de 2021. A campanha do jogo será lançada juntamente
                    com a componente free-to-play multiplayer.
                </Text>
                <Text style={[props.valor ? styles.textblack : styles.textlight, { marginTop: 10, fontSize: 21, textAlign: 'justify', marginLeft: 8, marginRight: 8 }]}>
                    {"\t"}De acordo com a descrição oficial do game, “Os Banidos derrotaram as forças da UNSC e assumiram o
                    controle do misterioso Zeta Halo, ameaçando a sobrevivência da humanidade. Quando toda a esperança parece
                    perdida, Master Chief retorna para enfrentar o inimigo mais implacável que já viu”. Confira o trailer abaixo:
                </Text>
            </SafeAreaView>
            <View style={[props.valor ? style.black : style.white, { height: 230, marginTop: 20, marginLeft: 5, marginRight: 5, marginBottom: 30 }]}>
                <WebView
                    style={{ alignSelf: 'center', width: '100%' }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{ uri: "https://www.youtube.com/embed/XCbMVbeKlCg" }}
                />
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

export { Not13, Not14, Not15, Not16, Not17, Not18, Not19, Not20, Not21, Not22, Not23, Not24 }