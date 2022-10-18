const express = require('express');
const cors = require('cors');
const db = require('./db/connection'); // DB connection
const routes = require('./routes');
const graphQL = require('./graphql');

const app = express();

// to get req.body in POST requests
app.use(express.json());

// CORS (cross origin requests)
app.use(cors());

// routes
app.use('/', routes);
app.use('/graphql', graphQL);

// express listen port
app.listen(process.env.PORT || 3000, () => {
  console.log(`App listening on port ${process.env.PORT || 3000}`);
});
