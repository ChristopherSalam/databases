var models = require('../models');
var bluebird = require('bluebird');

//Part 2

module.exports = {
  messages: {
    get: function (req, res) {
      Messages.findAll( { include: [User] } )
        .complete(function(err, results){
          res.json(results); // research this later
        });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      User.findOrCreate({username: req.body.username})
        .complete(function(err, user){
          user.id // we are doing this because username may
          //create new dups, rather than checking to see
          //if we have an individual id available.
          // scope of this function extended to allow line 23
        var params = {text: req.body.text, // in sequelize
                      // req.body.username, // you build an object
                      userid : user.id,//??, // not an array.
                      roomname: req.body.roomname };

        Message.create(params).complete(function(err, results){
          res.sendStatus(201);
        });
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      User.findAll()
        .complete(function(err, results){
          res.json(results); // research this later
        });
    },
    post: function (req, res) {
      User.create({username: req.body.username})
        .complete(function(err, user){
          res.sendStatus(201);
        });
    }
  }
};

// //Part 1
// module.exports = {
//   messages: {
//     get: function (req, res) {
//       models.messages.get(function(err, results){
//         if (err) { throw err; }
//         res.json(results); // research this later
//       });
//     }, // a function which handles a get request for all messages
//     post: function (req, res) {
//       var params = [req.body.text,
//                     req.body.username,
//                     req.body.roomname ]
//       models.messages.post(params, function(err, results){
//         res.json(results);
//       });
//     } // a function which handles posting a message to the database
//   },

//   users: {
//     // Ditto as above
//     get: function (req, res) {
//       models.users.get(function(err, results){
//         if (err) { throw err; }
//         res.json(results);
//       });
//     },
//     post: function (req, res) {
//       var params = [req.body.username ]
//       models.messages.post(params, function(err, results){
//         res.json(results);
//       });
//     }
//   }
// };
