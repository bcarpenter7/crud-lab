var express = require('express');
var router = express.Router();

const bookCtrl = require('../controllers/books')

/* GET users listing. */

// POST create
router.post('/', bookCtrl.create)

// DELETE
router.delete('/:id', bookCtrl.delete)

//EDIT
router.get('/:id/edit', bookCtrl.edit)

// GET all/Index
router.get('/', bookCtrl.index);

// GET new 
router.get('/new', bookCtrl.new)

// GET one
router.get('/:id', bookCtrl.show)



module.exports = router;
