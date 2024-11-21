const fs = require('fs');
const path = require('path');

// Dossiers à créer
const folders = [
    'views',
    'public',
    'public/css',
    'public/js',
    'routes',
    'models'
];

// Fichiers à créer
const files = {
    'server.js': `const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Mon Blog' });
});

// Lancer le serveur
const PORT = 3000;
app.listen(PORT, () => {
    console.log(\`Serveur lancé sur http://localhost:\${PORT}\`);
});
`,

    'views/index.ejs': `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/styles.css">
    <title><%= title %></title>
</head>
<body>
    <h1>Bienvenue sur mon blog</h1>
    <p>Ceci est une plateforme simple de gestion d'articles.</p>
</body>
</html>
`,

    'public/css/styles.css': `body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
}
h1 {
    color: #333;
    text-align: center;
    margin-top: 20px;
}`,

    'routes/posts.js': `const express = require('express');
const router = express.Router();

// Exemple de route pour les articles
router.get('/posts', (req, res) => {
    res.send('Liste des articles');
});

module.exports = router;
`,

    'models/Post.js': `// Modèle d'article
class Post {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }
}

module.exports = Post;
`
};

// Créer les dossiers
folders.forEach(folder => {
    const folderPath = path.join(__dirname, folder);
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
        console.log(`Dossier créé : ${folder}`);
    }
});

// Créer les fichiers
Object.entries(files).forEach(([filePath, content]) => {
    const fullPath = path.join(__dirname, filePath);
    if (!fs.existsSync(fullPath)) {
        fs.writeFileSync(fullPath, content);
        console.log(`Fichier créé : ${filePath}`);
    }
});

console.log('Structure du projet créée avec succès !');
