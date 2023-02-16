# nlwEsports
Sistema para encontrar pessoas que jogam os mesmos jogos...find your duo!
# DESCRIÇÃO DO PROJETO
O projeto foi desenvolvido ao longo da imersão NLW (Next Level Week) promovido pela instituição de ensino RocketSeat ao longo do dia 11/09/2022 ao dia 18/09/2022 que visou elaborar um projeto capaz de envolver conceitos de front-end e back-end com o typescript.
Ao longo da trilha, atividades práticas foram realizadas envolvendo:
- Construção de um banco de dados relacional com o Prisma com duas tabelas (Ad e Games)
- Construção de um api restful com typescrip
- Construção de uma landing page com React
- Construção de um mobile app com React Native.

# API
A API foi desenvolvida com o NodeJs (versão 14.16.1) com Typescript e visou prover o uso de um banco de dados relacional com o Prisma.

## Rotas da API:
- /games: Acessada com o método "GET" e visa listar os jogos cadastrados na tabela "Games" do banco;
- /games/id/ads: Acessada com o método "POST" e visa publicar um novo anúncio de duo com o "id" do jogo especificado
- /games/id/ads: Acessada com o método "GET" e visa listar os anúncios de um jogo especificado pelo seu "id"
- /ads/id/discord: Acessada com o método "GET" e visa listar os anúncios de um usuário especificado pelo seu discord

# Landing Page React
A construção da Landing Page com React envolveu:
- Comunicação com a api para listar os jogos cadastrados e os anúncios de duo também cadastrados;
- Construção de um formulário para geração de novos anúncios.
- Separação dos anúncios por jogos.

## Conhecimentos adquiridos em React
- Conhecimentos básicos sobre React;
- Construção de componentes;
- Gerenciamento de rotas;
- Conceitos sobre validação;
- Construção de formulários;
- Uso de bibliotecas (principalmente Axios e Radix)

# App React Native
A construção do App com React Native envolveu:
- Comunicação com a api para listar os jogos cadastrados e os anúncios de duo também cadastrados;
- Construção de um formulário para geração de novos anúncios.
- Separação dos anúncios por jogos.

## Conhecimentos adquiridos em React Native
- Conhecimentos básicos sobre React Native;
- Construção de componentes;
- Gerenciamento de rotas;
- Conceitos sobre validação;
- Construção de formulários;
- Básico sobre push notification;
- Uso de bibliotecas variadas

