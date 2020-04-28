var express = require('express');
const userController = require('../controllers/usersController');
var router = express.Router();

/* GET users listing. */
router.get('/', userController.list);

/* GET user by id. */
router.get('/:id', userController.index);

/* POST users listing. */
router.post('/', userController.create);

/* PUT users listing. */
router.put('/:id', userController.update);

/* DELETE users listing. */
router.delete('/:id', userController.destroy);
module.exports = router;
