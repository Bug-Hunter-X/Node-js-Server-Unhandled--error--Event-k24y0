# Node.js Server Unhandled 'error' Event

This repository demonstrates a common error in Node.js servers: the lack of proper error handling leading to unexpected crashes without informative logs.

The `server.js` file contains a basic HTTP server.  However, it lacks error handling.  If an error occurs (e.g., port already in use), the server crashes silently.

The `server-solution.js` file shows the correct way to handle errors, preventing crashes and providing meaningful error messages.

## How to reproduce

1. Clone this repository.
2. Run `node server.js`.
3. Try running the server again while it's already running (it will crash).
4. Run `node server-solution.js` to see the improved error handling.