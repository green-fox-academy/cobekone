declare var require: any;
import * as express from "express"; //ha a tsconfigban a esModuleInterop: false van, akkor ez kell
import { Request, Response } from "express";
/* const mysql = require("mysql"); */
const app = express();
const port = 3000;
var cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

/* let conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "bookstore",
}); */

/* conn.connect((err: Error) => {
  if (err) {
    console.error("Cannot connect to the database", err);
    return;
  }
  console.log("Connection established");
}); */

app.get("/hello", (_req: Request, res: Response) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log(`Connected to localhost:${port}`);
});
