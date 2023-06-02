import axios from 'axios';

export const getUserInfo = async (token) => {
  try {
    const response = await axios.get('http://localhost:5000/users/me', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } 
  
  catch (error) {
    console.error(error);
    throw error;
  }
};
