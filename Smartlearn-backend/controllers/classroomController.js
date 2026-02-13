const Classroom = require('../models/Classroom');

// Récupérer toutes les classes avec leurs matières
exports.getAllClassrooms = async (req, res) => {
    try {
        const classrooms = await Classroom.find().populate('subjects'); // populate les matières
        res.json(classrooms);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
    // Récupérer les matières de la classe de l'utilisateur
exports.getSubjectsForUserClass = async (req, res) => {
    try {
        const userClass = req.user.class;
        if (!userClass) return res.status(400).json({ message: 'Classe non assignée' });

        // populate subjects
        await userClass.populate('subjects').execPopulate();

        res.json(userClass.subjects);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};
};