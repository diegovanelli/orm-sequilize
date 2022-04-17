const { Router } = require('express')
const PeopleController = require('../controllers/PeopleController')
const RegistersController = require('../controllers/RegistersController')

const router = Router()

router
  .get('/people', PeopleController.getPeople)  
  .get('/people/active', PeopleController.getPeopleActive)  
  .get('/people/:id', PeopleController.getPerson)  
  .get('/people/:studentId/register', PeopleController.getRegisters)  
  .get('/people/:studentId/register/:registerId', RegistersController.getRegister)  
  .get('/people/register/:classId/confirm', RegistersController.getRegistersToClass)  
  .get('/people/register/crowded', RegistersController.getCrowdedClasses)  
  .post('/people', PeopleController.createPerson)  
  .post('/people/:id/restore', PeopleController.restorePerson)  
  .post('/people/:studentId/cancel', PeopleController.cancelPerson)  
  .post('/people/:studentId/register', RegistersController.createRegister)  
  .post('/people/:studentId/register/:registerId/restore', RegistersController.restoreRegister)  
  .put('/people/:id', PeopleController.updatePerson)  
  .put('/people/:studentId/register/:registerId', RegistersController.updateRegister)  
  .delete('/people/:id', PeopleController.deletePerson)  
  .delete('/people/:studentId/register/:registerId', RegistersController.deleteRegister)  

module.exports = router