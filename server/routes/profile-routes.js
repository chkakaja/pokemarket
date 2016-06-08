var User = require('./../db/models/user');



module.exports = function(app) {
 app.get('/getprofile', (req, res) => {
   User
     .where({ id: req.query.id })
     .fetch()
     .then(user => res.send(user));
 });
}