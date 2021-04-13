const express = require("express");
const bodyParser = require("body-parser");
const app = express(); // declaring app that is express 
// adding the static routes 
app.use(express.static("./public"));

// by default this app should be assuming 
app.use(bodyParser.json());

// add the contacts routes
// const contacts = require('./routes/contacts');
// app.use(contacts);


// require stack short hand
app.use(require("./routes/contacts"));
app.use(require("./routes/comments"));
app.use(require("./routes/products"));
app.use(require("./routes/vehicles"));

const port = process.env.PORT || 4001;


app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
