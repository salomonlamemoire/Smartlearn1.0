const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route test
router.get('/test', (req, res) => {
    res.send('Auth routes fonctionne ✅');
});

// Inscription
router.post('/register', authController.register);

// Connexion
router.post('/login', authController.login);

module.exports = router;