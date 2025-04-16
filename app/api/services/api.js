import {BASE_URL} from "../constants/baseUrl.js";

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

export const fetchUsers = async () => {
  try {
    const users = await fetchApiData("api/v1/user/all"); // Endpoint mis à jour
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

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

export const fetchAccounts = async () => {
  try {
    const accounts = await fetchApiData("api/v1/user/accounts"); // Endpoint mis à jour
    return accounts;
  } catch (error) {
    console.error("Error fetching accounts:", error);
    throw error;
  }
};
