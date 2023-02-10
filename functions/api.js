const express = require("express");
const serverless = require("serverless-http");
require("dotenv").config();

const app = express();

const Router = express.Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

Router.get("/info", (req, res) => {
  res.json({
    msg: "kqjfmdlkj",
    email: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  });
});

const sendEmail = require("./controllers/contact");
Router.post("/contact", sendEmail);

app.use("/.netlify/functions/api", Router);
module.exports.handler = serverless(app);
