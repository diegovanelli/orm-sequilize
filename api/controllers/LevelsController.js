const database = require('../models');

class LevelsController {
    static async getLevels(req, res) {
        try {
            const levels = await database.Level.findAll();
            return res.status(200).json(levels);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getLevel(req, res) {
        try {
            const { id } = req.params;
            const level = await database.Level.findOne({ where: { id: Number(id) } });
            return res.status(200).json(level);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createLevel(req, res) {
        try {
            const newLevel = req.body;
            const level = await database.Level.create(newLevel);
            return res.status(200).json(level);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updateLevel(req, res) {
        try {
            const { id } = req.params;
            const newValues = req.body;
            await database.Level.update(newValues, { where: { id: Number(id) } });
            const level = await database.Level.findOne({ where: { id: Number(id) } });
            return res.status(200).json(level);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteLevel(req, res) {
        try {
            const { id } = req.params;
            await database.Level.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ message: `Id ${id} deleted!` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = LevelsController;