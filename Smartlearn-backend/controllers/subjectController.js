const Subject = require('../models/Subject');

// Créer une matière (admin seulement pour le MVP)
exports.createSubject = async (req, res) => {
    try {
        const { name, teacher, pdfLink, videoLinks } = req.body;
        const newSubject = new Subject({ name, teacher, pdfLink, videoLinks });
        await newSubject.save();
        res.status(201).json({ message: 'Matière créée ✅', subject: newSubject });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};