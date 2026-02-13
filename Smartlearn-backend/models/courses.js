const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },        // Nom du cours
    teacher: { type: String, required: true },      // Nom de l’enseignant
    pdfLink: { type: String },                      // Lien PDF Drive
    videoLinks: [{ type: String }],                // Liste de liens YouTube
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Course', courseSchema);