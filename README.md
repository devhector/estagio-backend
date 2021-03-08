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



Para testa a API, use o insomnia, na pasta de mesmo nome, estão as configurações necessárias, precisa somente importar para o insomnia. 















