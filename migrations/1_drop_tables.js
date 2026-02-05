//NPM modules
import knex from 'knex';
import knexConfigs from '../knex.configs';
function down( pg ) {
    return pg.schema
           .dropTableIfExists( 'admin' )
           .dropTableIfExists( 'strings' );

}

async function init() {
    try {
        const options = knexConfigs.development;
        const pg = knex(options);
        await down( pg );
        console.log( 'Successfully deleted all tables' );
        process.kill(process.pid)
    } catch (e) {
        console.error(e.message)
    }
}
init()