<div id="swagger-ui"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/3.52.5/swagger-ui-bundle.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/3.52.5/swagger-ui-standalone-preset.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/3.52.5/swagger-ui.css">

<script>
  window.ui = SwaggerUIBundle({
    url: 'https://app.atera.com/swagger/docs/v3',
    dom_id: '#swagger-ui',
    requestInterceptor: function (req) {
      console.log('Request Headers:', req.headers);
      return req;
    }
  });
</script>
