var mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
    genres: [{ type: mongoose.Schema.Types.ObjectId, ref:'Genre'}],
    //source:  we need to determine the source
});

module.exports = mongoose.model('Image', imageSchema);