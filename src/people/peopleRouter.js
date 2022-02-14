const express = require('express')
const PeopleController = require('./peopleController')

PeopleController.createTable()

const router = express.Router()

router.get('/people', (req, res) => {

    PeopleController.select()
        .then(data => {
            res.json({
                message: 'Seleção de people feita com sucesso!',
                data: data
            })

        }).catch(error => console.log('error selectPeople:', error))
})

router.post('/people', (req, res) => {

    console.log('req.body post', req.body)

    PeopleController.insert(req.body)
        .then((data) => {

            res.json({
                message: 'POST people criado com sucesso!',
                data: data
            })

        }).catch(error => console.log('error insertPeople:', error))

})

router.put('/people/:id', (req, res) => {
    const { id } = req.params

    console.log('id do params put', id)
    console.log('req.body put', req.body)

    PeopleController.update(id, req.body)
        .then(() => {
            res.json({
                message: 'Pessoa atualizada com sucesso!',
                id,
                updatedColumns: req.body
            })
        }).catch(error => console.log('error updatePeople:', error))
})

router.delete('/people/:id', (req, res) => {

    const { id } = req.params

    PeopleController.delete(id)
        .then(() => {

            res.json({
                message: 'Pessoal removida com sucesso!',
                id
            })

        }).catch(error => console.log('error openDb deletePeople:', error))
})

module.exports = router