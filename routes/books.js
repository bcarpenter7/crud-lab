var express = require('express');
var router = express.Router();

const bookCtrl = require('../controllers/books')

/* GET users listing. */

// GET all/Index
router.get('/', bookCtrl.index);


module.exports = router;
