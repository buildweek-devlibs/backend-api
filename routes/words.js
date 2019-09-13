const router = require('express').Router();
const words = require('../controllers/words');

router.delete('/:id', words.rm);
router.get('/:id', words.one);
router.post('/', words.new);
router.put('/:id', words.update);

module.exports = router;