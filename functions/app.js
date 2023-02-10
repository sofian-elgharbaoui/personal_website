const express = require("express");
const serverless = require("serverless-http");
const app = express();

const Router = express.Router();

app.use(express.static("./public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const sendEmail = require("./controllers/contact");
Router.post("/contact", sendEmail);

// const port = 3000;
// app.listen(port, () => console.log(`Server is listening on port ${port}!`));

app.use("/.netlify/functions/app", Router);
module.exports.handler = serverless(app);
