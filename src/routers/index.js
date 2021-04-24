const router = require('express').Router()

//index Router
const productRouter = require("./index/product")

router.get('/',(req,res) => {
  res.render('index');
});

router.use('/products', productRouter)

module.exports = router