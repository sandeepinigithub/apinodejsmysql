const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');


// +++++ /user/getAllUser +++++ 
router.get('/getAllUser',userController.getAllUser);
module.exports = router;