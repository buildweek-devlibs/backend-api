const router = require('express').Router();

const categoriesRouter = require('./categories');
const usersRouter = require('./users');

router.get('/', (req, res) => {
  res.send(`
    <h1>Looking for API Information?</h1>
    <p>Please see the <a href='https://github.com/buildweek-devlibs/backend-api'>README</a> for more information on where to go!</p>
  `);
});

router.use('/categories', categoriesRouter);
router.use('/users', usersRouter);

module.exports = router;