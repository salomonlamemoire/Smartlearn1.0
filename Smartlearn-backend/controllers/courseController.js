const Course = require('../models/Course');

// Créer un cours
exports.createCourse = async (req, res) => {
    try {
        const { title, teacher, pdfLink, videoLinks } = req.body;

        const newCourse = new Course({
            title,
            teacher,
            pdfLink,
            videoLinks
        });

        await newCourse.save();
        res.status(201).json({ message: 'Cours créé ✅', course: newCourse });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

// Récupérer tous les cours
exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};