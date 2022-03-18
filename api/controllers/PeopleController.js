const database = require('../models');

class PeopleController {
    static async getAllPerson(req, res) {
        try {
            const allPerson = await database.Person.findAll();
            return res.status(200).json(allPerson);
        } catch(error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = PeopleController;