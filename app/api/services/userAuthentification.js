import { BASE_URL } from "../constants/baseUrl";

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