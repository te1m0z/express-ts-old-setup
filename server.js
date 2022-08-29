require("dotenv").config();
const env = process.env;
const express = require("express");
const usersRouter = require("./routes/api/users.js");

/* Constants */
const app = express();
const port = env.SERVER_PORT;

/* Express settings */
app.use(express.static("public/dist"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* API routes */
app.use("/api/user", usersRouter);

/* Start server listening */
app.listen(port, () => {
    console.log(`Express server is working on localhost : ${port}`);
});

module.exports = app;
