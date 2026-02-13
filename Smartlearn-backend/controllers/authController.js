const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Inscription
exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Vérifier si l'email existe déjà
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'Email déjà utilisé' });

        // Hasher le mot de passe
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        // Dates de l'abonnement jusqu'à fin juin 2026
        const startDate = new Date();
        const expiryDate = new Date('2026-06-30T23:59:59');

        // Créer l'utilisateur avec abonnement actif
        const newUser = new User({
            name,
            email,
            passwordHash,
            subscription: {
                status: 'active',
                startDate,
                expiryDate
            }
        });

        await newUser.save();

        // Générer un token JWT
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

        res.status(201).json({
            message: 'Utilisateur créé avec succès et abonnement actif ✅',
            user: { id: newUser._id, name, email, subscription: newUser.subscription },
            token
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

// Connexion
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Vérifier si l'utilisateur existe
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Email ou mot de passe incorrect' });

        // Vérifier le mot de passe
        const isMatch = await bcrypt.compare(password, user.passwordHash);
        if (!isMatch) return res.status(400).json({ message: 'Email ou mot de passe incorrect' });

        // Générer un token JWT
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

        res.json({
            message: 'Connexion réussie ✅',
            user: { id: user._id, name: user.name, email: user.email },
            token
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};