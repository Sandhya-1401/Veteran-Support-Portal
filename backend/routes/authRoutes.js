const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');

const router = express.Router();

// Routes
router.post('/register', registerUser); // Register a new user
router.post('/login', loginUser); // Login user

module.exports = router;
