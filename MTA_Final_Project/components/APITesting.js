const apiKey = 'p2KaBTCwHF8cCO8LFpYEsUoWT0xp5wz8Yeg8S0m5';

// Function to fetch MTA data
async function fetchMTAData() {
  try {
    const response = await fetch('https://api-endpoint.mta.info/DATA-ENDPOINT', {
      headers: {
        'x-api-key': apiKey,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch MTA data');
    }

    const data = await response.json();
    // Process the data as per your requirements
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the function to fetch MTA data
fetchMTAData();
