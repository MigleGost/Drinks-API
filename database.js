let mysql = require('mysql')

let connection = mysql.createConnection({
    host: 'sql11.freemysqlhosting.net',
    user: 'sql11471058',
    password: 'nqi2cuTN25',
    database: 'sql11471058'
})

connection.connect(function (err) {
    if (err) {
        return console.error('error: ' + err.message)
    }
    console.log('Connected to the MySQL server.')
})

function getByName(drinkName) {
    connection.query("SELECT * FROM `TABLE 1` WHERE `strDrink` LIKE '" + drinkName + "'", function (err, result) {
        if (err) {
            return console.error('error: ' + err.message)
        }
        console.log(result)
    })
}

function getByFilter(alcoholic, category, glass, ingredient) {
    connection.query("SELECT * FROM `TABLE 1` WHERE `strAlcoholic` LIKE '" + alcoholic + "' AND `strCategory` LIKE '" + category + "' AND `strGlass` LIKE '" + glass + "' AND `strIngredient1` LIKE '" + ingredient + "' ", function (err, result) {
        if (err) {
            return console.error('error: ' + err.message)
        }
        console.log(result)
    })
}

function getByAlcoholic(alcoholic) {
    connection.query("SELECT * FROM `TABLE 1` WHERE `strAlcoholic` LIKE '" + alcoholic + "'", function (err, result) {
        if (err) {
            return console.error('error: ' + err.message)
        }
        console.log(result)
    })
}

function getByCategory(category) {
    connection.query("SELECT * FROM `TABLE 1` WHERE `strCaregory` LIKE '" + category + "'", function (err, result) {
        if (err) {
            return console.error('error: ' + err.message)
        }
        console.log(result)
    })
}

function getOneRandom() {
    connection.query("SELECT * FROM `TABLE 1` ORDER BY RAND() LIMIT 1", function (err, result) {
        if (err) {
            return console.error('error: ' + err.message)
        }
        console.log(result)
    })
}

function getXRandom(x) {
    connection.query("SELECT * FROM `TABLE 1` ORDER BY RAND() LIMIT "+x+"", function (err, result) {
        if (err) {
            return console.error('error: ' + err.message)
        }
        console.log(result)
    })
}

function getCategoryRandom(category) {
    connection.query("SELECT * FROM `TABLE 1` WHERE `strCategory` LIKE '"+category+"' ORDER BY RAND() LIMIT 1", function (err, result) {
        if (err) {
            return console.error('error: ' + err.message)
        }
        console.log(result)
    })
}

connection.end()