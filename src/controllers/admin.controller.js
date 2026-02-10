import { AdminService } from '../services';
import { SuccessHandlerUtil } from '../utils';
export default class AdminController {
  static async getDreams(req, res, next) {
    try {
      const dreams = await AdminService.getDreams();
      SuccessHandlerUtil.handleList(res, res, dreams);
    } catch (error) {
      next(error);
    }
  }
  static async getOneByIdDream(req, res, next) {
    try {
      const { id } = req.params;
      const dream = await AdminService.getOneByIdDream(id);
      SuccessHandlerUtil.handleList(res, res, dream);
    } catch (error) {
      next(error);
    }
  }
  static async addDreams(req, res, next) {
    try {
      const { dreams } = req.body;
      const dream = await AdminService.addDreams(dreams);
      SuccessHandlerUtil.handleList(res, res, dream);
    } catch (error) {
      next(error);
    }
  }
  static async editDream(req, res, next) {
    try {
      const { dream } = req.body;
      const { id } = req.params;
      const result = await AdminService.editDream(dream, id);
      SuccessHandlerUtil.handleList(res, res, result);
    } catch (error) {
      next(error);
    }
  }
  static async deleteDream(req, res, next) {
    try {
      const { id } = req.params;
      const result = await AdminService.deleteDream(id);
      SuccessHandlerUtil.handleList(res, res, result);
    } catch (error) {
      next(error);
    }
  }
}
