import axios from 'axios';

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post('http://localhost:5000/users/login', {
            Email: email,
            Password: password,
        });
        
        // Save the token in localStorage
        localStorage.setItem('token', response.data.token);

        // Return the token
        return {
            token: response.data.token,
            user: response.data.user
        };
    } catch (error) {
        console.error(error);
        throw error;
    }
};
