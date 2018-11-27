var mongoose = require('mongoose');
//connecting to mongo database and checking for error in connection
mongoose.connect('mongodb://localhost/database', function(err) {
	if (err) throw err;
	console.log('Successfully Connected')
});

//Organiser Schema
var organiserSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	organiser: String,
	password: String,
	email_org: String,
	event_title: String,
	date: Date,
	duration: Number,
	price: Number,
	total_seats: Number,
	location: [
		{
			state: String,
			city: String,
			college: String,
		}
	],
	created: {
		type: Date,
		default: Date.now
	}
});

//User Schema
var userSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	username: String,
	password: String,
	events: [String],
	email: String,
	profile_pic: Buffer,
	created: {
		type: Date,
		default: Date.now
	}
});




