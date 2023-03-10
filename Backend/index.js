const express = require("express");
const cors = require("cors");
const productRouter = require("./routes/ProdRoutes");
const connection = require("./Storage/db");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api", productRouter);

app.listen(8080, async () => {
  try {
    await connection;
    console.log("successfully connected to db");
  } catch (error) {
    console.log("Failed to connect");
  }
});