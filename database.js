let mysql = require('mysql')

let connection = mysql.createConnection({
    host: 'sql11.freemysqlhosting.net',
    user: 'sql11471058',
    password: 'nqi2cuTN25',
    database: 'sql11471058'
})

connection.connect(function(err) {
    if(err) {
        return console.error('error: ' + err.message)
    }
    console.log('Connected to the MySQL server.')
})

function getByName(drinkName) {
connection.query("SELECT * FROM `TABLE 1` WHERE `strDrink` LIKE '"+drinkName+"'", function(err, result)
{
    if(err) {
        return console.error('error: ' + err.message)
    }
    console.log(result)
})}

function getByFilter(category, ingredient) {
    connection.query("SELECT * FROM `TABLE 1` WHERE `strCategory` LIKE '"+drinkName+"'", function(err, result)
    {
        if(err) {
            return console.error('error: ' + err.message)
        }
        console.log(result)
    })}

function filterAlcoholic(alcoholic) {
connection.query("SELECT * FROM `TABLE 1` WHERE `strAlcoholic` LIKE '"+alcoholic+"'", function(err, result)
{
    if(err) {
        return console.error('error: ' + err.message)
    }
    console.log(result)
})}

connection.end()