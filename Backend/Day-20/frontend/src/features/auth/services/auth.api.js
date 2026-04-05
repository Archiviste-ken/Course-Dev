import axios from 'axios';



export async function(username,email, password) {

   try {
    const response = await axios.post('/api/auth/register', {
      username,
      email,   
        password
    });
    return response.data;
    } catch (error) {
    console.error('Error registering user:', error);
    throw error;
   }
}