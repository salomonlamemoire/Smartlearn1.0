import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/api";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await loginUser(formData);

      // 🔐 Stocker le token
      localStorage.setItem("token", data.token);

      navigate("/payment");

    } catch (err) {
      setError("Email ou mot de passe incorrect");
    }

    setLoading(false);
  };

  return (
    <div className="register-container fade-in">
      <div className="register-card slide-up">
        <h2>Connexion</h2>

        {error && <p className="error-text">{error}</p>}

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Adresse email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn-glow">
            {loading ? "Connexion..." : "Se connecter"}
          </button>

        </form>
      </div>
    </div>
  );
}

export default Login;