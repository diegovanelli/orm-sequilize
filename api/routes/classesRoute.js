const { Router } = require('express');
const ClassesController = require('../controllers/ClassesController');

const router = Router();

router.get('/Classes', ClassesController.getClasses);
router.get('/Classes/:id', ClassesController.getClass);
router.post('/Classes', ClassesController.createClass);
router.post('/Classes/:id/restore', ClassesController.restoreClass)  
router.put('/Classes/:id', ClassesController.updateClass);
router.delete('/Classes/:id', ClassesController.deleteClass);

module.exports = router;