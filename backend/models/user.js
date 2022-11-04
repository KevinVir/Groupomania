const mongoose = require('mongoose');

// Utilisation de unique validator qui empêchera 2 utilisateurs d'avoir le même email
const uniqueValidator = require('mongoose-unique-validator');

// Schéma utilisateur
const userSchema = mongoose.Schema({
    pseudo: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: false, default: false }
});

// Vérification que l'utilisateur est unique
userSchema.plugin(uniqueValidator);

// Exportation du schéma utilisateur
module.exports = mongoose.model('user', userSchema);