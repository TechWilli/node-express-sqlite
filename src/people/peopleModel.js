const openDb = require("../database/configDB");

class PeopleModel {

    static async create() {
        openDb()
            .then(db => {
                const CREATE_TABLE = `
                CREATE TABLE IF NOT EXISTS people (
                    id TEXT PRIMARY KEY,
                    name TEXT,
                    age INTEGER,
                    job TEXT
                )`


                db.exec(CREATE_TABLE)
                db.close()

            }).catch(error => console.log('error openDb createPeopleTable:', error))
    }

    static async select() {
        return openDb()
            .then(db => {
                const SELECT_PEOPLE = `SELECT * FROM people`

                // para retorno de grande massa de dado, o db.all é o ideal
                return db.all(SELECT_PEOPLE)

            }).catch(error => console.log('error openDb selectPeople:', error))
    }

    static async insert(id, name, age, job) {
        return openDb()
            .then(db => {
                // const INSERT_PEOPLE = 'INSERT INTO people (id, name, age, job) VALUES (?, ?, ?, ?)'

                const INSERT_PEOPLE = `
                INSERT INTO people (id, name, age, job)
                VALUES ("${id}", "${name}", ${age}, "${job}")`

                db.run(INSERT_PEOPLE)
                db.close()

                return { id, name, age, job }

            }).catch(error => console.log('error openDb insertPeople:', error))
    }

    static async update(id, columnsToUpdate) {
        return openDb()
            .then(db => {
                const UPDATE_PEOPLE = `
                UPDATE people
                SET ${columnsToUpdate}
                WHERE id = "${id}"
            `

                db.run(UPDATE_PEOPLE)
                db.close()

            }).catch(error => console.log('error openDb updatePeople:', error))
    }

    static async delete(id) {
        return openDb()
            .then(db => {
                const DELETE_PEOPLE = `
                DELETE FROM people
                WHERE id = "${id}"
            `

                db.run(DELETE_PEOPLE)
                db.close()

            }).catch(error => console.log('error openDb deletePeople:', error))
    }

}

module.exports = PeopleModel