const mongoose = require('mongoose');

const classroomSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Ex: "2ndeA4"
    description: { type: String },          // Optionnel
    subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }], // Liste des matières/cours
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Classroom', classroomSchema);