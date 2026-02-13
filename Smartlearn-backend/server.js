require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const paymentRoutes = require("./routes/paymentRoutes")
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Connexion MongoDB
connectDB();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/payment',paymentRoutes);

// Route test racine
app.get('/', (req, res) => {
    res.send('SmartLearn Backend fonctionne ✅');
});

// Lancer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));