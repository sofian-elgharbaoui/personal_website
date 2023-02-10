const express = require("express");
const serverless = require("serverless-http");
const app = express();

const Router = express.Router();

app.use(express.static("./public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const sendEmail = require("./controllers/contact");
Router.post("/contact", sendEmail);

app.use("/.netlify/functions/api", Router);
module.exports.handler = serverless(app);
