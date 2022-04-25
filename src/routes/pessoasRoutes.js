const { Router } = require('express')
const PesssoaController = require('../controllers/PessoaController')

const router = Router()
router
.get('/pessoas', PesssoaController.pegaTodasAsPessoas)
.get('/pessoa/:id', PesssoaController.pegaUmaPessoa)
.post('/pessoa', PesssoaController.criaPessoa)
.put('/pessoa/:id', PesssoaController.atualizarPessoa)
.delete('/pessoa/:id', PesssoaController.apagarPessoa)
module.exports = router