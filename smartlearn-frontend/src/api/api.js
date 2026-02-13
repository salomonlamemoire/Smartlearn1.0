// src/api/api.js
import axios from "axios";

// Base URL du backend
const API_URL = "http://localhost:5000/api"; // Modifier si tu passes en prod plus tard

// ------------------------- AUTH -------------------------
export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/register`, userData);
  return response.data;
};

export const loginUser = async (loginData) => {
  const response = await axios.post(`${API_URL}/auth/login`, loginData);
  return response.data;
};

// ------------------------ PAIEMENT ----------------------
// Fonction pour envoyer le paiement au backend mock
export const paySubscription = async (data, token) => {
  if (!token) throw new Error("Token manquant pour le paiement");

  const response = await axios.post(`${API_URL}/payment`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return response.data;
};

// ------------------------ CLASSES -----------------------
export const getClasses = async () => {
  const response = await axios.get(`${API_URL}/classrooms`);
  return response.data;
};

// ------------------------ MATIERES ----------------------
export const getSubjects = async (token) => {
  const response = await axios.get(`${API_URL}/classrooms/my-class/subjects`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};