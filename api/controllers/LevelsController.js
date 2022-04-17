const Services = require('../services/Services')
const levelsServices = new Services('Levels')

class LevelsController {
    static async getLevels(req, res) {
        try {
            const levels = await levelsServices.getAll();
            return res.status(200).json(levels);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getLevel(req, res) {
        const { id } = req.params;
        try {
            const level = await levelsServices.getOne({ id });
            return res.status(200).json(level);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createLevel(req, res) {
        const newLevel = req.body;
        try {
            const level = await levelsServices.create(newLevel);
            return res.status(200).json(level);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updateLevel(req, res) {
        const { id } = req.params;
        const newValues = req.body;
        try {
            await levelsServices.update(newValues, id);
            return res.status(200).json({ message: `id ${id} updated` })
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteLevel(req, res) {
        const { id } = req.params;
        try {
            await levelsServices.remove(id);
            return res.status(200).json({ message: `Id ${id} deleted!` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async restoreLevel(req, res) {  
        const { id } = req.params
        try {
          await levelsServices.restore(id)
          return res.status(200).json({ message: `id ${id} restored` })
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }
}

module.exports = LevelsController;