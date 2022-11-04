const rateLimit = require('express-rate-limit');

// Au bout de 5 tentatives de connexion erronées, l'utilisateur devra attendre 5 minutes avant de pouvoir réessayer 
const limiter = rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 5,
    message: `Trop de tentatives erronées, veuillez réessayer dans 5 minutes.`
});

module.exports = limiter;