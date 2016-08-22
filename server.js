var express = require('express');

const PORT = 8080;

var app = express();

app.use("/", express.static(__dirname));

app.listen(PORT);

console.log("listening on port 8080");
