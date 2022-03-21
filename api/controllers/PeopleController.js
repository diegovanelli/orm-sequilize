const database = require('../models');

class PeopleController {
    static async getPeople(req, res) {
        try {
            const people = await database.Person.findAll();
            return res.status(200).json(people);
        } catch(error) {
            return res.status(500).json(error.message);
        }
    }
    
    static async getPerson(req, res) {
        try {
            const { id } = req.params;
            const person = await database.Person.findOne({ where: { id: Number(id) }});
            return res.status(200).json(person);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createPerson(req, res) {
        try {
            const newPerson = req.body;
            const person = await database.Person.create(newPerson);
            return res.status(200).json(person);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updatePerson(req, res) {
        try {
            const { id } = req.params;
            const newValues = req.body;
            await database.Person.update(newValues, { where: { id: Number(id) }});
            const person = await database.Person.findOne({ where: { id: Number(id) }});
            return res.status(200).json(person);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deletePerson(req, res) {
        try {
            const { id } = req.params;
            await database.Person.destroy({ where: { id: Number(id) }});
            return res.status(200).json({ message: `Id ${id} deleted!`});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = PeopleController;