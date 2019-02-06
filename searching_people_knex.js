// searching famous people by name) using knex instead of using the pg package

// Initialize the library
var knex = require('knex')({
  client: 'pg',
  connection: {
    "user": "development",
    "password": "development",
    "database": "test_db",
    "hostname": "localhost",
    "port": 5432,
    "ssl": true
  },
  searchPath: ['knex', 'public'],
})

function output (input) {
  var count = input.length;
  var i = 1;
  for (var person of input) {
    var index = i;
    let name = person.first_name;
    let surname = person.last_name;
    let year = person.birthdate ? person.birthdate.getFullYear() : NaN;
    let month = person.birthdate ? person.birthdate.getMonth() : NaN;
    let day = person.birthdate ? person.birthdate.getDay() : NaN;
    console.log("- " + index + ": " + name + " " + surname + ", born " + year + "-" + month + "-" + day);
    i++;
  }
};

// Queries 
const searchedName = process.argv[2];

knex('famous_people')
  .where(function () {
    this.where('first_name', searchedName)
      .orWhere('last_name', searchedName)
      .select("first_name", "last_name", "birthdate")
  })

  .asCallback(function (err, rows) {
    output(rows);
    knex.destroy();
  })
