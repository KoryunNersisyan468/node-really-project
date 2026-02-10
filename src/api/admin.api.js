import express from 'express';
import { AdminController } from '../controllers';

const router = express.Router();

router.get('/getDreams', AdminController.getDreams);
router.get('/getOneByIdDream/:id', AdminController.getOneByIdDream);
router.post('/addDreams', AdminController.addDreams);
router.put('/editDream/:id', AdminController.editDream);
router.delete('/deleteDream/:id', AdminController.deleteDream);

export default router;
