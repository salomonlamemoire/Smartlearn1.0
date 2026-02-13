const express = require("express");
const router = express.Router();
const { handlePayment } = require('../controllers/paymentController'); // ✅ correct
const { protect } = require("../middlewares/authMiddleware");

// Endpoint pour le paiement (MVP mock)
router.post("/", protect, handlePayment); // ✅ c'est handlePayment qu'on appelle

module.exports = router;