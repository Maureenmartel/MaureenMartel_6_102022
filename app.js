const express = require('express');

const app = express();

app.use(express.json());

// ---- Install & Config Mongoose
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Maureen_Kriska:GFEMizurz9WKAa6@learnmongodb.2umnikh.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

// ---- Middlewares
// headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// Créer une route POST (que je vais devoir modifier selon les infos nécessaires pour PIQUANTE)
// Exemple avec la liste des méthodes post de mon document "requierements"
app.post('/api/stuff', (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: 'Objet créé !'
  });
});

// Créer une route GET (que je vais devoir modifier selon mes objets PIQUANTE)
// Exemple avec mes infos necessaires au login, et la liste des méthodes get de mon document "requierements"
app.get('/api/stuff', (req, res, next) => {
  const stuff = [
    {
      _id: 'oeihfzeoi',
      title: 'Mon premier objet',
      description: 'Les infos de mon premier objet',
      imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
      price: 4900,
      userId: 'qsomihvqios',
    },
    {
      _id: 'oeihfzeomoihi',
      title: 'Mon deuxième objet',
      description: 'Les infos de mon deuxième objet',
      imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
      price: 2900,
      userId: 'qsomihvqios',
    },
  ];
  res.status(200).json(stuff);
});

// ---- Fin des middlewares

module.exports = app;