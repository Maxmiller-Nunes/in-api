const router = require('express').Router();

const productRouter = require('./product.router');

router.use('/', productRouter);
module.exports = router;
