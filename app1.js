//NPM modules
const { Pool } = require('pg');

const pg = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432
});

const coreCount = navigator.hardwareConcurrency;

function generateString() {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 3; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}


async function insertBatch() {
  const promises = [];
  for (let i = 0; i < Math.ceil(1000000 / coreCount); i++) {
    promises.push(
      pg.query('INSERT INTO strings (random_string) VALUES ($1)', [
        generateString()
      ])
    );
  }
  await Promise.all(promises);

}

async function init() {
  let promises = [];
  for (let i = 0; i < coreCount; i++) {
    promises.push(insertBatch());
  }
  await Promise.all(promises);
}


// async function init() {
//   const promises = [];
//   for (let i = 0; i < 100000; i++) {
//     promises.push(
//       pg.query('INSERT INTO strings (random_string) VALUES ($1)', [
//         generateString()
//       ])
//     );
//   }
//   await Promise.all(promises);
// }


(async () => {
  const start = performance.now();
  await init();
  await pg.end();
  console.log('Time:', performance.now() - start);
})();
