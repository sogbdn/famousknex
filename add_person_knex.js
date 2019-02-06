// inserting  one famous people using knex instead of using the pg package

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
});

const firstName = process.argv[2];
const lastName = process.argv[3];
const birthdate = new Date('06-06-1986');

knex('famous_people')
  .insert({ first_name: firstName, last_name: lastName, birthdate: birthdate })
  .asCallback(function (err, rows) {
    if (err) return console.error(err);
    console.log(`L'operation ${rows.command} a bien ete effectuee sur ${rows.rowCount} rangee`)
    knex.destroy();
  });
