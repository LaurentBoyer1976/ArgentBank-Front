import {BASE_URL} from "../constants/baseUrl.js";

/**
 * @description Fonction pour récupérer les données de l'API
 * @param {string} endpoint - L'endpoint de l'API à appeler
 * @returns {Promise<any>} - Les données récupérées de l'API
 * @throws {Error} - Si une erreur se produit lors de la récupération des données
 */

const fetchApiData = async (endpoint) => {
  try {
    const token = localStorage.getItem('token'); // Récupère le token JWT depuis le localStorage
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // Ajoute le token JWT dans l'en-tête
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};


/**
 * @description Fonction pour récupérer les données du profil de l'utilisateur
 * @returns {Promise<Object>} - Les données du profil de l'utilisateur
 */

export const fetchFeatures = async () => {
  try {
    const response = await fetch("http://localhost:3001/api/features"); // URL de l'API backend
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching features:", error);
    return [];
  }
};

/**
 * @description Fonction pour récupérer les comptes associés au profil de l'utilisateur
 * @returns {Promise<Object>} - Les données des comptes associés au profil de l'utilisateur
 */

export const fetchAccounts = async () => {
  try {
    const accounts = await fetchApiData("api/v1/user/accounts");
    console.log("Accounts fetched from API:", accounts); // Info: Log des comptes récupérés
    return accounts;
  } catch (error) {
    console.error("Error fetching accounts:", error);
    throw error;
  }
};
