var express = require('express');
var router = express.Router();

const bookCtrl = require('../controllers/books')

/* GET users listing. */

// GET all/Index
router.get('/', bookCtrl.index);

// GET new 
router.get('/new', bookCtrl.new)



// GET one
router.get('/:id', bookCtrl.show)
module.exports = router;
