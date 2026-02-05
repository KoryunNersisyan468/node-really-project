import config from './src/valuables.config';
const { PSQL } = config;
export default {
  development: {
    client: 'pg',
    useNullAsDefault: true,
    connection: {
      port: PSQL.PORT,
      host: PSQL.HOST,
      database: PSQL.DATABASE,
      user: PSQL.USER,
      password: PSQL.PASSWORD,
    },
  },
  production: {
    client: 'pg',
    useNullAsDefault: true,
    connection: {
      port: PSQL.PORT,
      host: PSQL.HOST,
      database: PSQL.DATABASE,
      user: PSQL.USER,
      password: PSQL.PASSWORD,
    },
  },
};
