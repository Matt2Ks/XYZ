const { Actor } = require('apify');
const axios = require('axios'); // Przykład użycia axios do logowania

Actor.main(async () => {
    console.log('Actor is running');

    try {
        // Załóżmy, że używasz zewnętrznego API do logowania
        const response = await axios.post('https://singlekey-id.com/pl-pl/home', {
            username: 'user', // Zastąp swoimi danymi
            password: 'password' // Zastąp swoimi danymi
        });

        if (response.data.success) {
            console.log('Login successful!');
        } else {
            console.log('Login failed:', response.data.message);
        }

        // Przykładowa logika po pomyślnym zalogowaniu
        if (response.data.success) {
            // Dalsza logika po udanym logowaniu
            console.log('Proceeding with the task...');
        } else {
            // Logika po nieudanym logowaniu
            console.log('Terminating task due to failed login');
            return;
        }

    } catch (error) {
        console.error('Error logging in:', error);
    }

    // Dalsza logika Twojego skryptu
});
