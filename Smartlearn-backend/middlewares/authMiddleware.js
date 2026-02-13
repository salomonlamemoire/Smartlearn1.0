const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        console.log("Token reçu côté back-end:", token)
        if (!token) return res.status(401).json({ message: 'Token manquant' });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id).populate('class');

        if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé' });

        req.user = user; // passe l’utilisateur à la route
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: 'Token invalide' });
    }
};

module.exports = { protect }; // ✅ on exporte un objet avec protect