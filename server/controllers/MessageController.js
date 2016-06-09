var Message = require('./../db/models/message.js');
var User = require('./../db/models/user.js');
var db = require('./../db/config.js');

module.exports = {
  getMessages: (req, res) => {
    Message
    .query({ where: { sender: req.body.sender, receiver: req.body.receiver },
             orWhere: { sender: req.body.receiver, receiver: req.body.sender }})
    .orderBy('created_at', 'ASC')
    .fetchAll()
    .then(messages => {
      res.status(200).send(messages);
    });
  },

  sendMessage: (req, res) => {
    new Message(req.body).save().then(() => res.status(200));
  },

  newFeedback: (req, res) => {
    new Feedback(req.body)
      .save()
      .then(feedback => {
        new Item({ id: req.body.item_id, feedback: feedback.attributes.id });
        res.send();
      });
  }

}