var Image = require('../models/Image');
var User = require('../models/User');

module.exports = {
    showTest: function(req,res,next){
		Image.find({}).populate('genres').exec(function(images) {
			res.render('recTests/test1', {user: req.userModel, images});
		})
    }
}

// use getAttribute on td element to get the genre IDs for that element
// do .split(',') and save to get array separated genres
// pass the genres back to the controller to do API call