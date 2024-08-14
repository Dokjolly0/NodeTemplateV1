import "reflect-metadata";
import app from "./app";
import mongoose from "mongoose";
//dotenv
import * as dotenv from 'dotenv';
import * as path from 'path';

//env config
const envFile = path.resolve(__dirname, 'connection.env');
dotenv.config({ path: envFile });
//database config -> local for db local, atlas for db atlas
let database = 'local'
let connection_string;
if (database === 'local') connection_string = `${process.env.CONNECTION_STRING_LOCAL}/todo-list`
else if (database === 'atlas') connection_string = process.env.CONNECTION_STRING;

mongoose.set("debug", true);
mongoose
  .connect(connection_string)
  .then((_) => {
    const port = process.env.PORT;
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
