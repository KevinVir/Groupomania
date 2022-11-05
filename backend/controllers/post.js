const Post = require('../models/Post');

// Importation de file system
const fs = require('fs');
const User = require('../models/user');

// Création d'un Post
exports.createPost = async (req, res, next) => {

    const postObject = {
        user: req.body.userId,
        publication: req.body.publication,
    }

    delete postObject._id
    if (req.file) {
        postObject.image = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
    } else {
        postObject.image = ""
    }

    const post = new Post({ ...postObject });
    console.log(postObject)

    // On enregistre les infos reçus dans la database avec save
    await post.save()
        .then(() => res.status(201).json({ message: 'Post enregistrée !', post }))
        .catch((error) => res.status(400).json({ erreurCreation: error }))
};

// Modifier un Post
exports.modifyPost = async (req, res, next) => {
    const post = await Post.findOne({ _id: req.params.id })
    const user = await User.findOne({ _id: req.body.userId })
    const isAuthor = user.isAdmin || req.body.userId == post.user._id;
    // Vérification d'une présence d'un champ file dans le requête
    const postObject = req.file ? {
        // Si la requête contient une nouvelle image
        ...req.body.post,
        // On récupère l'url de l'image
        image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        // Si la requête ne contient pas de nouvelle image
    } : { ...req.body };

    delete postObject._userId;

    Post.findOne({ _id: req.params.id })
        .then((post) => {
            if (!isAuthor) {
                res.status(401).json({ message: 'Non autorisé' });
            } else if (req.file) {
                const filename = post.image.split("/images/")[1]
                // supprime l'ancienne image et utilisation de update pour mettre à jour
                fs.unlink(`images/${filename}`, () => {
                    Post.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id })
                        .then(() => res.status(200).json({ message: 'Post modifiée !' }))
                        .catch(error => res.status(401).json({ error: error }));
                })
            } else {
                Post.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id })
                    .then(() => res.status(200).json({ message: 'Post modifiée !' }))
                    .catch(error => res.status(401).json({ error: error }));
            }
        })
        .catch((error) => {
            res.status(400).json({ error });
        });
};

// Supression d'un post
exports.deletePost = async (req, res, next) => {
    const user = await User.findOne({ _id: req.auth.userId })
    // On récupère le Post dans la base de donnée
    Post.findOne({ _id: req.params.id })
        .then(post => {
            const isAuthor = req.auth.userId == post.user._id || user.isAdmin;
            if (!isAuthor) {
                res.status(401).json({ message: 'Non autorisé' });
            } else {
                const filename = post.image.split('/images/')[1];
                fs.unlink(`images/${filename}`, () => {
                    Post.deleteOne({ _id: req.params.id })
                        .then(() => { res.status(200).json({ message: 'Post supprimée !' }) })
                        .catch(error => res.status(401).json({ error }));
                });
            }
        })
        .catch(error => {
            res.status(500).json({ error } + error);
        });
};


// Récupération d'un Post en fonction de son ID
exports.getOnePost = async (req, res, next) => {
    const users = await User.find({}, "pseudo")
    // Utilisation de findOne dans le model Post pour trouver l'article unique ayant le même id que le param de la requête
    Post.findOne({ _id: req.params.id })
        .then((post) => res.status(200).json({ post, users }))
        .catch((error) => res.status(404).json({ error: error }))
};

// Récupération des posts
exports.getAllPosts = (req, res, next) => {
    // Utilisation de find afin de renvoyer un tableau qui contient tous les Posts en utilisant la méthode .sort pour récupérer les posts les plus récents en premiers.
    Post.find((error, docs) => {
        if (!error) res.send(docs);
        else console.log('Error to get data' + error);
    }).populate({ path: 'user', select: ['pseudo'] })
        .sort({ createdAt: -1 })
};

//création et modification des likes pour les posts
exports.likePost = (req, res, next) => {
    // Utilisation de findOne dans le model Post pour trouver l'article unique ayant le même id que le param de la requête
    Post.findOne({ _id: req.params.id })
        .then((post) => {
            const userId = req.auth.userId;
            const userIsLiked = post.usersLiked.includes(userId);
            console.log(userId)

            // Si l'id utilisateur n'est pas dans le tableau usersLiked
            if (!userIsLiked) {
                // Alors on pousse celui-ci avec push à l'intérieur de ce tableau au moment du like
                post.usersLiked.push(userId);
            } else {
                // Sinon, on utilise findIndex pour faire un tour de tableau et qui nous renverra l'indice du premier élément qui satisfait notre condition
                const index = post.usersLiked.findIndex(element => element == userId);
                console.log(post.usersLiked)
                // On retire l'utilisateur du tableau avec la méthode splice
                post.usersLiked.splice(index, 1)
            }

            // Le nombre de likes s'incrémentera en fonction du nombre d'utilisateurs présent dans le tableau usersLiked
            post.likes = post.usersLiked.length;

            // On enregistre le tout
            post.save();
            res.status(200).json({ post })
        })
        .then((post) => res.status(200).json(post))
        .catch((error) => {
            res.status(500).json({ error });
        });
};