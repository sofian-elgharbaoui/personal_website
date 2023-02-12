const express = require("express");
const app = express();

require("dotenv").config();

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const sendEmail = require("./controllers/contact");
app.post("/contact", sendEmail);

app.use((err, req, res, next) => {
  res.status(500).json(err);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}!`);
});

module.exports = app;
