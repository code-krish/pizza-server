const express = require('express');
const router = express.Router();
const productModule = require('../module/product');


router.post('/create', productModule.createProduct);

router.get('/get', productModule.getproduct);

router.get('/get/:id', productModule.getOneProduct);

router.put('/update/:id', productModule.updateProduct);

router.delete('/delete/:id', productModule.deleteProduct);

module.exports = router;