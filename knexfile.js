
require("dotenv").config();

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.DB_NAME,
      user:     process.env.DB_USER,
      password: process.env.DB_PASSWORD
    },
    migrations: {
      tableName: "nave_migrations",
      directory: `${__dirname}/server/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/server/database/seeds`
    }
  }

};
