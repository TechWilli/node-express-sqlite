const openDb = require('../database/configDB')
const { v1: uuidv1 } = require('uuid')
const PeopleModel = require('./peopleModel')

class PeopleController {

    static async createTable() {
        PeopleModel.create()
    }

    static async select() {
        return PeopleModel.select()
    }

    static async insert(values) {
        const id = uuidv1()

        const { name, age, job } = values

        return PeopleModel.insert(id, name, age, job)
    }

    static async update(id, valuesToUpdate) {

        let columnsToUpdate = ''

        for (let [column, value] of Object.entries(valuesToUpdate)) {
            columnsToUpdate += `${column} = "${value}", `
        }

        // para remover a vírgula e espaço no final
        columnsToUpdate = columnsToUpdate.replace(/(, )$/, '')

        // console.log('columnsToUpdate: ', columnsToUpdate)

        PeopleModel.update(id, columnsToUpdate)
    }

    static async delete(id) {
        PeopleModel.delete(id)
    }
}

module.exports = PeopleController