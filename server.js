const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
 
// parse application/json
app.use(bodyParser.json());
 
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));