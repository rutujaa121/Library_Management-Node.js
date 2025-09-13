const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middlewares/authMiddleware');

// Dashboard/home
router.get('/home', auth, userController.home);

// view profile
router.get('/profile', auth, userController.profile);

// etc...

module.exports = router;
