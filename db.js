var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var personas = new Schema({
	name				: String,
	surname 		: String,
	fullname 		: String,
	email  			: String,
	last_active : Date,
})

var admin = new Schema ({
	username : String,
	password : String,
})

/* If admin is true, then the admin said it */
var conversations = new Schema({
	persona_id	: {type: Schema.Types.ObjectId, ref: 'personas'},
	messages 		: [{
		date_sent : Date,
		content 	: String,
		admin 		: Boolean 
	}]
})


mongoose.model( 'personas', personas );
mongoose.model( 'admin', admin );
mongoose.model( 'conversations', conversations );

mongoose.connect( 'mongodb://localhost/turing' );