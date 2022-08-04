const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const chalk = require("chalk");
const initDataBase = require("./startUp/initDataBase");
const routes = require("./routes");
const cors = require("cors");
const path = require("path");
const PORT = config.get("port") || 8080;

const app = express();

app.use(express.json());
app.use(express.static("client"));
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/api", routes);

if (process.env.NODE_ENV === "production") {
  const indexPath = path.join(__dirname, "client", "index.html");

  app.use("/", express.static(path.join(__dirname, "client")));
  app.get("*", (req, res) => {
    res.sendFile(indexPath);
  });
}

async function start() {
  try {
    mongoose.connection.once("open", () => {
      initDataBase();
    });
    await mongoose.connect(config.get("mongoUri"));
    app.listen(PORT, () => {
      console.log(chalk.bgGreen(`server has bin stardet on port ${PORT}`));
    });
  } catch (e) {
    console.log(chalk.bgRed(e.message));
    process.exit(1);
  }
}

start();
