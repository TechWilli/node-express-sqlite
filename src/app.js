// Dica: para usar ES6 modules, é necessário expecificar "type": "module" no package.json

const express = require('express')
const peopleRouter = require('./people/peopleRouter')

const app = express()
const PORT = 3000

app.use(express.json())
app.use(peopleRouter)

app.get('/', (req, res) => {
    res.json({
        message: 'Server rodando OK!'
    })
})

app.listen(PORT, () => {
    console.log(`Server running successfully on http://localhost:${PORT}`)
})