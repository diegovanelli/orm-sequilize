const Sequelize = require('sequelize')
const { RegistersServices } = require('../services')
const registersServices = new RegistersServices()

class RegistersController {
    static async getRegister(req, res) {
        try {
            const { studentId, registerId } = req.params;
            const register = await registersServices.getOne({id: registerId, student_id: studentId});
            return res.status(200).json(register);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createRegister(req, res) {
        const { studentId } = req.params
        const newRegister = { ...req.body, student_id: Number(studentId) }
        try {
            const register = await registersServices.create(newRegister);
            return res.status(200).json(register);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updateRegister(req, res) {
        const { studentId, registerId } = req.params;
        const newValues = req.body;
        try {
            await registersServices.update(newValues, { id: Number(registerId), student_id: Number(studentId) });
            return res.status(200).json({ message: `Id ${registerId} updated`});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteRegister(req, res) {
        const { registerId } = req.params;
        try {
            await registersServices.remove(Number(registerId));
            return res.status(200).json({ message: `Id ${id} deleted!` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async restoreRegister(req, res) {  
        const { registerId } = req.params
        try {
          await registersServices.restore(Number(registerId))
          return res.status(200).json({ message: `id ${registerId} restored`})
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }
    
      static async getRegistersToClass(req, res) {   
        const { classId } = req.params
        try {
          const getAllRegisters = await registersServices
            .findAndCount(
              { class_id: Number(classId), status: 'confirm' },
              { limit: 20, order: [['student_id', 'DESC']] })
          return res.status(200).json(getAllRegisters)
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }
    
      static async getCrowdedClasses(req, res) {  
        const classCrowding = 2
        try {
          const crowdedClasses = await registersServices
            .findAndCount({ status: 'confirm' },
              { 
                attributes: ['class_id'],
                group: ['class_id'],
                having: Sequelize.literal(`count(class_id) >= ${classCrowding}`)
              })
          return res.status(200).json(crowdedClasses.count)
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }
}

module.exports = RegistersController;