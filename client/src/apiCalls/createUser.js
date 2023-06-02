import axios from 'axios';

export const registerUser = async (firstName, lastName, email, password, role) => {
    try {
        const response = await axios.post('http://localhost:5000/users/register', {
            FirstName: firstName,
            LastName: lastName,
            Email: email,
            Password: password,
            Role: role
        });

        // Return status of registration
        if(response.data) {
            return { status: 'success', message: 'User registered successfully. Please log in.' }
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};
