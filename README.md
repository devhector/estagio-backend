# Estágio back-end: API

#### Requisitos do sistema:

```shell
node: v14.15.4
npm: 7.5.2
psql (PostgreSQL) 13.2
```

#### Execução do projeto :

Na pasta raiz, execute: `npm install`

Agora crie um arquivo `.env` na raiz do projeto, copie os campos do `.env.example`  e os preencha.

```shell
DB_NAME="" #nome do banco de dados
DB_USER="" #nome de usuário do banco de dados
DB_PASSWORD="" #senha do usuário do banco de dados 
PORT="" #Porta da aplicação
```

execute: `npm start` e o server será iniciado



##### Popular o banco de dados:

No terminal: `npx knex migrate:latest`

e depois `npx knex seed:run`



Para testar a API, use o insomnia. Na pasta de mesmo nome estão as configurações necessárias, precisando somente importar para o insomnia. Se mudar a porta padrão, edite na url do insomnia.



## Desafio JS

[Desafio dos ex. em javascript](https://codesandbox.io/s/teste-estagio-template-forked-pr5pc)

Eu já tinha feito o desafio antes, [ele está aqui](https://github.com/devhector/EstagioNaveTeam)



#### Dificuldades

No ex. 10 eu usei alguns "for" aninhados, mas eu sei que daria para resolver com `filter(), map() ou reduce()` e como eu não consegui chegar numa solução com essas funções, deixei do jeito que está.

Na api, na hora de formatar a saída da data, não sei se a forma que eu resolvi seria a mais ideal.

Eu tentei documentar como foi o processo [aqui](https://devhector.github.io/2021/03/03/Teste-para-estagio-back-end/).