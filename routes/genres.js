var express = require('express');
const controller = require('../controllers/genresController');
const router = express.Router();

/* GET users listing. */
router.get('/', controller.list);

/* GET user by id. */
router.get('/:id', controller.index);

/* POST users listing. */
router.post('/', controller.create);

/* PUT users listing. */
router.put('/:id', controller.update);

/* DELETE users listing. */
router.delete('/:id', controller.destroy);
module.exports = router;
