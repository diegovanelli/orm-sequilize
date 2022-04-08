const { Router } = require('express');
const PeopleController = require('../controllers/PeopleController');

const router = Router();

router.get('/people', PeopleController.getPeopleActive);
router.get('/people/all', PeopleController.getPeople);
router.get('/people/:id', PeopleController.getPerson);
router.post('/people', PeopleController.createPerson);
router.put('/people/:id', PeopleController.updatePerson);
router.delete('/people/:id', PeopleController.deletePerson);
router.get('/people/:studentId/register/:registerId', PeopleController.getRegister);
router.post('/people/:studentId/register', PeopleController.createRegister);
router.get('/people/:studentId/register/:registerId', PeopleController.updateRegister);
router.delete('/people/:studentId/register/:registerId', PeopleController.deleteRegister);

module.exports = router;