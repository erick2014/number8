require("./dotenv");
const express = require("express");
const myRouter = require("./src/routes/index");

const PORT = 4000;
const app = express();

app.use(express.json());

// setup main router
app.use(myRouter);

// error handler
app.use((err, req, res, next) => {
  if (err.name) {
    console.log(err.name);
  }
  console.log(err?.original ? err.original : err);
  res.status(500).json({ error: "Internal Server Error" });
  next();
});

// starts server
app.listen(PORT, () => {
  console.log(`Servidor started at port ${PORT}`);
});

module.exports = app;
