// FILE TO CONNECT TO PG DATABASE

// Dependencies
const pg = require("pg");
const settings = require("./settings"); // settings.json

// Connection to db via the client object
const client = new pg.Client({
  user: settings.user,
  password: settings.password,
  database: settings.database,
  host: settings.hostname,
  port: settings.port,
  ssl: settings.ssl
});

// Fonction to print the result on lines
function output (input) {
  var count = input.length;
  var i = 1;
  for (var person of input) {
    var index = i;
    let name = person.first_name;
    let surname = person.last_name;
    let year = person.birthdate.getFullYear();
    let month = person.birthdate.getMonth();
    let day = person.birthdate.getDay();
    console.log("- " + index + ": " + name + " " + surname + ", born " + year + "-" + month + "-" + day);
    i++;
  }
};

// Connection then query to find the rows with a name typed in the shell
client.connect(err => {
  console.log(`Connected to ${client.database}`);

  const nameSearched = process.argv[2];
  const query = `SELECT * FROM famous_people WHERE first_name LIKE $1 OR last_name LIKE $1;`;
  client.query(query, [nameSearched], (err, res) => {
    output(res.rows);
  })
});













