import express from 'express';

// Initialize http server
const app = express();

require('./authentication').init(app);

// Launch the server on the port 3000
const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});