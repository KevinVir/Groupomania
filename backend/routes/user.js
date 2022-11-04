const express = require('express');
const multer = require('multer');

const router = express.Router();

const userCtrl = require('../controllers/user');

const passwordValidator = require('../middlewares/password-validator');
const max = require('../middlewares/limiter');

const auth = require('../middlewares/auth');

// Routes de création et de connexion utilisateur
router.post('/signup', passwordValidator, userCtrl.signup);
router.post('/login', max, userCtrl.login);
router.get('/users', auth, userCtrl.getAllUsers);
router.get('/users/:id', auth, userCtrl.getOneUser);

// Exportation de route user
module.exports = router;
