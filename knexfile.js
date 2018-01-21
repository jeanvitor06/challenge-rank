module.exports = {

  development: {
    client: 'postgres',
    connection: {
      host: process.env.DATABASE_HOST || 'localhost',
      database: process.env.DATABASE_DB || 'apirank',
      user: process.env.DATABASE_USER || 'docker',
      password: process.env.DATABASE_PASSWORD || 'apirank',
      port: process.env.DATABASE_PORT || 3002
    },
    seeds: {
      directory: './migrations/seeds'
    },
    debug: false
  },

};