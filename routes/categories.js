const categories = require('../controllers/categories');
const router = require('express').Router();

router.delete('/:id', categories.rm);
router.get('/', categories.all);
router.get('/:id', categories.one);
router.get('/:id/libs', categories.libs);
router.post('/', categories.new);
router.put('/:id', categories.update);

module.exports = router;