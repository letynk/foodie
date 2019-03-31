// SEPARATES ROUTES' BUSINESS LOGIC

const Sauce = require('../models/sauce');


exports.createSauce =  (req, res, next) => {
    req.body.sauce = JSON.parse(req.body.sauce);
    const url = req.protocol + '://' + req.get('host');
    // creating a new instance of Sauce model, passing it a javascript object containing all information it needs from the parsed request body.
    const sauce = new Sauce({ // new keyword with mongoose model creates new -id field by default.
        //_id: req.body._id,
        name: req.body.sauce.name,
        manufacturer: req.body.sauce.manufacturer,
        description: req.body.sauce.description,
        heat: req.body.sauce.heat,
        likes: req.body.sauce.likes,
        dislikes: req.body.sauce.dislikes,
        imageUrl: url + '/images/' + req.file.filename,
        mainPepper: req.body.sauce.mainPepper,
        usersLiked: req.body.sauce.usersLiked,
        usersDisliked: req.body.sauce.usersDisliked,
        userId: req.body.sauce.userId
    });

    // then() returns a promise for success or failer cases of a promise. it takes two arguments both a callable functions
    sauce.save().then(
        () => {
            res.status(201).json({
                message: "Post saved successfully!"
            });
        }
    ).catch(// returns a promise which deals with rejected cases
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};


// get() only react to GET request at this end point, id is the dynamic segment of the route which is made accessible as a parameter by the colon
exports.getOneSauce = (req, res, next) => {
    Sauce.findOne({ // find single item(sauce) with same id as request parameter
        _id: req.params.id
    }).then(
        (sauce) => { // return sauce in a promise and send it to the client
            res.status(200).json(sauce);
        }
    ).catch(
        (error) => {
            res.status(404).json({ // 404 not found error code
                error: error
            });
        }
    );
};

exports.modifySauce = (req, res, next) => {
    let sauce = new Sauce({ _id: req.params._id });
    if (req.file) {
        const url = req.protocol + '://' + req.get('host');
        req.body.sauce = JSON.parse(req.body.sauce);

       sauce = {
            _id: req.params.id,
            name: req.body.sauce.name,
            manufacturer: req.body.sauce.manufacturer,
            description: req.body.sauce.description,
            heat: req.body.sauce.heat,
            likes: req.body.sauce.likes,
            dislikes: req.body.sauce.dislikes,
            imageUrl: url + '/images/' + req.file.filename,
            mainPepper: req.body.sauce.mainPepper,
            usersLiked: req.body.sauce.usersLiked,
            usersDisliked: req.body.sauce.usersDisliked,
            userId: req.body.sauce.userId
        };
    } else {
        sauce = {
            _id: req.params.id,
            name: req.body.name,
            manufacturer: req.body.manufacturer,
            description: req.body.description,
            heat: req.body.heat,
            likes: req.body.likes,
            dislikes: req.body.dislikes,
            imageUrl: req.body.imageUrl,
            mainPepper: req.body.mainPepper,
            usersLiked: req.body.usersLiked,
            usersDisliked: req.body.usersDisliked,
            userId: req.body.userId
        };
    }

    // allows to update a Sauce object correspond to the object passed as first argument (ie id param passed in the request is used and replace it with the Sauce passed as second argument)
    Sauce.updateOne({ _id: req.params.id }, sauce).then(
        () => {
            res.status(201).json({
            message: "Updated successfully!"
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};


exports.deleteSauce = (req, res, next) => {
    Sauce.deleteOne({ _id: req.params.id }).then(
        () => {
            res.status(200).json({
            message: "Deleted!"
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.getAllSauce = (req, res, next) => {
    // find() return a value in the array, if element in the array satisfies the provided testing function.
    Sauce.find().then(
        (sauces) => {
            res.status(200).json(sauces);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};





























// // in controllers/sauces.js
// const Sauce = require('../models/sauce');
// const fs = require('fs');

// exports.createSauce = (req, res, next) => {

//   req.body.sauce = JSON.parse(req.body.sauce);
//   const url = req.protocol + '://' + req.get('host');
//   const sauce = new Sauce({
//     name: req.body.sauce.name,
//     manufacturer: req.body.sauce.manufacturer,
//     description: req.body.sauce.description,
//     mainPepper: req.body.sauce.mainPepper,
//     imageUrl: url + '/images/' + req.file.filename,
//     heat: req.body.sauce.heat,
//     likes: 0,
//     dislikes: 0,
//     usersLiked: [],
//     usersDisliked: [],
//      userId: req.body.sauce.userId
//   });
//   sauce.save().then(
//     () => {
//       res.status(201).json({
//         message: 'Post saved successfully!'
//       });
//     }
//   ).catch(
//     (error) => {
//       res.status(400).json({
//         error: error
//       });
//     }
//   );
// };

// exports.getAllSauces = (req, res, next) => {
//   Sauce.find().then(
//     (sauces) => {
//       res.status(200).json(sauces);
//     }
//   ).catch(
//     (error) => {
//       res.status(400).json({
//         error: error
//       });
//     }
//   );
// };

