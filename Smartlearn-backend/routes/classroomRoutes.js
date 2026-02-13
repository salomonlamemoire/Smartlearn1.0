const express = require('express');
const router = express.Router();
const classroomController = require('../controllers/classroomController');
const verifyUserSubscription = require('../middlewares/authMiddleware');

// Endpoint pour que l'élève voie ses matières
router.get('/my-class/subjects', verifyUserSubscription, classroomController.getSubjectsForUserClass);

router.get('/', classroomController.getAllClassrooms); // voir toutes les classes avec matières

module.exports = router;