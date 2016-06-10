var User = require('../models/user.js');

module.exports = {
  getUserId: (req, res) => {
    console.log("here in getUserId", req.session)
    if (req.session.hasOwnProperty('passport')) {
    console.log("here in getUserId inside passport")

      User
        .where({ facebookId: req.session.passport.user })
        .fetch()
        .then(user => {
          res.status(200).send(user);
        });
      return;
    }
    res.sendStatus(404);
  },

  getProfile: (req, res) => {
   User
     .where({ id: req.query.id })
     .fetch()
     .then(user => res.send(user));
   }
}
