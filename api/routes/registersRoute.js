const { Router } = require('express');
const RegistersController = require('../controllers/RegistersController');

const router = Router();

router.get('/Registers', RegistersController.getRegisters);
router.get('/Registers/:id', RegistersController.getRegister);
router.post('/Registers', RegistersController.createRegister);
router.put('/Registers/:id', RegistersController.updateRegister);
router.delete('/Registers/:id', RegistersController.deleteRegister);

module.exports = router;