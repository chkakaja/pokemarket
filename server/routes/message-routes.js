var User = require('./../db/models/user');
var Message = require('./../db/models/message.js');

module.exports = function(app) {
  app.post('/getMessages', (req, res) => {
    Message
    .query({ where: { sender: req.body.sender, receiver: req.body.receiver },
             orWhere: { sender: req.body.receiver, receiver: req.body.sender }})
    .orderBy('created_at', 'ASC')
    .fetchAll()
    .then(messages => {
      res.status(200).send(messages);
    });
  });

  app.post('/sendMessage', (req, res) => {
    new Message(req.body).save().then(() => res.status(200));
  });

  app.get('/getuserid', (req, res) => {
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
  });
}