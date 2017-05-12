var express = require('express');
var app = express();

var routes = require('./config/routes');
app.use("/", routes);

app.listen(process.env.PORT || 3000, function () {
  console.log('App listening on port 3000');
});
