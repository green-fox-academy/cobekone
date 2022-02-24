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
});
app.get("/books", (req: Request, res: Response) => {
  let inputTask = req.query;
  console.log(inputTask);

  let queryTextTask = Object.keys(inputTask);
  console.log(queryTextTask);
  let queryTextValue: any = Object.values(inputTask);
  console.log(queryTextValue);

  //Ez itt az eredeti mindent kilistázó:
  /*   if (queryTextTask.length == 0) {
    conn.query(
      "SELECT book_mast.book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast JOIN author ON book_mast.aut_id = author.aut_id JOIN category ON book_mast.cate_id = category.cate_id JOIN publisher ON book_mast.pub_id = publisher.pub_id;",
      (err: any, books: any) => {
        if (err) {
          console.error(`Cannot retrieve data: ${err.toString()}`);
          res.sendStatus(500);
          return null;
        }
        const result = { books };
        res.json(result);
        return;
      }
    );
  } */

  //Ez itt a weboldalról vette az adatokat:
  /* 
  function queryConcat() {
    let result =
      "SELECT book_mast.book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast JOIN author ON book_mast.aut_id = author.aut_id JOIN category ON book_mast.cate_id = category.cate_id JOIN publisher ON book_mast.pub_id = publisher.pub_id WHERE ";
    for (let i = 0; i < queryTextTask.length; i++) {
      result += `${queryTextTask[i]} = `;
      result += `"${queryTextValue[i]}"`;
      if (queryTextTask.length - 1 == i) {
      } else {
        result += ` AND `;
      }
    }
    console.log("ez a result" + result);
    return result;
  } */

  //De a tesztelés kedvéért ez van:

  let testQueryTextTask: string[] = ["cate_descrip", "book_price"];
  let testQueryTextValue: string[] = ["Computers", "45"];
  function queryConcat() {
    let result =
      "SELECT book_mast.book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast JOIN author ON book_mast.aut_id = author.aut_id JOIN category ON book_mast.cate_id = category.cate_id JOIN publisher ON book_mast.pub_id = publisher.pub_id";
    if (testQueryTextTask.length == 0) {
      return result;
    }
    result += " WHERE ";
    for (let i = 0; i < testQueryTextTask.length; i++) {
      result += `${testQueryTextTask[i]} = `;
      result += `"${testQueryTextValue[i]}"`;
      if (testQueryTextTask.length - 1 == i) {
      } else {
        result += ` AND `;
      }
    }
    console.log("ez a result" + result);
    return result;
  }

  conn.query(queryConcat(), queryTextValue, (err: any, books: any) => {
    if (err) {
      console.error(`Cannot retrieve data: ${err.toString()}`);
      res.sendStatus(500);
      return null;
    }
    const result = { books };
    console.log(result);
    res.json(result);
    return;
  });

  //Ez is akkor kéne, ha az oldal küldené az adatokat:
  /*   if (queryTextTask && queryTextTask[0] === "cate_descrip") {
    conn.query(queryConcat(), queryTextValue, (err: any, books: any) => {
      if (err) {
        console.error(`Cannot retrieve data: ${err.toString()}`);
        res.sendStatus(500);
        return null;
      }
      const result = { books };
      console.log(result);
      res.json(result);
      return;
    });
  } */
});

app.listen(port, () => {
  console.log(`Connected to localhost:${port}`);
});
