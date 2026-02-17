import express from 'express';
import { ImageUploadMiddleware } from '../middlewares/image.upload.middleware';
import { AdminController } from '../auth';

const router = express.Router();

router.get('/getDreams', AdminController.getDreams);
router.get('/getOneByIdDream/:id', AdminController.getOneByIdDream);
router.post('/addDreams', AdminController.addDreams);
router.put('/editDream/:id', AdminController.editDream);
router.delete('/deleteDream/:id', AdminController.deleteDream);
router.post('/upload', ImageUploadMiddleware.upload(), AdminController.upload);

export default router;
