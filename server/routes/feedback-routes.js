var db = require('./../db/config');
var Feedback = require('./../db/models/feedback.js');
var User = require('./../db/models/user');
var Item = require('./../db/models/item');

module.exports = function(app) {
  app.get('/feedback', (req, res) => {
    db.knex('feedback')
      .where({ receiver_id: req.query.receiver })
      .innerJoin('users', 'feedback.author_id', '=', 'users.id')
      .then(feedbackArray => {
        res.status(200).send(feedbackArray);
      });
  });

  app.get('/toleavefeedback', (req, res) => {
    if (req.session.hasOwnProperty('passport')) {
      User
        .where({ facebookId: req.session.passport.user })
        .fetch()
        .then(user => {
          db.knex('items')
            .where({ current_bidder: user.id, feedback: null })
            .andWhere('end_at', '<', new Date())
            // 2016-06-06T23:11:07.828Z
            // 2016-06-12 15:59:22.632
            .then(items => res.status(200).send(items));
        });
    }
    res.status(404);
  });

  app.post('/leavefeedback', (req, res) => {
    new Feedback(req.body)
      .save()
      .then(feedback => {
        new Item({ id: req.body.item_id, feedback: feedback.attributes.id });
        res.send();
      });
  });
}