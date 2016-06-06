var db = require('./server/db/config');
var User = require('./server/db/models/user');
var Item = require('./server/db/models/item');
var Feedback = require('./server/db/models/feedback.js');


var seedData = {
	items: [
	{ 

		seller_id:1,
		title: 'Hat',
		description: 'Great hat. Never wore!',
		picture:'http://images.footballfanatics.com/FFImage/thumb.aspx?i=/productImages/_1890000/ff_1890568_full.jpg&w=245',
		duration: 2,	
		currentBid: 14,	

	},
	{	
		seller_id:1,
		title: 'Iphone',
		description: 'new iphone still in the box',
		picture:'http://images.travelpod.com/tripwow/photos2/ta-069b-ece8-2fb6/apple-ipone-igs-jakarta-indonesia%2B1152_13485948504-tpfil02aw-29128.jpg',
		duration: 5,
		currentBid: 100,
	},
	{
		seller_id:1,
		title: 'star wars t-shirt',
		description: 'cool star wars t-shirt',
		picture:'http://www.theshirtlist.com/wp-content/uploads/2012/09/Star-Wars-Logo-T-Shirt.jpg',
		duration: 5,
		currentBid: 12
	},
	{
		seller_id:1,
		title: 'sunglasses',
		description: 'Look cool in these new glasses',
		picture:'http://cdn.business.transworld.net/wp-content/blogs.dir/1/files/2016-sunglasses-showroom/SUNGLASSES-TRENDS_02.jpg',
		duration: 7,
		currentBid: 40
	},
	{
		seller_id:2,
		title: 'Game of thrones dvd',
		description: 'Best show out there!',
		picture: 'http://cdn.hbowatch.com/wp-content/uploads/2012/03/Game-of-Thrones-DVD-Blu-Ray.jpg',
		duration: 1,
		currentBid: 20
	},
	{
		seller_id:2,
		title: 'nba jersey',
		description: 'Curry jersey',
		picture:'http://www.dickssportinggoods.com/graphics/product_images/pDSP1-20083265v750.jpg',
		duration: 1,
		currentBid: 60
	},
	{
		seller_id:2,
		title: 'hat',
		description: 'cool green hat',
		picture:'http://assets.craniumfitteds.com/images/main/06-New-York-Yankees-MLB-Kelly-Green-And-White-Basic-New-Era-Cap-5950-Custom-59fifty-Fitted-Cap-1.jpg',
		duration: 1,
		currentBid: 5
	},
	{
		seller_id:2,
		title: 't-shirt',
		description: 'rare t-shirt',
		picture:'https://image.spreadshirtmedia.net/image-server/v1/products/107825272/views/1,width=378,height=378,appearanceId=407,version=1438837740/Tested-on-Animals---Didn-t-Fit-T-Shirts.png', 
		duration: 2,
		currentBid: 10
	},
	{
		seller_id:2,
		title: 'blue t-shirt',
		description: 'Last one get it while you can!',
		picture:'http://scene7.targetimg1.com/is/image/Target/17314201?wid=410&hei=410',
		duration: 5,
		currentBid: 11,
	},
	{
		seller_id:1,
	    title: 'text books',
		description: 'random text books',
		picture:'http://www.gijobs.com/wp-content/uploads/2014/08/textbooks.resized-1.jpg',
		duration: 3,
		currentBid: 10
	},
	{
		seller_id:2,
		title: 'harry potter books',
		description: 'Great read!',
		picture:'http://prodimage.images-bn.com/pimages/9780545162074_p0_v2_s1200x630.jpg',
		duration: 5,
		currentBid: 40,
	},
	{	
		seller_id:1,
		title:'star wars legos',
		description:'Best set ever!',
		picture:'http://www.toysrus.com/graphics/product_images/pTRU1-20241710enh-z6.jpg',
		duration: 2,
		currentBid: 15,
	},
	{	
		seller_id:2,
		title: 'legos',
		description: 'never opened box!',
		picture:'https://i.kinja-img.com/gawker-media/image/upload/s--3IymSRpo--/c_scale,fl_progressive,q_80,w_800/1462020208386129578.jpg',
		duration: 3,
		currentBid: 20,
	},
	{	
		seller_id:2,
		title: 'painting',
		description: 'really nice painting',
		picture:'https://afremov.com/image.php?type=P&id=19095',
		duration: 1,
		currentBid: 40
	},
	{	
		seller_id:1,
		title: 'surfboard',
		description:'the best surfboard. Moving need to sell',
		picture:'http://cdn.shopify.com/s/files/1/1042/8594/products/PigDog_deck_tailpatch_SUPERbrand_31c812c8-ee3f-42ed-b6ba-a82c5dafa2bc_1024x1024.jpg?v=1460509432',
		duration:2,
		currentBid:80,
		end_at: '2016-02-06 21:19:55.000'
	},
	{	
		seller_id:2,
		title: 'cell phone',
		description:'slightly used iphone',
		picture:'http://cdn.macrumors.com/article-new/2016/02/iphoneserosegold-800x898.jpg',
		duration:1,
		currentBid: 100
	},
	{	
		seller_id:1,
		title: 'boardgame',
		description: 'hours of fun!',
		picture:'http://screenrant.com/wp-content/uploads/Settlers-of-Catan-Board-Game-Play-Set.jpg',
		duration:2,
		currentBid: 10,
	},
	{	
		seller_id:2,
		title: 'Risk! (boardgame)',
		description: 'Risk is the best!',
		picture:'http://www.pogo.com/hotdeploy/us/promotions/img/game-landing/risk/overview-q1.jpg',
		duration:1,
		currentBid:8,
	},
	{	
		seller_id:1,
		title: 'cat painting',
		description: 'love cats!',
		picture:'http://static1.squarespace.com/static/52784cdde4b07cdbb003018f/537abe38e4b0ff62ffbb6786/56036d26e4b008bd0ad827f0/1443065129884/Cat-in-Window-Painting-HOME.jpg',
		duration:5,
		currentBid: 50,
		current_bidder: 1,
		end_at: '2016-02-06 21:19:55.000'
	},
	{	
		seller_id:2,
		title: 'dogs playing poker painting',
		description:'classic',
		picture:'http://www.dogsplayingpoker.org/gallery/coolidge/img/a_friend_in_need.jpg',
		duration:4,
		currentBid:30,
		current_bidder: 2,
		end_at: '2016-02-06 21:19:55.000'
	},
	{	
		seller_id:1,
		title:'cards',
		description:'rare playing cards',
		picture:'http://thumbs.ebaystatic.com/images/g/1E0AAOxyYSJR8ZEo/s-l225.jpg',
		duration:3,
		currentBid:8,
		current_bidder: 2,
		end_at: '2016-02-06 21:19:55.000'
	},
	{	
		seller_id:1,
		title: 'signed basketball',
		description: 'signed by curry',
		picture:'http://cdn1.bigcommerce.com/n-ou1isn/5irfm624/products/786/images/1192/Warriors_CurryBB__67701.1396227695.1280.1280.jpg?c=2',
		duration:1,
		currentBid:80
	},
	{	
		seller_id:1,
		title:'basketball',
		description:'brand new ball',
		picture:'http://ecx.images-amazon.com/images/P/B008VTKHK0.01-A3RQY5TOZ9O97T._SS1740_SCRMZZZZZZZ_V391853133_.jpg',
		duration:6,
		currentBid:15
	},								
	],

	feedback:[
     {
     	author_id:1,
     	receiver_id:2,
     	rating:1,
     	item_id:19,
     	comment: 'This is great'
     },
     {
     	author_id:2,
     	receiver_id:1,
     	rating:1,
     	item_id:20,
     	comment: 'Dogs dont play poker! '
     },
     {
     	author_id:2,
     	receiver_id:1,
     	rating:1,
     	item_id:21,
     	comment: 'Thanks this was amazing. Just what i was looking for'
     },
     {
     	author_id:1,
     	receiver_id:2,
     	rating:1,
     	item_id:15,
     	comment: 'Thanks this was amazing. Just what I was looking for'
     },

     ],
     users:[

  	{
  		name: 'Carol Alabccijfidab Wongescu',
  		// email: 'carol@carol.com',
  		facebookId:'113472865740682', 
  		address: '123 fake st 94116', 
  		bio: 'I like cat and I am 70 years old :)' ,
  		picture: 'http://media.salon.com/2010/03/my_terror_of_ending_up_an_old_cat_lady.jpg',
  	},
  	{
  		name: 'Dick Alabdhefaahgf Seligsteinson',
  		// email: 'dick@dSeligsteinson.com',
  		facebookId:'102067280219459', 
  		address: '123 main st 94115',
  		bio: 'dicks my name selling thing is my game', 
  		picture:'https://timemilitary.files.wordpress.com/2013/11/matthew-weiner.jpg',
  	}
     ]
}


for(var i = 0; i < seedData.users.length; i++){
	console.log('new user',i);
	new User({
		name: seedData.users[i].name,
		email: seedData.users[i].email,
		facebookId: seedData.users[i].facebookId,
		address: seedData.users[i].address,
		bio: seedData.users[i].bio,
		picture: seedData.users[i].picture
	}).save();
};
for(var j = 0; j < seedData.items.length; j++){
	console.log('new item', j);
	new Item({
		seller_id: seedData.items[j].seller_id,
		title:seedData.items[j].title,
		description:seedData.items[j].description,
		picture:seedData.items[j].picture,
		duration:seedData.items[j].duration,
		currentBid:seedData.items[j].currentBid,
		end_at: seedData.items[j].end_at
	}).save()
};
for(var k = 0; k < seedData.feedback.length; k++){
   console.log('new feedback', k);
	new Feedback({
     	author_id:seedData.feedback[k].author_id,
     	receiver_id:seedData.feedback[k].receiver_id,
     	rating:seedData.feedback[k].rating,
     	item_id:seedData.feedback[k].item_id,
     	comment:seedData.feedback[k].comment,
	}).save();
}
