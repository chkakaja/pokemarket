module.exports = function(app, passport) {
  app.get('/login',
  (req, res) => {
    res.status(200).render('login');
  });

  app.get('/signout', 
  (req, res) => {
    req.logout();
    res.status(302).redirect('/');
  });

  app.get('/auth/facebook', passport.authenticate('facebook'));

  app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { 
    successRedirect: '/',
    failureRedirect: '/login'
  }));
}