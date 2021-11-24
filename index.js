require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./routes");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(routes);
app.use("/uploads", express.static("uploads"));

app.listen(process.env.PORT, function () {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
