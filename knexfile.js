// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      filename: './dev.pg'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'test_db',
      user: 'development',
      password: 'development'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'test_db',
      user: 'development',
      password: 'development'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
