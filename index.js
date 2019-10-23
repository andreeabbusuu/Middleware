//express server

const express = require("express");
const app = express();
const port = 3000;



// users route
app.get(
  "/superMiddleware",
  (req, res, next) => {
    console.log(`Logged -- ${new Date()}`);
    next();
  },
  (req, res) => {
    res.send("Hello Middleware");
  }
);

app.listen(port, (req, res) => {
  console.log(`server running on port ${port}`);
});
