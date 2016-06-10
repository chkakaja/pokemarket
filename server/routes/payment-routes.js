var stripe = require('stripe')('sk_test_3u2i0PNE5I7KqzBaCkQomgtz');


module.exports = function(app) {
  app.post('/api/stripe', function(req, res) {
    var stripeToken = req.body.stripeToken;

    var charge = stripe.charges.create({
      amount: 1000, // amount in cents, again
      currency: 'usd',
      source: stripeToken.id,
      description: 'Example charge'
    }, function(err, charge) {
      if (err && err.type === 'StripeCardError') {
        // The card has been declined
        res.send('err', err);
        // res.status(500).send(err);
      }
       else {
        res.send('success');
        // res.status(204).send('Charged: ', charge);
      }
    });
  })
}