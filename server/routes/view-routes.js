module.exports = function(app) {
  app.get('/', 
  function(req, res) {
    res.render('market');
  });

  app.get('/haggle', 
  function(req, res) {
    res.render('haggle');
  });
}