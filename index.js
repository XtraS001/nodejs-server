const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with a 200 OK status and content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Send the response body as "Hello, World!"
  res.end('Hello, World!\n');
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/');
});
