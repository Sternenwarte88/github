const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 80;

// Statische Dateien bereitstellen (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'src')));

// Standardroute für die Homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// Starten des Servers
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
