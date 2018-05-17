const cors = require('cors')
const express = require('express')
const app = module.exports = express()
const list = require('lista-impropria-api')

app.use(cors({ origin: '*' }))

app.get('/', (req, res) => {
    list.testamEmAnimais().then(function (tabela) {
        res.send(tabela)
    }, function (err) {
        res.send(err)
    })
})

app.listen(process.env.PORT || 80, () => {
    console.log('App listening on port 80!')
})