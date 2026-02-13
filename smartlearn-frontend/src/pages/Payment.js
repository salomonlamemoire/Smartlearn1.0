// src/pages/Payment.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { paySubscription } from "../api/api";
import "../styles/global.css"; // assure-toi que ton CSS global est importé

function Payment() {
  const navigate = useNavigate();
  const [method, setMethod] = useState("mobilemoney");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Utilisateur non connecté");

      const res = await paySubscription({ method }, token);

      if (res.success) {
        setSuccess("Paiement réussi ! Redirection vers vos classes...");
        setTimeout(() => {
          navigate("/classes");
        }, 2000);
      } else {
        setError("Échec du paiement, réessayez.");
      }
    } catch (err) {
      console.error(err);
      setError("Échec du paiement, réessayez.");
    }

    setLoading(false);
  };

  return (
    <div className="payment-container fade-in">
      <div className="payment-card slide-up shadow">
        <h2>Paiement d'inscription</h2>

        {error && <p className="error-text">{error}</p>}
        {success && <p className="success-text">{success}</p>}

        <form onSubmit={handleSubmit}>
          <div className="payment-option">
            <label>
              Mobile Money
              <input
                type="radio"
                name="method"
                value="mobilemoney"
                checked={method === "mobilemoney"}
                onChange={() => setMethod("mobilemoney")}
              />
            </label>
          </div>

          <div className="payment-option">
            <label>
              Orange Money / Mastercard
              <input
                type="radio"
                name="method"
                value="orange"
                checked={method === "orange"}
                onChange={() => setMethod("orange")}
              />
            </label>
          </div>

          <button type="submit" className={`btn-glow ${loading ? "loading" : ""}`}>
            {loading ? (
              <span className="spinner"></span>
            ) : (
              "Payer 1500 FCFA"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Payment;