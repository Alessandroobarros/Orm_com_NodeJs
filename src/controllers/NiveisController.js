const database = require('../models')

class NivelController {

    static async pegaTodosOsNiveis(req, res) {
        try {
            const todosOsNiveis = await database.Niveis.findAll()
            return res.status(200).json(todosOsNiveis)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegaUmNivel(req, res){
        const { id } = req.params
        try {
            const umaNivel = await database.Niveis.findOne({ where: { id: Number(id) }})
            return res.status(200).json(umaNivel)            
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

    static async criaNivel(req, res){
        const novaNivel = req.body
        try {
            const novaNivelCriada = await database.Niveis.create(novaNivel)
            const { id } = novaNivelCriada
            return res.status(200).json({message: `Nivel criada com sucesso id: ${id}`})            
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

    static async atualizaNivel(req, res){
        const { id } = req.params
        const novasInfo = req.body
        try {
            await database.Niveis.update(novasInfo, { where: { id: Number(id) }})
            const NivelAtualizada = await database.Nivels.findOne({ where: { id: Number(id) }})
            return res.status(200).json(NivelAtualizada)            
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

    static async apagaNivel(req, res){
        const { id } = req.params
        try {
            await database.Niveis.destroy({ where: { id: Number(id) }})
            return res.status(200).json({message: `Nivel excluida com sucesso`})            
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }
}

module.exports = NivelController