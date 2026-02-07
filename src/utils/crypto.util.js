import bCrypt from 'bcryptjs';

export default class CryptoUtil {

  static createHash(password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
  }
  static isValidPassword(password, hashPassword) {
    return bCrypt.compareSync(password, hashPassword);
  }
}