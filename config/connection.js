// Set up MySQL connection.
var mysql = require("mysql");
var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  

 connection = mysql.createConnection({
  host: "edo4plet5mhv93s3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "sa202o9ekn1xm0rl",
  password: "tsqqv0698lufrqh0",
  database: "zwavtq0iuomht1bn"
});
};

// Make connection.
connection.connect();
  
// Export connection for our ORM to use.
module.exports = connection 