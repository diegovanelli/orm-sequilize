const { Router } = require('express');
const LevelsController = require('../controllers/LevelsController');

const router = Router();

router.get('/Levels', LevelsController.getLevels);
router.get('/Levels/:id', LevelsController.getLevel);
router.post('/Levels', LevelsController.createLevel);
router.put('/Levels/:id', LevelsController.updateLevel);
router.delete('/Levels/:id', LevelsController.deleteLevel);

module.exports = router;