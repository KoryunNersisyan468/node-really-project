// NPM modules
import knex from 'knex';
import knexConfigs from '../../knex.configs';
import fs from 'fs';
import path from 'path';
import { Model } from 'objection';

class AdminModel extends Model {}

export default AdminModel;
