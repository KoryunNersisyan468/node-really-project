//NPM modules

import multer from 'multer';
import fs from 'fs';
import { extname } from 'path';
import { v4 as uuidv4 } from 'uuid';

//Local modules

import variablesConfig from '../config/variables.config';
import { ErrorsUtil } from '../utils';

const { InputValidationError } = ErrorsUtil;

export class ImageUploadMiddleware {
  static upload() {
    try {
      const path = variablesConfig.UPLOAD_IMAGES;
      const storage = multer.diskStorage({
        destination: (req, file, cb) => {
          fs.mkdirSync(path, { recursive: true });
          cb(null, path);
        },

        filename: (req, file, cb) => {
          if (file?.mimetype.split('/')[0] !== 'image') {
            throw new InputValidationError('Incorrect file format');
          }
          const ext = extname(file.originalname).toLowerCase();
          cb(null, `${uuidv4()}${ext}`);
        }
      });
      const upload = multer({
        storage: storage
      });
      return upload.single('image');
    } catch (error) {
      throw new InputValidationError('Can not upload image');
    }
  }
}
