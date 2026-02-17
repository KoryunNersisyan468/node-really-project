import jwt from 'jsonwebtoken';
import { AdminModel } from '../models';
import { ErrorsUtil, CryptoUtil } from '../utils';
import config from '../config/variables.config';

const { InputValidationError, UnauthorizedError } = ErrorsUtil;
const {
  JWT_ACCESS_SECRET,
  JWT_REFRESH_SECRET,
  ACCESS_TOKEN_ACTIVE_TIME,
  REFRESH_TOKEN_ACTIVE_TIME
} = config.AUTH;

export default class AuthService {
  static generateTokens(payload) {
    const accessToken = jwt.sign(payload, JWT_ACCESS_SECRET, {
      expiresIn: ACCESS_TOKEN_ACTIVE_TIME
    });
    const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET, {
      expiresIn: REFRESH_TOKEN_ACTIVE_TIME
    });
    return { accessToken, refreshToken };
  }

  static validateAccessToken(accessToken) {
    try {
      return jwt.verify(accessToken, JWT_ACCESS_SECRET);
    } catch (error) {
      if (error) {
        if (error.name === 'TokenExpiredError') {
          throw new UnauthorizedError('Token has expired');
        } else {
          throw new UnauthorizedError('Token is invalid');
        }
      }
    }
  }

}
