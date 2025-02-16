const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

// Handle errors
server.on('error', err => {
  console.error('Server error:', err);
  // Additional error handling logic can be added here
  // such as writing to a log file or attempting a restart
});

server.listen(8080);
console.log('Server is running on port 8080');