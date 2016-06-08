var User = require('./../db/models/user.js');

module.exports = {
  getUserId: (req, res) => {
    if (req.session.hasOwnProperty('passport')) {
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
