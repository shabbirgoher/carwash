import express from 'express';
import mongoose from 'mongoose';

// Initialize http server
const app = express();

mongoose.connect(process.env.MONGODB_URI);

require('./authentication').init(app);
require('./secureModule').init(app);

// Launch the server on the port 3000
const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});