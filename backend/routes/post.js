const express = require('express');
const router = express.Router();

// Import de multer et du middleware
const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-config');

// Import de notre controller contenant le CRUD
const postCtrl = require('../controllers/post');

// Création des routes pour les posts
router.post('/', auth, multer, postCtrl.createPost);
router.put('/:id', auth, multer, postCtrl.modifyPost);
router.delete('/:id', auth, postCtrl.deletePost);
router.get('/:id', auth, postCtrl.getOnePost);
router.get('/', auth, postCtrl.getAllPosts);
router.post('/:id/like', auth, postCtrl.likePost);

// Exportation du router post
module.exports = router;