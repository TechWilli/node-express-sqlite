// arquivo para abrir o banco de dados e chamá-lo no app.js
const sqlite3 = require('sqlite3')
const { open } = require('sqlite')
const path = require('path')

console.log('__dirname', __dirname) // __dirname pega sempre o diretório (pasta) no qual a variavel foi chamada
console.log('path to save database', path.join(__dirname, 'database.db'))

async function openDb() {

    return open({
        filename: path.join(__dirname, 'database.db'), // para salvar corretamente o db na pasta database, usando apenas '../database/database.db' não funciona
        driver: sqlite3.Database
    })
}

module.exports = openDb