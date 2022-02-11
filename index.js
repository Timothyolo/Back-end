//const db = require("./db")
//console. log(db);

const { destination } = require("./db");
const express = require("express");

const PORT = process.env.PORT || 3000;

const server = express();

//server listening
server.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});
server.get("/", (req, res) => {
  res.send(destination);
});
