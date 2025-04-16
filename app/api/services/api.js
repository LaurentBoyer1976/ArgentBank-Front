import {BASE_URL} from "../constants/baseUrl.js";



const fetchApiData = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
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