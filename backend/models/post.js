const mongoose = require('mongoose');

// Schéma pour les sauces
const postSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  publication: { type: String, required: false },
  image: { type: String },
  likes: { type: Number, default: 0 },
  usersLiked: { type: [String] },
},
  {
    timestamps: true,
  }
);

// Exportation du schéma sauce
module.exports = mongoose.model('Post', postSchema);