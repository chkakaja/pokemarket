var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'auction_app'
  }
});
var db = require('bookshelf')(knex);

db.knex.schema.hasTable('users').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('users', function (user) {
      user.increments('id').primary();
      user.string('username', 255);
      user.string('password', 255);
      user.string('email', 255);
      user.integer('rating');
      user.string('address', 255);
      user.string('bio', 255);
      user.string('picture', 255);
      user.timestamps();
    }).then(function (table) {
      console.log('Created Table users:', table);
    });
  }
});

db.knex.schema.hasTable('items').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('items', function (item) {
      item.increments('id').primary();
      item.integer('seller_id');
      item.string('description', 255);
      item.integer('currentBid');
      // visits?
      item.string('picture', 255);
      item.string('created_at', 255);
      item.string('end_at', 255);
      item.timestamps();
    }).then(function (table) {
      console.log('Created Table items:', table);
    });
  }
});

db.knex.schema.hasTable('bids').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('bids', function (bid) {
      bid.increments('id').primary();
      bid.integer('user_id');
      bid.integer('item_id');
      bid.integer('amount');
      bid.timestamps();
    }).then(function (table) {
      console.log('Created Table bids:', table);
    });
  }
});

db.knex.schema.hasTable('watchLists').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('watchLists', function (watchList) {
      watchList.increments('id').primary();
      watchList.integer('user_id');
      watchList.integer('item_id');
      watchList.timestamps();
    }).then(function (table) {
      console.log('Created Table watchLists:', table);
    });
  }
});

db.knex.schema.hasTable('messages').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('messages', function (message) {
      message.increments('id').primary();
      message.integer('user_from');
      message.integer('user_to');
      message.string('message', 255);
      message.timestamps();
    }).then(function (table) {
      console.log('Created Table messages:', table);
    });
  }
});

db.knex.schema.hasTable('feedbacks').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('feedbacks', function (feedback) {
      feedback.increments('id').primary();
      feedback.integer('author_id');
      feedback.integer('receiver_id');
      feedback.integer('rating');
      feedback.string('comment', 255);
      feedback.timestamps();
    }).then(function (table) {
      console.log('Created Table feedbacks:', table);
    });
  }
});

module.exports = db;
