const multer = require('multer');

// Objet mime type pour l'extension des fichiers
const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png'
};

// Création fonction qui stocke et renomme les fichiers reçus
// La fonction destination indique à multer où enregistrer les fichiers (dans le dossier images en l'occurence)
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'images');
  },

  // La fonction filename indique à multer d'utiliser le nom d'origine etc..
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + '.' + extension);
  }
});

// Exporation de multer avec notre constante storage et on indique que nous gérons uniquement les téléchargements de fichiers image.
module.exports = multer({ storage: storage }).single('image');