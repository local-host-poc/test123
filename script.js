fetch('https://app.atera.com/swagger/docs/v3', {
  method: 'GET',
  headers: {
    'X-Requested-With': 'XMLHttpRequest'  // Optional: sometimes helps bypass certain restrictions.
  },
  credentials: 'include'  // This allows cookies to be sent with the request.
})
.then(response => {
  // Check if the response includes headers (depending on CORS policies).
  for (let [key, value] of response.headers.entries()) {
    if (key.toLowerCase() === 'x-api-key') {
      console.log('X-Api-Key:', value);
    } else {
      console.log("NOT FOUND!");
    }
  }
})
.catch(error => console.error('Error:', error));
