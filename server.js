const express = require('express');
const bodyParser = require('body-parser');
const orm = require("./config/orm.js");

const app = express();

const PORT = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
 
// parse application/json
app.use(bodyParser.json());
 
// require("./app/routing/apiRoutes.js")(app);
// require("./app/routing/htmlRoutes.js")(app);
// Find all the pets ordering by the lowest price to the highest price.
// orm.selectAndOrder("animal_name", "pets", "price");

// Find a pet in the pets table by an animal_name of Rachel.
// orm.selectWhere("pets", "animal_name", "Rachel");

// Find the buyer with the most pets.
// orm.findWhoHasMost("buyer_name", "buyer_id", "buyers", "pets");

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));