require("dotenv").config();
const env = process.env;
const express = require("express");
const cors = require('cors');
const usersRouter = require("./routes/user.js");
const categoriesRouter = require("./routes/categories.js");
const postsRouter = require("./routes/posts.js");
const { initDB } = require('./database.js')

/* Constants */
const app = express();
const port = env.SERVER_PORT;

/* Express settings */
app.use(cors({
    origin: 'http://localhost:8080'
}));
app.use(express.static("public/dist"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


/* API routes */
app.use("/api/user", usersRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/posts", postsRouter);

/* Start server listening */
app.listen(port, () => {
    console.log(`Express server is working on localhost : ${port}`);
});

module.exports = app;
