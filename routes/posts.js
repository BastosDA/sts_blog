const express = require('express');
const router = express.Router();

//route Route pour le formulaire
router.get('/posts/new', (req, res) => {
    res.render('new-post'); // Affiche un formulaire pour créer un article
});


// route pour sauvegarder un article dans MongoDB
const Post = require('../models/Post');

router.post('/posts', async (req, res) => {
    try {
        const { title, content } = req.body;
        const post = new Post({ title, content });
        await post.save();
        res.redirect('/posts'); // Redirige vers la liste des articles
    } catch (error) {
        console.error('Erreur lors de la création de l\'article :', error);
        res.status(500).send('Erreur serveur');
    }
});


module.exports = router;
