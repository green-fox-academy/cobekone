declare var require: any;
import * as express from "express"; //ha a tsconfigban a esModuleInterop: false van, akkor ez kell
import { Request, Response } from "express";
const mysql = require("mysql");
const app = express();
const port = 3000;
var cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

let conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "bookstore",
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

app.get("/books", (_req: Request, res: Response) => {
  conn.query(
    "SELECT book_mast.book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast JOIN author ON book_mast.aut_id = author.aut_id JOIN category ON book_mast.cate_id = category.cate_id JOIN publisher ON book_mast.pub_id = publisher.pub_id;",
    (err: any, books: any) => {
      if (err) {
        console.error(`Cannot retrieve data: ${err.toString()}`);
        res.sendStatus(500);
        return null;
      }
      const result = { books };
      /*       console.log(result); */
      res.json(result);
      return;
    }
  );
});

app.get("/books/query*", (req: Request, res: Response) => {
  console.log("/books szöveg");
  let inputTask = req.query;
  console.log(inputTask);

  let queryTextTask = "cate_descrip";
  console.log(queryTextTask);
  let queryTextValue = "Computers";
  console.log(queryTextValue);

  conn.query(
    `SELECT book_mast.book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast JOIN author ON book_mast.aut_id = author.aut_id JOIN category ON book_mast.cate_id = category.cate_id JOIN publisher ON book_mast.pub_id = publisher.pub_id WHERE ? = ?;`,
    [queryTextTask, queryTextValue],
    (err: any, books: any) => {
      if (err) {
        console.error(`Cannot retrieve data: ${err.toString()}`);
        res.sendStatus(500);
        return null;
      }
      const result = { books };
      console.log(result);
      res.json(result);
      return;
    }
  );
});

app.listen(port, () => {
  console.log(`Connected to localhost:${port}`);
});
