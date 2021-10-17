const mongoose = require('mongoose');

mongoose.connection.close();
// Setup mongoose connection
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  /* useCreateIndex: true,
  useFindAndModify: false, */
});

//Get the connection
const db = mongoose.connection;

db.once('open', () => {
  console.log('Database has been connected');
});

//Bind connection to error event (to get notification of connection errors)
db.on('error', () => {
  console.error.bind(console, 'MongoDB connection error:');
  db.close();
});

/* Check connection with db AFTER being already established*/
db.on('disconnected', () =>
  console.error('Lost connection with MongoDB')
);
/* Successfull reconnection after disconnection with db */
db.on('reconnected', () =>
  console.log('Reconnected to the database')
);

module.exports = db;
