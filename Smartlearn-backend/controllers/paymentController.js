// controllers/paymentController.js

// Fonction pour gérer le paiement (mock pour MVP)
const handlePayment = async (req, res) => {
  try {
    // Ici on simule le paiement en activant l'abonnement
    req.user.subscriptionActive = true;
    await req.user.save();

    res.json({ success: true, message: "Paiement simulé réussi !" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Erreur côté serveur" });
  }
};

module.exports = { handlePayment }; // ✅ important : export en objet