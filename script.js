let script = document.createElement('script');
script.src = "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/3.52.5/swagger-ui-bundle.js";
script.onload = function() {
  // Your Swagger UI configuration here
  if (typeof SwaggerUIBundle !== 'undefined') {
    SwaggerUIBundle({
      url: 'https://app.atera.com/swagger/docs/v3',
      dom_id: '#swagger-ui',
      requestInterceptor: function (req) {
        console.log('Request Headers:', req.headers);
        return req;
      }
    });
  } else {
    console.log("SwaggerUIBundle still unavailable");
  }
};
document.head.appendChild(script);
