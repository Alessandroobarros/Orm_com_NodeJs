const database = require('../models')

class PesssoaController {
    static async pegaTodasAsPessoas(req, res){
        try {
            const todasAsPessoas = await database.Pessoas.findAll()
            return res.status(200).json(todasAsPessoas)            
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

    static async pegaUmaPessoa(req, res){
        const { id } = req.params
        try {
            const umaPessoa = await database.Pessoas.findOne({ where: { id: Number(id) }})
            return res.status(200).json(umaPessoa)            
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

    static async criaPessoa(req, res){
        const novaPessoa = req.body
        try {
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
            const { id } = novaPessoaCriada
            return res.status(200).json({message: `Pessoa criada com sucesso id: ${id}`})            
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

    static async atualizarPessoa(req, res){
        const { id } = req.params
        const novasInfo = req.body
        try {
            await database.Pessoas.update(novasInfo, { where: { id: Number(id) }})
            const pessoaAtualizada = await database.Pessoas.findOne({ where: { id: Number(id) }})
            return res.status(200).json(pessoaAtualizada)            
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

    static async apagarPessoa(req, res){
        const { id } = req.params
        try {
            await database.Pessoas.destroy({ where: { id: Number(id) }})
            return res.status(200).json({message: `Pessoa excluida com sucesso`})            
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }
}

module.exports = PesssoaController