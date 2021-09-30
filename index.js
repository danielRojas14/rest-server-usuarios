const express = require("express");
const morgan = require("morgan");
require("dotenv").config();

require("./connection");
const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setttings
app.set("port", process.env.PORT || 5000);

// Routes
app.use(require("./routes/usuarios.routes"));
app.use(require("./routes/login.routes"));

app.listen(app.get("port"), () =>
  console.log(`Server on port ${app.get("port")}`)
);
