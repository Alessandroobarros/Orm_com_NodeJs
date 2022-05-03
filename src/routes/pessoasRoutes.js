const { Router } = require('express')
const PesssoaController = require('../controllers/PessoaController')

const router = Router()
router
.get('/pessoas', PesssoaController.pegaTodasAsPessoas)
.get('/pessoa/:id', PesssoaController.pegaUmaPessoa)
.post('/pessoa', PesssoaController.criaPessoa)
.put('/pessoa/:id', PesssoaController.atualizarPessoa)
.delete('/pessoa/:id', PesssoaController.apagarPessoa)
.get('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaController.pegaUmaMatricula)
.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
.put('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaController.atualizaMatricula)
.delete('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaController.apagaMatricula)
module.exports = router