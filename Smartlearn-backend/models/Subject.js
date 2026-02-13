const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
    name: { type: String, required: true },       // Ex: "Mathématiques"
    teacher: { type: String, required: true },
    pdfLink: { type: String },                    // Lien PDF Drive
    videoLinks: [{ type: String }],               // Liens YouTube non listés
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Subject', subjectSchema);