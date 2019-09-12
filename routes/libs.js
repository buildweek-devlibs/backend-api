const libs = require('../controllers/libs');
const router = require('express').Router();

router.delete('/:id', libs.rm);
router.get('/', libs.all);
router.get('/:id', libs.one);
router.get('/:id/words', libs.words);
router.post('/', libs.new);
router.put('/:id', libs.update);

module.exports = router;