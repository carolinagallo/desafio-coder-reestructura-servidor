import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

import AppFactory from "./presentation/factories/appFactory.js";

void (async () => {
  mongoose
    .connect(process.env.MONGO_DB_URI)
    .then(() => console.log("se conecto a la db"))
    .catch((error) => console.log(error));

  const app = AppFactory.create();

  app.init();
  app.build();
  app.listen();
})();
