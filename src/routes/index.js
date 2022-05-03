const bodyParser = require('body-parser')
const pessoas = require('./pessoasRoutes')
const niveis = require('./niveisRoutes')
const turma = require('./turmaRoutes')

module.exports = app => {
    app.use(
        bodyParser.json(),
        pessoas,
        niveis,
        turma
    )
}