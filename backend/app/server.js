import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'

// Initialize http server
const app = express();

app.use(bodyParser.json());

app.use(function logErrors(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send(rr.stack);
  }
);
mongoose.connect(process.env.MONGODB_URI);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

require('./authentication').init(app);
require('./secureModule').init(app);
require('./appointment').init(app);
require('./staticData').init(app);

const port = process.env.PORT || 3000
// Launch the server on the port 3000
const server = app.listen(port, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});