const router = require('express').Router();

const categoriesRouter = require('./categories');
const libsRouter = require('./libs');
const usersRouter = require('./users');
const wordsRouter = require('./words');
const verifyToken = require('../middleware/verifyToken.js');
const verifyLogin = require('../middleware/verifyLogin.js');

router.get('/', (req, res) => {
  res.send(`
    <h1>Looking for API Information?</h1>
    <p>Please see the <a href='https://github.com/buildweek-devlibs/backend-api'>README</a> for more information on where to go!</p>
  `);
});

router.use('/categories', verifyToken, verifyLogin, categoriesRouter);
router.use('/libs', verifyToken, verifyLogin, libsRouter);
router.use('/users', verifyToken, verifyLogin, usersRouter);
router.use('/words', verifyToken, verifyLogin, wordsRouter);

module.exports = router;
