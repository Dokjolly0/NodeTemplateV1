import "reflect-metadata";
import app from "./app";
import mongoose from "mongoose";
//dotenv
import * as dotenv from 'dotenv';
import * as path from 'path';

//env config
const envFile = path.resolve(__dirname, 'connection.env');
dotenv.config({ path: envFile });
const connection_string = process.env.CONNECTION_STRING_LOCAL;

mongoose.set("debug", true);
mongoose
  .connect(`${connection_string}/todo-list`)
  .then((_) => {
    const port = process.env.PORT;
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
