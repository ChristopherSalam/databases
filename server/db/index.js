var mysql = require('mysql');

//create a database access object in ORM (part 2)
var Sequelize = require("Sequelize");
var dbOrm = new Sequelize('chat','root','');
// npm install felixge/node-mysql  (do this tomorrow) *check*

var User = dbOrm.define('User', {
  username: Sequelize.STRING
});

var Message - dbOrm.define('Message', {
   text: Sequelize.STRING,
  roomname: Sequelize.STRING
});

User.hasMany('Messages');
Messages.belongsTo('User');

User.sync();
Messages.sync();

// PART 1

// (part 1)
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat". *Callback style mysql db connection only*
// var connection = mysql.createConnection({
//   // host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database : 'chat'
// });

// connection.connect();
// module.exports. = connection;