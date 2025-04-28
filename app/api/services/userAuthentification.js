import { BASE_URL } from "../constants/baseUrl";

/**
 * @description Fonction pour se connecter à l'application
 * @param {string} email - Le mail de l'utilisateur
 * @param {string} password - Le mot de passe de l'utilisateur
 * @returns {Promise<string>} - Le token d'authentification de l'utilisateur
 * @throws {Error} - Si l'enregistrement échoue
 */

export const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/api/v1/user/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Invalid email or password');
    }

    const data = await response.json();
    localStorage.setItem('token', data.body.token); // Stocker le token dans le localStorage
    return data.body.token;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};


/**
 * @description Fonction pour récupérer le profil de l'utilisateur
 * @param {string} token - Le token d'authentification de l'utilisateur
 * @returns {Promise<Object>} - Les données du profil de l'utilisateur
 * @throws {Error} - Si la récupération échoue
 */
export const fetchUserProfile = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${BASE_URL}/api/v1/user/profile`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user profile');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

/** 
 * @description Fonction pour modifier le nom et le prénom de l'utilisateur
 * @param {string} token - Le token d'authentification de l'utilisateur
 * @param {string} firstName - Le prénom de l'utilisateur
 * @param {string} lastName - Le nom de l'utilisateur
 * @returns {Promise<Object>} - Les données mises à jour du profil de l'utilisateur
 * @throws {Error} - Si la mise à jour échoue
 */

export const updateUserName = async (token, firstName, lastName) => {
  try {
    const response = await fetch(`${BASE_URL}/api/v1/user/profile`, {
      method: 'PUT', // Utilisez la méthode HTTP PUT pour mettre à jour les données
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ firstName, lastName }),
    });

    if (!response.ok) {
      throw new Error('Failed to update user profile');
    }

    return await response.json();
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
};