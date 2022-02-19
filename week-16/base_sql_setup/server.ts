declare var require: any;
import express, { Request, Response } from "express";
const mysql = require("mysql");
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static("public"));

let conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "movies",
});

conn.connect((err: Error) => {
  if (err) {
    console.error("Cannot connect to the database", err);
    return;
  }
  console.log("Connection established");
  /*   conn.end(); */
});

/* conn.query("SELECT * FROM movie LIMIT 1;", (err: any, rows: any) => {
  if (err) {
    console.error(`cannot retrieve data ${err.toString()}`);
    return null;
  }

  console.log("Data received from Db:\n");
  console.log(rows);
}); */

app.get("/", (req: any, res: any) => {
  conn.query("SELECT title FROM movie LIMIT 10;", (err: any, rows: any) => {
    if (err) {
      console.error(`Cannot retrieve data: ${err.toString()}`);
      res.sendStatus(500);
      return null;
    }
    console.log(rows);
    return res.send(rows);
  });
});

app.listen(port, () => {
  console.log(`Connected to localhost:${port}`);
});
