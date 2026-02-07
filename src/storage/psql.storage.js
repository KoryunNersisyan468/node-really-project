// NPM modules

import {Model} from 'objection';
import Knex from 'knex';
import knexConfig from '../../knex.configs'
import {LoggerUtil} from '../utils';

class PSQLStorage {
    static async init(){
        try {
            const options = process.env.NODE_ENV === 'production'
        ? knexConfigs.production
        : knexConfigs.development;
        const pg = Knex(options);
        await pg.raw('SELECT 1');
        Model.knex(pg);
        PSQLStorage.knex = pg;

        LoggerUtil.info('PSQLStorage initialized successfully.');
        } catch (error) {
            LoggerUtil.error('Failed to initialize PSQLStorage:', error);
        }
    }
}
module.exports = PSQLStorage;