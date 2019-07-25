const dotenv =require("dotenv");
dotenv.config;
const routes = require("./routes");
const mongoose = require("mongoose");
const express = require("express");
// const bodyParser = require("body-parser");
// const server = require('http').createServer(app);
// const io = require('socket.io').listen(server);
url= "mongodb://localhost/bookworm";
const app = express();
const PORT = process.env.PORT || 6516;



// io.on('connection', client => {
//   client.on('notifyUser', () => {
//     console.log('client is saving book to db ');
//     client.emit('timer', new Date());
//   });
// });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static files for deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bookworm");

app.listen(PORT, () => {
  console.log(`API server listing on port ${PORT}!`);
});












// // Define middleware here
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// // Add routes, both API and view
// app.use(routes);

// // Connect to the Mongo DB
// // mongoose.connect(process.env.MONGODB_URI || process.env.DB_URI, { useNewUrlParser: true });
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bookworm");
// // Start the API server
// app.listen(PORT, function() {
//   console.log(`🌎  ==> You are now connected on PORT ${PORT}!`);
// });
