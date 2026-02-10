import { AdminModel } from '../models';
export default class AdminService {
  static async getDreams(dreams) {
    return await AdminModel.getDreams(dreams);
  }
  static async getOneByIdDream(id) {
    return await AdminModel.getOneByIdDream(id);
  }
  static async addDreams(dreams) {
    return await AdminModel.addDreams(dreams);
  }
  static async editDream(dream, id) {
    return await AdminModel.editDream(dream, id);
  }
  static async deleteDream(id) {
    return await AdminModel.deleteDream(id);
  }
}
