import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Register from "./pages/Register";
import Login from "./pages/Login";
import Payment from './pages/Payment';
import logo from './assets/smartlearn.JPG'; // logo importé depuis src/assets

function App() {
  return (
    <div className="fade-in">

      {/* --- NAVBAR --- */}
      <header style={{
        padding: "20px 40px",
        background: "var(--primary-dark)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
      }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="SmartLearn Logo" style={{ height: "50px", marginRight: "15px", borderRadius: "8px" }} />
          <h2 style={{ color: "var(--gold)", margin: 0 }}>SmartLearn</h2>
        </div>

        <nav>
          <Link to="/" style={{ marginRight: "20px" }}>Accueil</Link>
          <Link to="/register" style={{ marginRight: "20px" }}>Inscription</Link>
          <Link to="/login">Connexion</Link>
        </nav>
      </header>

      {/* --- CONTENU PRINCIPAL --- */}
      <main style={{ padding: "40px" }}>
        <Routes>
          {/* Page d'accueil */}
          <Route path="/" element={
            <div className="slide-up">
              <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
                SmartLearn — Apprendre avec clarté, progresser avec méthode
              </h1>
              <p style={{ fontSize: "1.2rem", lineHeight: "1.6", marginBottom: "30px" }}>
                SmartLearn est une plateforme éducative numérique conçue pour offrir un apprentissage structuré, accessible et orienté vers la compréhension réelle des connaissances. Destinée aux élèves et étudiants, elle propose des contenus en mathématiques et en informatique sous forme de textes clairs et de vidéos pédagogiques. Chaque leçon est pensée pour favoriser la logique, la progression et l’autonomie. Grâce à une interface simple et un parcours organisé, l’apprenant peut étudier à son rythme, consolider ses bases et suivre son évolution. SmartLearn transforme l’apprentissage en un processus clair, progressif et adapté aux exigences du monde numérique.
              </p>

              {/* Boutons Commencer et Facebook */}
              <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                <Link to="/register">
                  <button className="btn-glow">Commencer</button>
                </Link>

                <a href="https://www.facebook.com/share/1Go7BzdEAF/" target="_blank" rel="noopener noreferrer">
                  <button className="btn-glow" style={{ background: "#4267B2", color: "white" }}>
                    Voir sur Facebook
                  </button>
                </a>
              </div>
            </div>
          } />

          {/* Pages Register, Login, Payment */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;