const database = require('../models');

class RegistersController {
    static async getRegisters(req, res) {
        try {
            const Registers = await database.Register.findAll();
            return res.status(200).json(Registers);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getRegister(req, res) {
        try {
            const { id } = req.params;
            const Register = await database.Register.findOne({ where: { id: Number(id) } });
            return res.status(200).json(Register);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createRegister(req, res) {
        try {
            const newRegister = req.body;
            const Register = await database.Register.create(newRegister);
            return res.status(200).json(Register);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updateRegister(req, res) {
        try {
            const { id } = req.params;
            const newValues = req.body;
            await database.Register.update(newValues, { where: { id: Number(id) } });
            const Register = await database.Register.findOne({ where: { id: Number(id) } });
            return res.status(200).json(Register);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteRegister(req, res) {
        try {
            const { id } = req.params;
            await database.Register.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ message: `Id ${id} deleted!` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = RegistersController;