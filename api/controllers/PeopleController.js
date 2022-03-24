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

    static async getRegister(req, res) {
        try {
            const { studentId, registerId } = req.params;
            const Register = await database.Register.findOne({ 
                where: { 
                    id: Number(registerId),
                    student_id: Number(studentId)
                } 
            });
            return res.status(200).json(Register);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createRegister(req, res) {
        try {
            const { studentId } = req.params;
            const newRegister = { ...req.body, student_id: Number(studentId) };;
            const newRegisterCreated = await database.Register.create(newRegister);
            return res.status(200).json(newRegisterCreated);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updateRegister(req, res) {
        try {
            const { studentId, registerId } = req.params;
            const newValues = req.body;
            await database.Register.update(newValues, { 
                where: { 
                    id: Number(registerId),
                    student_id: studentId
                }
            });
            const registerUpdated = await database.Register.findOne({ where: { id: Number(registerId) } });
            return res.status(200).json(registerUpdated);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteRegister(req, res) {
        try {
            const { registerId } = req.params;
            await database.Register.destroy({ where: { id: Number(registerId) } });
            return res.status(200).json({ message: `Id ${registerId} deleted!` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = PeopleController;