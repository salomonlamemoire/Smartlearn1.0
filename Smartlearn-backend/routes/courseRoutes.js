const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// Créer un cours (seulement admin pour le MVP)
router.post('/', courseController.createCourse);

// Récupérer tous les cours
router.get('/', courseController.getAllCourses);

module.exports = router;