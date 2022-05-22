const express = require('express');
const router = express.Router();
const userModule = require('../module/user');


router.post('/register', userModule.createUser);
router.post('/adminregister', userModule.createAdmin);

router.get('/get', userModule.getUser);

router.put('/update/:id', userModule.updateUser);

router.delete('/delete/:id', userModule.deleteUser);

router.post('/login', userModule.loginUser);

router.post('/adminlogin', userModule.loginAdmin);

module.exports = router;


