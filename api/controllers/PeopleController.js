const { PeopleServices } = require('../services')
const peopleServices = new PeopleServices()

class PeopleController {
    static async getPeopleActive(req, res) {
        try {
            const people = await peopleServices.getActiveOne();
            return res.status(200).json(people);
        } catch(error) {
            return res.status(500).json(error.message);
        }
    }

    static async getPeople(req, res) {
        try {
            const people = await peopleServices.getAll();
            return res.status(200).json(people);
        } catch(error) {
            return res.status(500).json(error.message);
        }
    }
    
    static async getPerson(req, res) {
        const { id } = req.params;
        try {
            const person = await peopleServices.getOne({ id });
            return res.status(200).json(person);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createPerson(req, res) {
        const newPerson = req.body;
        try {
            const person = await peopleServices.create(newPerson);
            return res.status(200).json(person);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updatePerson(req, res) {
        const { id } = req.params;
        const newValues = req.body;
        try {
            await peopleServices.update(newValues, Number(id));
            return res.status(200).json({ message: `id ${id} updated` })
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deletePerson(req, res) {
        const { id } = req.params;
        try {
            await peopleServices.remove(Number(id));
            return res.status(200).json({ message: `Id ${id} deleted!`});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async restorePerson(req, res) {  
        const { id } = req.params
        try {
          const personRestored = await peopleServices
            .restore(Number(id))
          return res.status(200).json(personRestored)
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }

    static async getRegisters(req, res) {
        const { studentId } = req.params;
        try {
            const registers = await peopleServices.getRegisterToStudent({
                    id: Number(studentId), 
            });
            return res.status(200).json(registers);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async cancelPerson(req, res) {  
        const { studentId } = req.params
        try {
          await peopleServices.cancelPersonAndRegister(Number(studentId))
          return res
            .status(200)
            .json({message: `registers ref. student ${studentId} canceled`}) 
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }
}

module.exports = PeopleController;