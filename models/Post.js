const mongoose = require('mongoose');

// Schéma d'article
const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

// Modèle d'article
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
