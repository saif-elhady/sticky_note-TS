import express from 'express';
import noteController from '../controllers/noteControllers';
const router = express.Router();

router.get('/create', noteController.noteCreate);
router.get('/', noteController.noteIndex);
router.post('/', noteController.noteCreatePost)
router.get('/:id', noteController.noteDetails);
router.delete('/:id', noteController.noteDelete);

export default router;