const express = require('express');
const router = express.Router();
const subjectController = require('../controllers/subjectController');

router.post('/', subjectController.createSubject); // créer une matière (admin)

module.exports = router;