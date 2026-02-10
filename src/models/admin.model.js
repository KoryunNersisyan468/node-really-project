// NPM modules
import knex from 'knex';
import knexConfigs from '../../knex.configs';
import fs from 'fs';
import path from 'path';
import { Model } from 'objection';

class AdminModel extends Model {
  static get tableName() {
    return 'dreams';
  }
  $beforeInsert() {
    const date = new Date();
    this.created_at = date;
  }
  $beforeUpdate() {
    const date = new Date();
    this.updated_at = date;
  }

  static getDreams() {
    return AdminModel.query().select('*');
  }
  static getOneByIdDream(id) {
    return AdminModel.query().select('*').where('id', id);
  }

  static addDreams(dreams) {
    return AdminModel.query().insert(dreams);
  }

  static editDream(dream, id) {
    return AdminModel.query()
      .select('*')
      .where('id', id)
      .update(dream)
      .returning('*');
  }
  static deleteDream(id) {
    return AdminModel.query().select('*').where('id', id).del().returning('*');
  }
}

export default AdminModel;
