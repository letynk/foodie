const mongoose = require('mongoose');

// creating data schema
const sauceSchema = mongoose.Schema({
    //_id: { type: String, required: true },
    name: { type: String, required: true },
    manufacturer: { type: String, required: true },
    description: { type: String, required: true },
    heat: { type: Number, required: true },
    //likes: { type: Number, required: true },
    //dislikes: { type: Number, required: true },
    imageUrl: { type: String, required: false },
    mainPepper: { type: String, required: true },
    //usersLiked: { type: String, required: true }, // is a String[] array
    //usersDisliked: { type: String, required: true }, // is a String[] array
    userId: { type: String, required: true }
});

// making the schema available available for the express app as a mongoose model
module.exports = mongoose.model('Sauce', sauceSchema);











// const mongoose = require('mongoose');

// const thingSchema = mongoose.Schema({
//   userId: { type: String, required: true },
//   name: { type: String, required: true },
//   manufacturer: { type: String, required: true },
//   description: { type: String, required: true },
//   mainPepper: { type: String, required: true },
//   imageUrl: { type: String, required: true },
//   heat: { type: Number, required: true },
//   likes: { type: Number, required: true },
//   dislikes: { type: Number, required: true },
//   usersLiked: { type: [String], required: true },
//   usersDisliked: { type: [String], required: true },

// });

// module.exports = mongoose.model('Sauce', thingSchema);



