var db = require('../db');
var mysql = require('mysql');

module.exports = {
  messages: {
    get: function (callback) {
      // SELECT * from chats
      //ID, TEXT, ROOMNAME, USERNAME
      var queryStr = "SELECT messages.id, messages.text, messages.roomname, \
                      users.username LEFT OUTER JOIN users ON (messages.userid = user.id) \
                      ORDER BY messages.id desc"
      db.query(queryStr, function(err, results){
        callback(results);
      });

    }, // a function which produces all the messages
    post: function () {
      //create a message
      var queryStr = "INSERT INTO MESSAGES(text, userid, roomname) /
                      values (?, (SELECT ID FROM USERS WHERE USERNAME = ? limit 1), ?)"
      db.query(queryStr, params, function(err, results){
        callback(results);
      });
  },
  users: {
    // Ditto as above.
    get: function (callback) {
      // SELECT usernames from chats
      var queryStr = "SELECT * FROM users"
      db.query(queryStr, function(err, results){
        callback(results);
      });
    },
    post: function (callback) {
      // INSERT INTO chats (username) values ( request.username )
      var queryStr = "INSERT INTO users(username) values (?)"
      db.query(queryStr, params, function(err, results){
        callback(results);
      });
    }
  }
};

