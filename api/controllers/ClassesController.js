const { ClassesServices } = require('../services')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const classesServices = new ClassesServices()

class ClassesController {
    static async getClasses(req, res) {
        const { begin_date, end_date } = req.query
        const where = {}
        begin_date || end_date ? where.begin_date = {} : null
        begin_date ? where.begin_date[Op.gte] = begin_date : null
        end_date ? where.begin_date[Op.lte] = end_date : null
        try {
            const classes = await classesServices.getAll(where);
            return res.status(200).json(classes);
        } catch(error) {
            return res.status(500).json(error.message);
        }
    }
    
    static async getClass(req, res) {
        const { id } = req.params;
        try {
            const english_class = await classesServices.getOne({ id });
            return res.status(200).json(english_class);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createClass(req, res) {
        const newClass = req.body;
        try {
            const english_class = await classesServices.create(newClass);
            return res.status(200).json(english_class);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updateClass(req, res) {
        const { id } = req.params;
        const newValues = req.body;
        try {
            await classesServices.update(newValues, { where: { id: Number(id) }});
            return res.status(200).json({ message: `id ${id} updated` })
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteClass(req, res) {
        const { id } = req.params;
        try {
            await classesServices.remove(id);
            return res.status(200).json({ message: `Id ${id} deleted!`});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async restoreClass(req, res) {  
        const { id } = req.params
        try {
          await classesServices.restore(id)
          return res.status(200).json({ message: `id ${id} restored` })
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }
}

module.exports = ClassesController;