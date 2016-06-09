if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({path: './env/development.env'});
} else if (process.env.NODE_ENV === 'production') {
  require('dotenv').config({path: './env/production.env'});
}

var db = require('./../server/initialize/db-init');
var User = require('./../server/models/user');
var Item = require('./../server/models/item');
var Feedback = require('./../server/models/feedback.js');

var seedData = {
  items: require('./seedItems'),
  users: require('./seedUsers'),
	feedback: require('./seedFeedback')
};

for (var i = 0; i < seedData.users.length; i++) {
	console.log('new user', i);
	new User({
		name: seedData.users[i].name,
		email: seedData.users[i].email,
		facebookId: seedData.users[i].facebookId,
		address: seedData.users[i].address,
		bio: seedData.users[i].bio,
		picture: seedData.users[i].picture
	}).save();
};

for (var i = 0; i < seedData.items.length; i++) {
	console.log('new item', i);
	new Item({
		seller_id: seedData.items[i].seller_id,
		title:seedData.items[i].title,
		description:seedData.items[i].description,
		picture:seedData.items[i].picture,
		duration:seedData.items[i].duration,
    currentBid:seedData.items[i].currentBid,
		originalPrice:seedData.items[i].originalPrice,
		end_at: seedData.items[i].end_at
	}).save()
};

for (var i = 0; i < seedData.feedback.length; i++) {
  console.log('new feedback', i);
	new Feedback({
     	author_id:seedData.feedback[i].author_id,
     	receiver_id:seedData.feedback[i].receiver_id,
     	rating:seedData.feedback[i].rating,
     	item_id:seedData.feedback[i].item_id,
     	comment:seedData.feedback[i].comment,
	}).save();
}
