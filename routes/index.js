const router = require('express').Router();

const categoriesRouter = require('./categories');
const libsRouter = require('./libs');
const usersRouter = require('./users');
const wordsRouter = require('./words');

router.get('/', (req, res) => {
  res.send(`
    <h1>Looking for API Information?</h1>
    <p>Please see the <a href='https://github.com/buildweek-devlibs/backend-api'>README</a> for more information on where to go!</p>
  `);
});

router.use('/categories', categoriesRouter);
router.use('/libs', libsRouter);
router.use('/users', usersRouter);
router.use('/words', wordsRouter);

module.exports = router;