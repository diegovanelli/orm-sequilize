const database = require('../models');

class ClassesController {
    static async getClasses(req, res) {
        try {
            const classes = await database.Class.findAll();
            return res.status(200).json(classes);
        } catch(error) {
            return res.status(500).json(error.message);
        }
    }
    
    static async getClass(req, res) {
        try {
            const { id } = req.params;
            const english_class = await database.Class.findOne({ where: { id: Number(id) }});
            return res.status(200).json(english_class);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createClass(req, res) {
        try {
            const newClass = req.body;
            const english_class = await database.Class.create(newClass);
            return res.status(200).json(english_class);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updateClass(req, res) {
        try {
            const { id } = req.params;
            const newValues = req.body;
            await database.Class.update(newValues, { where: { id: Number(id) }});
            const english_class = await database.Class.findOne({ where: { id: Number(id) }});
            return res.status(200).json(english_class);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteClass(req, res) {
        try {
            const { id } = req.params;
            await database.Class.destroy({ where: { id: Number(id) }});
            return res.status(200).json({ message: `Id ${id} deleted!`});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = ClassesController;