module.exports = function(app, passport) {
  app.get('/auth/facebook',
    passport.authenticate('facebook'));

  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', { successRedirect: '/',
                                        failureRedirect: '/' }));

  app.get('/signout' , (req, res) => {
    // check to see if this actually works
    req.session.destroy();
    res.redirect('/');
  });
}