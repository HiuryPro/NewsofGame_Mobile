import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView } from "react-native";
import { TextInput } from "react-native-gesture-handler";


function Especificacoes() {
    return (
        <ScrollView>
            <View style={{ backgroundColor: '#010409' }}>
                <View style={styles.container}>
                    <Image source={{ uri: 'https://i.ytimg.com/vi/5lWBQx9cSU4/maxresdefault.jpg' }} style={styles.img} />
                    <Text style={styles.textoGeral}>
                        Processador: octa-core AMD de arquitetura Zen 2 (7 nm), com clock de até 3,5 GHz; {'\n'}{'\n'}
                        Chip gráfico: GPU customizada RDNA 2 com 36 unidades computacionais, clock de até 2,23 GHz e 10,28 Tflop/s;
                        Memória RAM: 16 GB GDDR6; {'\n'}{'\n'}
                        Largura de banda da RAM: 448 GB/s; {'\n'}{'\n'}
                        Taxa de transferência da RAM: 14 GB/s; {'\n'}{'\n'}
                        Armazenamento interno: SSD customizado de 825 GB, barramento de 12 canais e controlador PCI Express 4.0,
                        com taxa de transferência de 5,5 GB/s (tamanho original) ou 8,9 GB/s (compactado); {'\n'}{'\n'}
                        Armazenamento expansível: Compatível com SSDs NVMe; {'\n'}{'\n'}
                        Armazenamento externo: suporte a unidades externas via porta USB; {'\n'}{'\n'}
                        Drive óptico: leitor de discos Blu-ray 4K UHD; {'\n'}{'\n'}
                        Reprodução de gráficos: Suporte a ray tracing; {'\n'}{'\n'}

                        {'\n'}
                        Em última análise, é seguro afirmar que a Sony ainda não fechou o projeto e especificações finais do PS5,
                        logo, maiores detalhes e o design final (que definitivamente não deverá ser igual ao do dev kit feioso
                        em forma de "V") deverão ser revelados nos próximos meses.

                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}

function Controle() {
    return (
        <ScrollView>
            <View style={{ backgroundColor: '#01010B' }}>
                <View style={styles.container}>
                    <Image source={{ uri: 'https://t2.tudocdn.net/573428?w=1200&h=900' }} style={styles.img} />
                    <Text style={styles.textoTítulo}>Funciona no PlayStation 4?</Text>
                    <Text style={styles.textoGeral}>
                        O DualSense conta com algumas similaridades em relação ao DualShock 4, controle do PS4, o que leva muitos jogadores a se perguntarem se o controle é compatível com o antigo console da Sony. A verdade é que o DualSense não é suportado pelo PS4.{'\n'}{'\n'}
                        É até possível conectar o joystick ao console via Bluetooth, mas ele não responde aos comandos. Um "truque" encontrado pelos usuários para usar o controle no PS4 foi via Remote Play, com o DualSense conectado diretamente ao computador.
                    </Text>

                    <Text style={styles.textoTítulo}>Microfone embutido</Text>
                    <Text style={styles.textoGeral}>
                        Uma das novidades do DualSense é a inclusão de um microfone embutido, que pode tanto ser usado por games que requerem algum tipo de comando de voz, como para o próprio sistema de chat do PlayStation 5.{'\n'}{'\n'}
                        A qualidade não é compatível a de headsets dedicados, mas a função é útil. Vale lembrar que o controle também tem um novo botão de mute, que permite cortar completamente as fontes de áudio do console.
                    </Text>
                    <Image source={{ uri: 'https://s2.glbimg.com/mos-V1ktPJFa8zWY-qN4aQYEYPE=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/n/4/kpmaJTRkOhP9E9ym8hYw/mic.jpg' }} style={styles.img} />

                    <Text style={styles.textoTítulo}>Personalização de botões</Text>
                    <Text style={styles.textoGeral}>
                        Além de ser usado como uma alternativa para aqueles que gostam de customizar sua experiência nos games (considerando que tem todos os títulos têm uma ferramenta dedicada para edição de botões), o sistema de personalização de comandos do DualSense no PS5 também tem como missão a acessibilidade.{'\n'}{'\n'}
                        Com isso é possível mapear cada um dos botões do controle diretamente pelo sistema do PS5 e alterar a posição de comandos. Outra boa funcionalidade da ferramenta é contornar possíveis defeitos com botões, que podem ser reconfigurados.
                    </Text>

                    <Text style={styles.textoTítulo}>Ajuste na intensidade das vibrações (geral e gatilhos)</Text>
                    <Text style={styles.textoGeral}>
                        O sistema de feedback do controle e dos gatilhos do DualSense é uma das grandes novidades do PS5, mas pode incomodar alguns jogadores, seja pelo vigor da vibração ou pela dificuldade em pressionar os gatilhos em alguns momentos.{'\n'}{'\n'}
                        Felizmente, é possível ajustar a intensidade das vibrações e respostas, ou até mesmo desligá-las completamente, direto pelo sistema do PS5. Isso ainda aumentará significativamente a duração de cada carga de bateria do DualSense.
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}

function Graficos() {
    return (
        <ScrollView>
            <View style={{ backgroundColor: '#01010B' }}>
                <View style={styles.container}>
                    <Text style={styles.textoTítulo}>Resolução</Text>
                    <Text style={styles.textoGeral}>
                        Resoluções dinâmicas se tornaram bastante frequentes desde a última geração de consoles, e Dirt 5 utiliza tecnologia para equilibrar sua carga com o hardware dos consoles. No PS5, o jogo mira em 4K (3840 x 2160), mas a resolução pode variar de acordo com o número de elementos na tela, chegando a 1440P (2560 x 1440). Uma das alternativas para quando isso acontece é selecionar o "Modo Resolução" nas opções do jogo, que desliga alguns dos detalhes gráficos para priorizar o aspecto do game. A configuração funciona bem, fazendo com que Dirt 5 rode praticamente "cravado" em 4K.{'\n'}{'\n'}
                        Já no PlayStation 4, o alvo é 1080p (1920 x 1080), com a resolução variando até a casa dos 900p (1600 × 900). No PS4 Pro, o modo que prioriza a qualidade, que também está disponível para os consoles de antiga geração, a resolução varia entre 1800p (3200 x 1800) e 1440p (2560 x 1440), mas tem queda no FPS.
                    </Text>
                    <Image source={{ uri: 'https://s2.glbimg.com/cV5P_ss2QmcA4w75e0RzY9K0K7U=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/T/f/KLd1jvStakwrnAiaz1uw/2021-01-21-12-07-10-greenshot.png' }} style={styles.imgG1} />

                    <Text style={styles.textoTítulo}>Detalhamento gráfico</Text>
                    <Text style={styles.textoGeral}>
                        A principal diferença entre as versões de Dirt 5 está no detalhamento gráfico do jogo, que é muito superior no PlayStation 5. Desde os efeitos de chuva e iluminação até as texturas dos carros e dos terrenos, tudo é mais caprichado no PS5. Além disso, os aspectos podem ficar ainda melhores de acordo com o modo de qualidade habilitado, que sacrifica performance para tornar o game mais bonito.{'\n'}{'\n'}
                        No PS4, além da ausência de alguns efeitos, há elementos que são completamente removidos dos cenários, como pequenas árvores, poças e regiões com grama. Carros e outros objetos têm mais serrilhados também, e a geometria de partes das pistas foram simplificadas para permitir que o título rode bem no antigo aparelho.
                    </Text>

                    <Text style={styles.textoTítulo}>Ray Tracing</Text>
                    <Text style={styles.textoGeral}>
                        Assim como diversos outros jogos da nova geração, Dirt 5 tem a tecnologia de Ray Tracing aplicada às suas versões para PS5, Xbox Series X/S e PC. Os efeitos podem ser vistos com clareza nas poças espalhadas pelo terreno acidentado das pistas, que acumulam água em diversos pontos, e na própria lataria dos veículos e seus vidros também..{'\n'}{'\n'}
                        O efeito é discreto, mas garante uma experiência visual mais agradável para os jogadores. Quando comparado lado a lado com a versão da antiga geração, fica claro o impacto dos reflexos com a tecnologia, que cria gráficos mais realistas e competentes para o game de corrida.
                    </Text>
                    <Image source={{ uri: 'https://manualdosgames.com/wp-content/uploads/2020/10/Spiderman.jpg' }} style={styles.imgG1} />
                </View>
            </View>
        </ScrollView>
    )
}

function SeriesX() {
    return (
        <ScrollView>
            <View style={{ backgroundColor: '#9BF00D' }}>

                <View style={styles.container}>
                    <Text style={styles.textoTítulo2}>Ficha Técnica</Text>
                    <Text style={styles.textoGeral2}>
                        Processador:{'\n'}Octa-core AMD de arquitetura Zen 2 (7 nm), com clock fixo de 3,8 GHz (3,66 GHz com Hyper-Threading ligado, usando 8 núcleos e 16 threads);{'\n'}{'\n'}
                        Chip gráfico:{'\n'}GPU customizada RDNA 2 com 56 unidades computacionais (52 funcionais), 3.584 shaders (3.328 funcionais), clock fixo de 1,825 GHz e 12 Tflop/s;{'\n'}{'\n'}
                        Memória RAM:{'\n'}16 GB GDDR6 (6 chips de 2 GB e 4 de 1 GB);{'\n'}{'\n'}
                        Largura de banda da RAM:{'\n'}10 GB a 560 GB/s (jogos), 6 GB a 336 GB/s (tarefas básicas em jogos e SO);{'\n'}{'\n'}
                        Taxa de transferência da RAM:14 GB/s;{'\n'}{'\n'}
                        Armazenamento interno:{'\n'}SSD NVMe personalizado de 1 TB, com taxa de transferência de 2,4 GB/s (tamanho original) ou 4,8 GB/s (compactado);{'\n'}{'\n'}
                        Armazenamento expansível:{'\n'}unidade de expansão proprietária opcional de 1 TB, desenvolvida em parceria com a Seagate;{'\n'}{'\n'}
                        Armazenamento externo:{'\n'}suporte a unidades externas via porta USB (incompatível com jogos);{'\n'}{'\n'}
                        Drive óptico:{'\n'}leitor de discos Blu-ray 4K UHD;{'\n'}{'\n'}
                        Reprodução de gráficos:{'\n'}4K a 60 fps real (base), suporte a 120 fps (resolução não informada) e ray tracing;{'\n'}{'\n'}
                        Portas:{'\n'}HDMI 2.1, três USB 3.2 Type-A (1 frontal e 2 traseiras), Ethernet Gigabit, PCI Express 4.0 para placa de expansão proprietária, trava de segurança Kensington;{'\n'}{'\n'}
                        Sistema operacional:{'\n'}Windows 10.{'\n'}
                    </Text>
                    <Image source={{ uri: 'https://compass-ssl.xbox.com/assets/f0/85/f085c120-d3d5-4424-8b70-eb25deaa326e.png?n=XBX_A-BuyBoxBGImage01-D.png' }} style={styles.imgX} />
                </View>

            </View>
        </ScrollView>
    )
}

function EvolucaoPS() {
    return (
        <ScrollView>
            <View>
                <ImageBackground source={{ uri: 'https://media.istockphoto.com/photos/background-navy-blue-black-grunge-textured-abstract-stucco-concrete-picture-id1287121458?b=1&k=20&m=1287121458&s=170667a&w=0&h=fpITYs5xkVcmHk91kVRDullhDHhZ-f6QpEfTJCVYnSI=' }} style={styles.background} />

                <View style={styles.container}>
                    <Text style={styles.textoTítulo}>PlayStation, a evolução de um gigante dos games!</Text>
                    <Image source={{ uri: 'http://guiadecompras.casasbahia.com.br/imagens/2017/06/historia-sucesso-vitorias-capa-768x434.jpg' }} style={styles.imgA} />
                    <Text style={styles.textoGeral}>
                        A história do PlayStation nos leva em uma nostálgica viagem no tempo para o início dos anos 90, período marcado pela guerra entre os consoles de 16 bits, Mega Drive e o Super Nintendo. O fim dessa geração marca o começo de uma era mais tecnológica e brilhante em todos os detalhes, principalmente em função dos gráficos dos jogos em 3D, que passaram a ser uma tendência a partir dessa época.
                    </Text>
                    <Text style={styles.textoGeral}>
                        Antes do surgimento do PSOne, como o PlayStation passou a ser popularmente chamado, a Nintendo e a Sony tinham uma parceria com a intenção de criar uma expansão do Super NES que aceitasse o uso de CDs no lugar dos famosos “cartuchos” do período.
                    </Text>
                    <Text style={styles.textoGeral}>
                        A Nintendo decidiu cancelar o projeto, pois dizia que o uso de discos a laser deixava mais demorado o carregamento do game, com o tempo de “loading” atrapalhando a experiência do jogador. Em compensação, a Sony decidiu dar sequência ao projeto de maneira solitária, apostando no uso de um videogame com CDs para os jogos.
                    </Text>
                    <Text style={styles.textoGeral}>
                        Diferente de tudo o que existia em relação ao mercado de jogos, a Sony lançou em dezembro de 1994, o PlayStation, decretando o fim da geração de 16 bits. Viabilizando ainda mais o projeto, o uso de um CD como mídia de jogo deixava o desenvolvimento do console bem mais barato que os cartuchos do SNES e do Mega Drive. Mas sem dúvida que a principal diferença estava na capacidade de armazenamento. Os cartuchos armazenavam até 64 MB contra os 750 MB dos CDs.
                    </Text>
                    <Text style={styles.textoGeral}>
                        Essa alteração do espaço permitiu a inserção das animações renderizadas nas aberturas dos jogos, além de sons mais realistas. Outra funcionalidade estava no fato de o console permitir rodar CDs de música, característica que fez muita diferença quando a família iria escolher comprar ou não o videogame. E como fazer para salvar o progresso durante os jogos? A Sony resolveu isso com a utilização de um cartão de memória chamado Memory Card, que tinha 1 MB de espaço em seu lançamento. Pode parecer pouco, mas era de muita utilidade na época.
                    </Text>


                    <Text style={styles.textoTítulo}>Uma década de êxito e diversão!</Text>
                    <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/9/95/PSX-Console-wController.png' }} style={styles.imgB} />
                    <Text style={styles.textoGeral}>
                        De grande sucesso e longevidade, o PSOne durou 10 anos, encerrando sua produção no final de 2004. Os jogos ainda tiveram uma duração um pouco maior, até março de 2006 com quase 1 bilhão de unidades vendidas durante todo o período de vida, segundo dados do VGChartz, um site especializado em games. Já o console foi o primeiro a ultrapassar os 100 milhões de unidades adquiridas, após 9 anos de seu lançamento.
                    </Text>
                    <Text style={styles.textoGeral}>
                        Graças à maior capacidade da mídia do PlayStation, os estúdios que desenvolviam os jogos passaram a criar franquias exclusivas, como os clássicos Final Fantasy, Metal Gear Solid e Resident Evil. Além disso, outro fator de peso e que atraiu ainda mais os fanáticos gamers foi a introdução de títulos com uma temática mais adulta e a presença de sangue em muitos títulos, por exemplo.
                    </Text>
                    <Text style={styles.textoGeral}>
                        Também não se pode deixar de falar da introdução do joystick do PSOne, com muito mais botões e um formato ergonômico. Uma baita diferença para quem estava acostumado a se divertir com três ou no máximo seis botões, para os jogos de luta. Agora seriam botões com símbolos (quadrado, círculo, triângulo e xis) e mais dois localizados na frente do controle (L2 e R2), além de outros dois direcionais analógicos e a função vibração embutida. Entre os títulos mais vendidos do PS One destacam-se: Gran Turismo, Final Fantasy VII, Gran Turismo 2, Final Fantasy VIII e Crash Bandicoot 2.
                    </Text>

                    <Text style={styles.textoTítulo}>PlayStation 2</Text>
                    <Image source={{ uri: 'https://img.olhardigital.com.br/wp-content/uploads/2020/03/20200304052306.jpg' }} style={{ borderRadius: 20, justifyContent: "center", width: '100%', height: 200, marginBottom: 10 }} />
                    <Text style={styles.textoGeral}>
                        Lançado no final do ano 2000, o PlayStation 2 tinha a dura missão de perpetuar o grandioso sucesso conquistado pelo PSOne frente aos jogadores. E conseguiu isso com louvor, ultrapassando todos os recordes de vendas do console anterior. Ao funcionar com mídias de DVD, permitia que o PS2 fosse usado como um player para assistir aos filmes, evidenciando uma utilização adicional, além da diversão com os jogos.
                    </Text>
                    <Text style={styles.textoGeral}>
                        Com a intenção de permanecer como líder de vendas no segmento, a Sony investiu pesado nas franquias exclusivas, como Tomb Raider, GTA, Final Fantasy, Winning Eleven e Gran Turismo. Consolidada na liderança, seus principais concorrentes nem eram os videogames da época, como o Xbox (Microsoft) e o GameCube (Nintendo), mas sim os jogos para o PC.
                    </Text>
                    <Text style={styles.textoGeral}>
                        Com a maior biblioteca da história de um videogame, o PlayStation 2 pode ser considerado um imortal dos consoles. O fim da produção só ocorreu em janeiro de 2013, totalizando quase 13 anos de vida. Com mais de 150 milhões de unidades vendidas, está no Livro dos Recordes como o console mais vendido de todos os tempos.
                    </Text>
                    <Text style={styles.textoGeral}>
                        Com opções para todos os estilos e gêneros, o PlayStation 2 tem títulos memoráveis como: God of War, onde o guerreiro Kratos disputa batalhas inesquecíveis e inteligentes puzzles; Shadow of the Colossus, considerado um dos melhores jogos de todos os tempos, com gráficos incríveis, batalhas colossais em um clima épico; Gran Turismo, uma série de corrida que já fazia grande sucesso no PSOne; Devil May Cry, considerado um ícone do gênero com combos e personagens carismáticos; Final Fantasy X, o famoso RPG conhecido por seus belos gráficos, campanhas divertidas e envolventes; Metal Gear Solid 3: SnakeEater, considerado o principal título da franquia e que causou mais estardalhaço entre os fãs; Ratchet & Clank, que possui um visual cheio de cor, efeitos sonoros envolventes e personagens engraçados, tornando-o bem popular entre os jogadores.
                    </Text>


                    <Text style={styles.textoTítulo}>PlayStation 3</Text>
                    <Image source={{ uri: 'https://s2.glbimg.com/Iir6PWFtp1LSRp-tB14f0AvcVFs=/0x0:800x571/984x0/smart/filters:strip_icc()/s.glbimg.com/po/tt2/f/original/2017/02/11/ps3-home.jpg' }} style={{ borderRadius: 20, justifyContent: "center", width: '100%', height: 200, marginBottom: 10 }} />
                    <Text style={styles.textoGeral}>
                        Surgindo no final de 2006, o PlayStation 3 tinha o difícil trabalho de disputar o mercado de jogos contra o Nintendo Wii e o Xbox 360, da Microsoft, além de tentar continuar com o sucesso do antecessor. O PS3 trouxe de inovador uma plataforma completamente online, chamada PlayStation Network ou PSN, em que o usuário podia comprar jogos pela PSN, além da migração do uso de DVD para os discos em Blu-Ray, causando um aumento absurdo de capacidade para 50 GB de conteúdo.
                    </Text>
                    <Text style={styles.textoGeral}>
                        Com um HD interno em todos os modelos, o PS3 permitia que você gravasse os save games, vídeos, músicas e até a possibilidade de ter jogos via download. Segundo a Sony, o PlayStation 3 tinha a missão de se tornar o centro de entretenimento de sua casa. Para fazer diversas funções com o aparelho, além de se divertir com os jogos. O único empecilho ao ser lançado foi o alto preço frente aos concorrentes da mesma geração.
                    </Text>
                    <Text style={styles.textoGeral}>
                        Com suporte para a alta definição, principalmente em razão de sua mídia em Blu-Ray, o PS3 contava com saída HDMI, que permitia uma resolução de até 1080 pixels. O joystick, chamado DualShock 3, passou por algumas alterações significativas, das quais se destacam o sensor de movimento, o motor de vibração e o fato de ser sem fio, facilitando ainda mais a jogabilidade.
                    </Text>
                    <Text style={styles.textoGeral}>
                        A produção do console foi encerrada em março de 2017, com algumas alterações de estrutura e performance durante “sua vida”. Uma das principais mudanças foi o formato modelo Slim (32% menor e 36% mais leve), além de um processador mais silencioso e refrigerado, diminuindo o consumo de energia e os riscos de aquecimento.
                    </Text>
                    <Text style={styles.textoGeral}>
                        A diversidade de jogos exclusivos permaneceu como grande aposta da Sony, fazendo a diferença em sua guerra particular contra o Xbox 360. Merece destaque: a trilogia God of War, os títulos de Final Fantasy, as sequências de Uncharted e Killzone, o consagrado Assassin’s Creed, Gran Turismo 5, Heavy Rain, Metal Gear Solid 4, The Last Guardian, entre outros.
                    </Text>

                    <Text style={styles.textoTítulo}>PlayStation 4</Text>
                    <Image source={{ uri: 'http://guiadecompras.casasbahia.com.br/imagens/2017/06/playstation-4-sony-8gb-memoria-768x354.jpg' }} style={{ borderRadius: 20, justifyContent: "center", width: '100%', height: 200, marginBottom: 10 }} />
                    <Text style={styles.textoGeral}>
                        Pequeno quando comparado à primeira versão do PS3 e com um visual elegante, o PS4 teve uma grandiosa repaginada com uma navegação mais rápida e sem dificuldade. Graças à funcionalidade multitarefas, é possível realizar funções simples, como a configuração da rede sem interromper o jogo.
                    </Text>
                    <Text style={styles.textoGeral}>
                        O poderoso videogame da Sony conta com processadores personalizados de 8 GB de memória, o que representa um ambiente perfeito para a melhor experiência com gráficos complexos e de alta fidelidade. Envolvente e dinâmico em todos os sentidos!
                    </Text>
                    <Text style={styles.textoGeral}>
                        Mantendo o Blu-Ray como mídia física para os jogos, o console permite que muitos jogos também sejam adquiridos online, diretamente pela PlayStation Store. Com 500 GB de espaço mínimo no HD, há espaço de sobra para seus jogos. Para facilitar, o download pode ser feito até mesmo com o console em stand by, não necessitando deixá-lo ligado durante uma madrugada, por exemplo.
                    </Text>
                    <Text style={styles.textoGeral}>
                        Quanto ao joystick, o Dualshock 4 tem como principal novidade um painel de toque em sua parte central, que poderá ser usado em jogos que tiverem essa disponibilidade. Os analógicos estão mais confortáveis e levemente mais afastados, além da superfície mais saliente.Outra diferença significativa é o carregamento da bateria do controle em modo de espera. O Dualshock 4 possui uma barra luminosa que identifica os jogadores para as disputas online, além de mostrar, dependendo do jogo, a energia de seu personagem. Começa mostrando a cor verde, depois altera para o amarelo e, quando chega ao vermelho, indica estado crítico da vida.
                    </Text>
                    <Text style={styles.textoGeral}>
                        A inclusão do botão Share no joystick facilita para quem costuma compartilhar imagens e vídeos de seus jogos, aumentando as funcionalidades sociais da plataforma. Um simples toque na função já irá capturar a tela e ainda armazenar os últimos 15 minutos de jogo. Para definir um ponto para o início da gravação, basta realizar um clique duplo. O material capturado é encontrado em seu perfil diretamente no console.
                    </Text>
                    <Text style={styles.textoGeral}>
                        No que diz respeito aos jogos do PS4, a Sony permanece com a exclusividade para determinadas franquias, uma forte característica da plataforma. Destaque para Uncharted 4, The Last Guardian, Horizon: Zero Dawn, Infamous Second Son, Bloodborne, Destiny, Metal Gear Solid IV: The Phantom Pain e The Witcher 3: Wild Hunt.
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}



function SeriesS() {
    return (
        <ScrollView>
            <View style={{ backgroundColor: '#9BF00D' }}>

                <View style={styles.container}>
                    <Text style={styles.textoTítulo2}>Ficha Técnica</Text>
                    <Text style={styles.textoGeral2}>
                        PROCESSADOR{'\n'}{'\n'}
                        CPU: CPU Zen 2 personalizada de 8X Cores @ 3,6 GHz (3,4 GHz com SMT){'\n'}
                        GPU: GPU RDNA 2 personalizado de 4 TFLOPS, 20 CUs @1.565 GHz{'\n'}{'\n'}
                        MEMÓRIA E ARMAZENAMENTO{'\n'}{'\n'}
                        Memória: GDDR6 de 10 GB e barramento de 128 bits{'\n'}
                        Largura de banda de memória: 8GB a 224 GB/s, 2GB a 56 GB/s.{'\n'}
                        Armazenamento interno: SSD NVME personalizado de 512 GB{'\n'}
                        Taxa de transferência de E/S: 2,4 GB/s (Raw), 4,8 GB/s (compactado, com bloco de descompressão de hardware personalizado){'\n'}
                        Taxa de transferência de E/S: 2,4 GB/s (Raw), 4,8 GB/s (compactado, com bloco de descompressão de hardware personalizado){'\n'}{'\n'}
                        RECURSOS DE VÍDEO{'\n'}{'\n'}
                        Resolução de jogos: 1440p{'\n'}
                        Meta de desempenho: Até 120 FPS{'\n'}
                        Recursos HDMI: Modo automático de baixa latência. Taxa de atualização variável HDMI. AMD FreeSync.{'\n'}{'\n'}
                        CAPACIDADES DE SOM{'\n'}{'\n'}
                        L-PCM, até 7.1{'\n'}
                        Dolby Digital 5.1{'\n'}
                        DTS 5.1{'\n'}
                        Dolby TrueHD com Atmos{'\n'}{'\n'}
                        DESIGN
                    </Text>
                    <Image source={{ uri: 'https://compass-ssl.xbox.com/assets/c9/82/c9827ca6-83ee-457e-b33b-1c1a350efb57.png?n=0202999-BuyBox01_Image-D.png' }} style={styles.imgS} />
                    <Text>
                        Dimensões: 6,5 cm x 15,1 cm x 27,5cm{'\n'}
                        Peso: 1,93 kg
                    </Text>
                </View>

            </View>
        </ScrollView>
    )
}

function ControleX() {
    return (
        <ScrollView>
            <View style={{ backgroundColor: '#9BF00D' }}>

                <View style={styles.container}>
                    <Text style={styles.textoTítulo2}>Controle sem fio Xbox</Text>
                    <Text style={styles.textoGeral2}>
                        Experimente o design modernizado do Controle Sem Fio Xbox, com superfícies esculpidas e geometria refinada para melhorar o conforto durante os jogos. Permaneça no alvo com o gatilho texturizado e botões direcionais híbridos. Capture e compartilhe conteúdo de forma simples com um botão Compartilhar dedicado. Emparelhe, jogue e alterne rapidamente entre dispositivos, incluindo Xbox Series X|S, Xbox One, PC com Windows 10, Android e iOS{'\n'}
                    </Text>
                    <Image source={{ uri: 'https://compass-ssl.xbox.com/assets/34/6c/346cc0fa-2da8-47f1-b280-2760f40730b3.jpg?n=111101_Gallery-0_5_1350x759.jpg' }} style={styles.imgG1} />
                </View>

                <View style={styles.container}>
                    <Text style={styles.textoTítulo2}>Botão compartilhar dedicado</Text>
                    <Text style={styles.textoGeral2}>
                        Capture e compartilhe com facilidade conteúdo como capturas de tela, gravações e mais com o novo botão Compartilhar.
                    </Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.textoTítulo2}>Fique atento no alvo</Text>
                    <Text style={styles.textoGeral2}>
                        Fique atento no alvo com os novos botões direcionais híbridos, melhor aderência com texturas nos gatilhos, botões e no revestimento traseiro.{'\n'}
                    </Text>
                    <Image source={{ uri: 'https://compass-ssl.xbox.com/assets/ba/1d/ba1d71f1-4989-4c56-8e6a-4db7330eed05.jpg?n=111101_3-up-0_Center_454x523.jpg' }} style={styles.imgG1} />
                </View>

                <View style={styles.container}>
                    <Text style={styles.textoTítulo2}>Compatibilidade</Text>
                    <Text style={styles.textoGeral2}>
                        Inclui a tecnologia sem fio Xbox e Bluetooth® para jogos sem fio no console, PC, em telefones celulares e tablets. Conecte qualquer fone de ouvido compatível com a entrada de fone de ouvido estéreo de 3,5 mm.
                    </Text>
                </View>

            </View>
        </ScrollView>
    )
}
function EvolucaoX() {
    return (
        <ScrollView>
            <View>
                <ImageBackground source={{ uri: 'https://media.istockphoto.com/vectors/abstract-green-background-geometric-texture-vector-id1219406915?b=1&k=20&m=1219406915&s=612x612&w=0&h=fTLAW4HNp0CRnmVYWYDKpXer_uwRNWfVOvb-8ln2ie4=' }} style={styles.background} />

                <View style={styles.container}>
                    <Text style={styles.textoTítulo2}>Xbox</Text>
                    <Image source={{ uri: 'https://pbs.twimg.com/media/DsD9AnKU8AAS8to?format=jpg&name=large' }} style={{ borderRadius: 20, justifyContent: "center", width: '100%', height: 150, marginBottom: 10 }} />
                    <Text style={styles.textoGeral2}>
                        O Xbox é um console de vídeo game produzido pela Microsoft. Foi lançado em 15 de novembro de 2001 na América do Norte, 22 de fevereiro de 2002 no Japão, e 14 de Março de 2002 na Austrália e Europa. Foi a primeira incursão da Microsoft no mercado de vídeo games. Como parte da sexta-geração de jogos, o Xbox competiu com Sony PlayStation 2, Sega Dreamcast (que parou as vendas americanas antes que o Xbox fosse colocado à venda) e o Nintendo GameCube. O Xbox foi o primeiro console oferecido por uma empresa norte-americana após o Atari Jaguar parar as vendas em 1996. O nome Xbox foi derivado a partir de uma contração da caixa "DirectX Box", uma referência a Microsoft.
                    </Text>
                    <Text style={styles.textoGeral2}>
                        O serviço integrado Xbox Live foi lançado em novembro de 2002 e permitiu que os jogadores jogassem jogos online com uma conexão de banda larga. Ele competiu pela primeira vez com o serviço online do Dreamcast, mas depois competiu principalmente com serviço online do PlayStation 2. Embora esses dois são gratuitos, enquanto o Xbox Live exigida uma assinatura, bem como somente conexão de banda larga, que ainda não foi completamente adotado. Xbox Live foi um sucesso devido ao melhor servidor, e recursos como uma lista de amigo e conquistas de títulos e etc.
                    </Text>

                    <Text style={styles.textoTítulo2}>Xbox 360</Text>
                    <Image source={{ uri: 'https://cdn.wallpapersafari.com/76/43/TpqLV4.png' }} style={{ borderRadius: 20, justifyContent: "center", width: '100%', height: 250, marginBottom: 10 }} />
                    <Text style={styles.textoGeral2}>
                        O Xbox 360 é o segundo console de videogame desenvolvido e produzido pela Microsoft e sendo o sucessor do Xbox. O Xbox 360 concorreu com Sony PlayStation 3 e Nintendo Wii, como parte da sétima geração de consoles de videogame. Em 30 de setembro 2012, 70 milhões de cópias do console foram vendidas em todo o mundo. O Xbox 360 foi apresentado oficialmente na MTV em 12 de maio de 2005, com o lançamento detalhado e informações dos jogos divulgados no final daquele mês, no Electronic Entertainment Expo (E3). O console esgotou completamente após a liberação em todas as regiões, exceto no Japão.
                    </Text>
                    <Text style={styles.textoGeral2}>
                        Uma de suas melhores características principais são o seu serviço integrado Xbox Live que permite aos jogadores competirem online; fazer download de jogos arcade, demos de jogos, trailers, shows de TV, música e filmes, e capacidades multimédias Windows Media Center.
                    </Text>
                    <Text style={styles.textoGeral2}>
                        O console apresentou problemas durante os primeiros anos de lançamento devido a uma falha de arquitetura que causava superaquecimento e morte do equipamento. Esse efeito que atingiu boa parte dos produtos ficou popularmente conhecido como os 3 anéis da morte (RRoD, do inglês Red Rings of Death).
                    </Text>
                    <Text style={styles.textoGeral2}>
                        Em sua apresentação na E3 de 14 de junho de 2010, a Microsoft anunciou um redesenhamento do Xbox 360, que seria lançado no mesmo dia. O console redesenhado é mais fino que o modelo anterior Xbox 360 e recursos integrados 802.11 b/g/n]Wi-Fi, TOSLINK S/PDIF saída de áudio óptica, cinco portas USB (em comparação com os três a partir de versões mais antigas) e uma porta AUX especial. Os modelos mais antigos do Xbox 360 já foram descontinuados. O primeiro novo console a ser lançado possui um disco rígido de 250 GB.
                    </Text>

                    <Text style={styles.textoTítulo2}>Xbox One</Text>
                    <Image source={{ uri: 'https://sm.ign.com/ign_br/screenshot/default/xbox-one-x-console-controller-fronttilt-top_mjrd.jpg' }} style={{ borderRadius: 20, justifyContent: "center", width: '100%', height: 250, marginBottom: 10 }} />
                    <Text style={styles.textoGeral2}>
                        O Xbox One é o terceiro console de videogame desenvolvido e produzido pela Microsoft, sendo o sucessor do Xbox 360. O Xbox One competiu com Sony PlayStation 4 e Nintendo Wii U, como parte da oitava geração de consoles de videogame. Ele foi lançado em novembro de 2013.
                    </Text>
                    <Text style={styles.textoGeral2}>
                        O Xbox One tem 8GB de RAM, juntamente com um drive de Blu-ray, assim como a arquitetura nativa de 64 bits, um disco rígido integrado de 500GB, entrada e saída HDMI, 802.11n Wi-Fi, bem como uma CPU 8-core e conectividade USB 3.0. O Xbox One tem três sistemas operacionais simultaneamente. Complementando Windows 8 e RT em PCs e tablets, haverá uma terceira versão diferente do sistema operacional da Microsoft que foi reduzido especificamente para o novo console.
                    </Text>
                    <Text style={styles.textoGeral2}>
                        O console foi anunciado em 21 de maio de 2013.
                    </Text>
                    <Text style={styles.textoGeral2}>
                        Atualizações para os acordos de licenciamento foram publicadas em 6 de junho de 2013.
                    </Text>

                </View>

            </View>
        </ScrollView>
    )
}

function FichaSwitch() {
    return (
        <ScrollView>
            <View>
                <ImageBackground source={{ uri: 'https://mlgbzz6iaqdd.i.optimole.com/XzaT3g-ka1kldGy/w:auto/h:auto/q:74/https://djcleanto.com.br/wp-content/uploads/2014/01/black-background-hd-images.jpg' }} style={styles.background} />

                <View style={styles.container}>
                    <Text style={styles.textoTítulo3}>Ficha Técnica</Text>
                    <Text style={styles.textoGeral3}>
                        Tamanho:{'\n'}Aproximadamente 10,16 cm (4 pol.) de altura, 23,88 cm (9,4 pol.) de largura e 1,4 cm (0,55 pol.) de espessura (com os Joy-Con encaixados);{'\n'}{'\n'}
                        Chip gráfico:{'\n'}SoC NVIDIA Tegra Maxwell{'\n'}{'\n'}
                        Memória RAM:{'\n'}4GB{'\n'}{'\n'}
                        Armazenamento interno:{'\n'}32 GB de armazenamento interno, sendo uma parte reservada para ser usada pelo console. Os usuários podem expandir o espaço de armazenamento facilmente usando um cartão microSDHC ou microSDXC de até 2 TB (vendido separadamente);{'\n'}{'\n'}
                        Resolução Máxima:{'\n'}1080p@60fps (TV);{'\n'}{'\n'}
                        Sistema Operacional:{'\n'}Horizon;{'\n'}{'\n'}
                        Drive:{'\n'}Cartucho;{'\n'}{'\n'}
                    </Text>
                    <Image source={{ uri: 'https://www.pngall.com/wp-content/uploads/2/Nintendo-Switch-PNG.png' }} style={{ borderRadius: 20, justifyContent: "center", width: '100%', height: 140, marginBottom: 10 }} />
                </View>

            </View>
        </ScrollView>
    )
}

function ControleSwitch() {
    return (
        <ScrollView>
            <View>
                <ImageBackground source={{ uri: 'https://mlgbzz6iaqdd.i.optimole.com/XzaT3g-ka1kldGy/w:auto/h:auto/q:74/https://djcleanto.com.br/wp-content/uploads/2014/01/black-background-hd-images.jpg' }} style={styles.background} />

                <View style={styles.container}>
                    <Text style={styles.textoTítulo3}>Controles mais que exclusivos!</Text>
                    <Image source={{ uri: 'https://images.tcdn.com.br/img/img_prod/604470/controle_para_nintendo_switch_joy_con_vermelho_azul_2113_1_b2343394bb7239ffcf0dbd8691d6f00e.png' }} style={{ borderRadius: 20, justifyContent: "center", width: '100%', height: 240, marginBottom: 30, marginTop: 30 }} />
                    <Text style={styles.textoGeral3}>
                        O tio Laguna considera a Nintendo a rainha dos acessórios para games. A maioria das tecnologias disruptivas associadas aos controles, se não foram inventadas pela Big N, foram popularizadas pela japonesa nos consoles dela e copiadas alegremente pelas concorrentes.
                    </Text>
                    <Text style={styles.textoGeral3}>
                        Em seu novo console, o Switch, não podia ser diferente: embora um dos grandes destaques do híbrido seja as várias formas de se usar o console em si, sua maior novidade tecnológica são os Joy-Cons. A Nintendo propagandeou que os novos controles inclusos no Switch combinariam todos os recursos já lançados por ela.
                    </Text>
                    <Text style={styles.textoGeral3}>
                        Não deixa de ser verdade. O Famicom (NES japonês) também vinha com dois controles inclusos, e cada Joy-Con é um controle de Super Nintendo cuja cruz direcional é substituída por uma alavanca analógica melhor que aquela porcaria que usavam no Nintendo 64. E também têm o NFC do GamePad do Wii U para os Amiibo.
                    </Text>
                    <Text style={styles.textoGeral3}>
                        Além disso, ambos os Joy-Cons incluem sensores de movimento, acelerômetro e giroscópio muito mais precisos que os do Wiimote. E cada Joy-Con vem com uma câmera infravermelha que serve para apontar qualquer coisa à frente (no Joy-Con R a janela da câmera, na parte inferior, é mais visível). Algo bem melhor e mais preciso que o sensor infravermelho do Wiimote. E bem mais caro: com todos esses novos recursos, um par extra de Joy-Cons custará 80 dólares, o dobro de um Wiimote lá em 2006.
                    </Text>

                </View>

            </View>
        </ScrollView>
    )
}

function EvolucaoSwitch() {
    return (
        <ScrollView>
            <View>
                <ImageBackground source={{ uri: 'https://mlgbzz6iaqdd.i.optimole.com/XzaT3g-ka1kldGy/w:auto/h:auto/q:74/https://djcleanto.com.br/wp-content/uploads/2014/01/black-background-hd-images.jpg' }} style={styles.background} />

                <View style={styles.container}>

                    <Text style={styles.textoTítulo3}>Nintendo 8 Bits (NES)</Text>
                    <Image source={{ uri: 'https://a-static.besthdwallpaper.com/nintendo-entertainment-system-nes-papel-de-parede-2560x1600-1033_7.jpg' }} style={{ borderRadius: 20, justifyContent: "center", width: '100%', height: 340, marginBottom: 30, marginTop: 30 }} />
                    <Text style={styles.textoGeral3}>
                        A Nintendo já havia produzido alguns jogos eletrônicos no Japão, mas em 1983 ela decidiu lançar seu próprio console, intitulado Famicom, chegando aos Estados Unidos em 1985, onde recebeu o nome de Nintendo Entertainment System (popularmente chamado NES e conhecido como “Nintendinho” no Brasil). Foi aí que nasceu os clássicos Super Mario Bros., The Legend of Zelda e Metroid – que continuam firmes com suas respectivas séries até os consoles atuais.
                    </Text>

                    <Text style={styles.textoTítulo3}>Game Boy</Text>
                    <Image source={{ uri: 'https://c4.wallpaperflare.com/wallpaper/5/302/338/gameboy-render-pokemon-origins-gray-background-wallpaper-preview.jpg' }} style={{ borderRadius: 20, justifyContent: "center", width: '100%', height: 240, marginBottom: 20, marginTop: 10 }} />
                    <Text style={styles.textoGeral3}>
                        Seis anos depois, a Nintendo lançou o Game Boy, videogame portátil, que tornou-se uma febre, sendo um precursor dos games portáteis, trazendo uma novidade, o uso de cartuchos, deixando para trás o sistema com apenas um game na memória. Até hoje a Nintendo é pioneira em games portáteis lançando novas versões.
                    </Text>

                    <Text style={styles.textoTítulo3}>Super Nintendo (Super NES)</Text>
                    <Image source={{ uri: 'https://wallpaperaccess.com/full/1380698.jpg' }} style={{ borderRadius: 20, justifyContent: "center", width: '100%', height: 210, marginBottom: 20, marginTop: 10 }} />
                    <Text style={styles.textoGeral3}>
                        Naquela época, apesar de liderar em alguns países com o NES, a Nintendo encontrara uma concorrente de peso: O Mega Drive (1989) e seu mascote veloz, Sonic. Eis que nasce no ano seguinte o Super Nintendo, para bater de frente com o rival e revolucionar mais uma vez a indústria com Super Mario World, que até hoje é referência em mecânicas e conceito para jogos de plataforma.
                    </Text>

                    <Text style={styles.textoTítulo3}>Virtual Boy</Text>
                    <Image source={{ uri: 'https://cdn.mos.cms.futurecdn.net/dskpPVDe47YUKiWy4KCm45-1200-80.jpg' }} style={{ borderRadius: 20, justifyContent: "center", width: '100%', height: 200, marginBottom: 20, marginTop: 10 }} />
                    <Text style={styles.textoGeral3}>
                        Um dos, se não o maior fracasso da Nintendo. Com limitações técnicas, ele foi o primeiro videogame híbrido da empresa. Com traços de console portátil, o Virtual Boy era um visor que projetava imagens diferentes para cada olho, com a ideia de criar um efeito 3D para o jogador. Ao invés disso, foi proporcionada (literalmente) muitas dores de cabeça aos usuários. Seu lançamento foi em 1995.
                    </Text>

                    <Text style={styles.textoTítulo3}>Nintendo 64</Text>
                    <Image source={{ uri: 'https://c4.wallpaperflare.com/wallpaper/934/137/88/nintendo-64-minimalism-black-background-retro-games-hd-wallpaper-preview.jpg' }} style={{ borderRadius: 20, justifyContent: "center", width: '100%', height: 240, marginBottom: 20, marginTop: 10 }} />
                    <Text style={styles.textoGeral3}>
                        Lançado em 1996, a empresa vinha passando por um período obscuro. No ano anterior, a Nintendo lançara o Virtual Boy, que foi um fracasso de vendas. Não só o fiasco do videogame anterior prejudicou o Nintendo 64. A escolha por cartuchos ao invés de CDs também foi outro contribuinte.
                    </Text>
                    <Text style={styles.textoGeral3}>
                        Com um número baixo de vendas, a veterana havia sido vencida pela novidade da Sony, o PlayStation e seu uso de CD-ROM como mídia de jogos, que tinha um custo menor e possuía mais espaço que os cartuchos do 64, possibilitando games com gráficos tridimensionais mais texturizados, um avanço para os jogos da época.
                    </Text>

                    <Text style={styles.textoTítulo3}>Game Boy Advance</Text>
                    <Image source={{ uri: 'https://wallpaperaccess.com/full/2409563.jpg' }} style={{ borderRadius: 20, justifyContent: "center", width: '100%', height: 240, marginBottom: 20, marginTop: 10 }} />
                    <Text style={styles.textoGeral3}>
                        Introduzido ao mercado em 2001, este videogame portátil era uma versão atualizada do Game Boy, com uma tela colorida e gráficos melhores que seu antecessor. Em 2003 ele passou por uma atualização (o Game Boy Advance SP), trazendo um novo design e com iluminação própria para a tela.
                    </Text>

                    <Text style={styles.textoTítulo3}>Nintendo Game Cube</Text>
                    <Image source={{ uri: 'https://www.denofgeek.com/wp-content/uploads/2014/04/best-nintendo-gamecube-games.jpg?fit=825%2C464' }} style={{ borderRadius: 20, justifyContent: "center", width: '100%', height: 200, marginBottom: 20, marginTop: 10 }} />
                    <Text style={styles.textoGeral3}>
                        O console de design único (leia-se estranho) e minimalista surgiu em 2001. Embora fosse visualmente simples, o cubinho roxo escondia muita potência, mas pecou em escolher uma mídia prioritária (GameCube Optical Disc ou MiniDVD) para lançar seus jogos, ajudando nas más vendas do console na época.
                    </Text>

                    <Text style={styles.textoTítulo3}>Nintendo DS</Text>
                    <Image source={{ uri: 'https://wallpapercave.com/wp/wp4917945.jpg' }} style={{ borderRadius: 20, justifyContent: "center", width: '100%', height: 240, marginBottom: 20, marginTop: 10 }} />
                    <Text style={styles.textoGeral3}>
                        Apresentando conceitos novos, o Nintendo DS é um videogame portátil com tela dupla, sendo a tela inferior sensível ao toque. Lançado em 2004, ele carrega consigo o título de aparelho mais vendido em toda a trajetória da Nintendo. Em 2011, nasceu seu sucessor, o Nintendo 3DS, cuja novidade era o efeito 3D que podia ser visualizado sem óculos especiais.
                    </Text>

                    <Text style={styles.textoTítulo3}>Nintendo Wii e Nintendo Wii U</Text>
                    <Image source={{ uri: 'https://wallpapercave.com/wp/wp7323093.jpg' }} style={{ borderRadius: 20, justifyContent: "center", width: '100%', height: 240, marginBottom: 20, marginTop: 10 }} />
                    <Text style={styles.textoGeral3}>
                        Após o sucesso do Nintendo DS, a empresa japonesa lançou em 2006 o Nintendo Wii, que focava num público mais casual e revolucionou a indústria com seus controles de movimento, sendo um sucesso de vendas com mais de 100 milhões de unidades vendidas.
                    </Text>
                    <Text style={styles.textoGeral3}>
                        Já o Nintendo Wii U teve seu lançamento em 2012 e não repetiu o mesmo sucesso de seu antecessor, por conta de problemas no marketing, que não deixava claro qual era a proposta do console, sendo confundido com um periférico do Nintendo Wii.
                    </Text>
                    <Text style={styles.textoGeral3}>
                        Possuindo um controle em formato de tablet, o GamePad trazia uma tela própria sensível ao toque, possibilitando vários tipos de interação, mas pouco usado por empresas terceiras, caindo em desuso e muitas vezes sendo utilizado somente como segunda tela ou para jogar sem necessariamente usar a TV.
                    </Text>
                    <Text style={styles.textoGeral3}>
                        Com seu pouco mais de 13 milhões de unidades vendidas, menos até que outro “fracasso” comercial, o Game Cube que vendeu pouco mais de 21 milhões de unidades. O Wii U saiu de cena mais cedo do que esperado, apenas quatro anos após seu lançamento, dando espaço ao próximo console da empresa, o Nintendo Switch.
                    </Text>

                </View>

            </View>
        </ScrollView>
    )
}

export { Especificacoes, Controle, Graficos, ControleX, SeriesX, SeriesS, EvolucaoPS, EvolucaoX, FichaSwitch, ControleSwitch, EvolucaoSwitch }


const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        marginTop: 15,
        marginRight: 15,
        marginBottom: 5,
        flex: 1,
        flexDirection: 'column',
    },
    textoGeral: {
        fontSize: 18,
        flex: 1,
        marginBottom: 10,
        color: 'white'
    },
    textoGeral2: {
        fontSize: 18,
        flex: 1,
        marginBottom: 10,
        color: 'black'
    },
    textoGeral3: {
        fontSize: 18,
        flex: 1,
        marginBottom: 10,
        color: '#79B2C3'
    },
    textoTítulo: {
        fontSize: 26,
        flex: 1,
        marginBottom: 10,
        color: 'white',
        fontWeight: 'bold',

    },
    textoTítulo2: {
        fontSize: 26,
        flex: 1,
        marginBottom: 10,
        color: 'black',
        fontWeight: 'bold',
    },
    textoTítulo3: {
        fontSize: 26,
        flex: 1,
        marginBottom: 10,
        color: '#D91A45',
        fontWeight: 'bold',
    },
    img: {
        borderRadius: 20,
        justifyContent: "center",
        width: '100%',
        height: 300,
        marginBottom: 10,
    },
    imgG1: {
        borderRadius: 20,
        justifyContent: "center",
        width: '100%',
        height: 223,
        marginBottom: 10,
    },
    imgX: {
        borderRadius: 20,
        justifyContent: "center",
        width: '100%',
        height: 300,
        marginBottom: 10,
    },
    imgS: {
        borderRadius: 20,
        justifyContent: "center",
        width: '100%',
        height: 380,
        marginBottom: 10,
    },
    imgA: {
        borderRadius: 20,
        justifyContent: "center",
        width: '100%',
        height: 190,
        marginBottom: 10,
    },
    imgB: {
        borderRadius: 20,
        justifyContent: "center",
        width: '100%',
        height: 150,
        marginBottom: 10,
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