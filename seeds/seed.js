//NPM modules
import knex from 'knex';
import bCrypt from 'bcryptjs';
import knexConfigs from '../knex.configs';
import config from '../src/valuables.config';
const { ADMIN_PASSWORD } = config;
const { ADMIN_LOGIN } = config;

async function seed(pg) {
  await pg('admin').insert([
    {
      admin_name: ADMIN_LOGIN,
      password: bCrypt.hashSync(ADMIN_PASSWORD, bCrypt.genSaltSync(10), null)
    }
  ]);
  
}

async function init() {
  try {
    const options = knexConfigs.development;
    const pg = knex(options);
    await seed(pg);
    console.log('Successfully inserted all table');
    process.kill(process.pid);
  } catch (e) {
    console.error(e.message);
  }
}
init();
