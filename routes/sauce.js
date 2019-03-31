const express = require('express');
const router = express.Router(); // creates express router

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const sauceCtrl = require('../controllers/sauce');

// REGISTER ROUTES TO ROUTER

router.get('/', auth, sauceCtrl.getAllSauce);
router.post('/', auth, multer, sauceCtrl.createSauce);
router.get('/:id', auth, sauceCtrl.getOneSauce);
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);


module.exports = router;











// const express = require('express');
// const router = express.Router();

// const sauceCtrl = require('../controllers/sauce');


// // router.get('/', sauceCtrl.getAllSauce);
// router.post('/', sauceCtrl.createSauce);

// module.exports = router;