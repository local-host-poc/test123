window.ui = SwaggerUIBundle({
  url: 'https://app.atera.com/swagger/docs/v3',
  dom_id: '#swagger-ui',
  requestInterceptor: function (req) {
    console.log('Request Headers:', req.headers);
    if (req.headers['X-Api-Key']) {
      console.log('X-Api-Key:', req.headers['X-Api-Key']);
    }
    return req;
  }
});
