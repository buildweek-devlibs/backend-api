const router = require('express').Router();
const users = require('../controllers/users');

router.delete('/:id', users.rm);
router.get('/:id', users.one);
router.get('/:id/libs', users.libs);
router.post('/', users.new);
router.put('/:id', users.update);

module.exports = router;