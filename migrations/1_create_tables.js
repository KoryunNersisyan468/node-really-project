//NPM modules
import knex from 'knex';
import knexConfigs from '../knex.configs';
function up( pg ) {
    return pg.schema
           .createTable('admin', ( table ) => {
            table.increments( 'id' ).primary();
            table.string( 'admin_name' ).notNullable();
            table.string( 'password' ).notNullable();
            table.string( 'role' ).defaultTo( 'admin' );
            table.dateTime( 'created_at' );
            table.dateTime( 'updated_at ');
           })
           .createTable('strings', ( table ) => {
            table.increments( 'id' ).primary();
            table.string( 'random_string' ).notNullable();
            table.dateTime( 'created_at' );
            table.dateTime( 'updated_at ');
           })
}

async function init() {
    try {
        const options = knexConfigs.development;
        const pg = knex(options);
        await up( pg );
        console.log( 'Successfully created all tables' );
        process.kill(process.pid)
    } catch (e) {
        console.error(e.message)
    }
}
init()