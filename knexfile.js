// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./database/db.sqlite",
    },
    migrations: {
      directory: "./database/migrations",
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: function (conn, done) {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
    seeds: {
      directory: "./database/seeds",
    },
  },
  production: {
    client: "pg",
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    },
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },
};
