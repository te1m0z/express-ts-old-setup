require("dotenv").config();
const express = require("express");
const router = require("./router.js");

/* Constants */
const app = express();
const port = process.env.SERVER_PORT;

/* Express settings */
app.use(express.static("public/dist"));
app.use(express.json());
app.use(router);

app.get("/api", (req, res) => {
    res.send("Hello World!");
});

/* Start server listening */
app.listen(port, () => {
    console.log(`Express server is working on localhost : ${port}`);
});


module.exports = app
