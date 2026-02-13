const mongoose = require('mongoose');

// Schéma pour la souscription (abonnement)
const subscriptionSchema = new mongoose.Schema({
    status: { type: String, enum: ['active','inactive'], default: 'inactive' },
    startDate: { type: Date },
    expiryDate: { type: Date }
});

// Schéma principal de l'utilisateur
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ['user','admin'], default: 'user' },
    subscription: subscriptionSchema,
    createdAt: { type: Date, default: Date.now },
    subscriptionActive: { type: Boolean, default: false }, // Abonnement payé
    class: { type: mongoose.Schema.Types.ObjectId, ref: 'Classroom' } // Classe de l'élève
});

// Exporter le modèle
module.exports = mongoose.model('User', userSchema);