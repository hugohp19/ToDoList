// server.js

/**
 * Required External Modules
 */

const express = require('express'); //loaded the dependencies
const path = require('path');

/**
 * App Variables
 */

const app = express(); //creating an instance of the express library
const port = process.env.PORT || "8000";
/**
 *  App Configuration
 */

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

/**
 * Routes Definitions
 */

app.get("/", (req, res) => {
    res.status(200).send("TO DO App");
});

/**
 * Server Activation
 */

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});