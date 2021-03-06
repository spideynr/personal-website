var mongoose = require( 'mongoose' );
var personas = mongoose.model( 'personas', personas );

exports.check = function(req,res,next){
	if(!req.cookies.persona){
		var persona = new personas({
			last_active : Date.now()
		});
		persona.save(function(err){
			if(err){
				return;
			}
			res.cookie('persona',persona._id, { expires:new Date(Date.now()+15552000000), httpOnly: true });
			next();
		})
	}
	else{
		next();
	}
}