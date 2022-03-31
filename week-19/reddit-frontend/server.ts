declare var require: any;
import * as express from "express"; //ha a tsconfigban a esModuleInterop: false van, akkor ez kell
import { Request, Response } from "express";
/* import { Posts } from "./types"; */
const mysql = require("mysql");
const app = express();
const port = 3000;
var cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.static("assets"));

let conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "reddit",
});

conn.connect((err: Error) => {
  if (err) {
    console.error("Cannot connect to the database", err);
    return;
  }
  console.log("Connection established");
});

app.get("/", (_req: Request, res: Response) => {
  res.sendFile(__dirname + "/assets/index.html");
  return;
});

app.get("/posts", (_req: Request, res: Response) => {
  conn.query("SELECT * FROM posts", (err: any, posts: any) => {
    if (err) {
      console.error(`Cannot retrieve data: ${err.toString()}`);
      res.sendStatus(500);
      return null;
    }
    const resultObject = { posts };
    return res.status(200).send(resultObject);
  });
});

function addslashes(str: string) {
  return (str + "").replace(/([\\"'])/g, "\\$1").replace(/\0/g, "\\0");
}

app.post("/posts", (req: Request, res: Response) => {
  let bodyTitle: string = addslashes(req.body.title);
  let bodyOwner: string = addslashes(req.body.owner);
  let bodyUrl: string = addslashes(req.body.url);
  conn.query(
    "INSERT INTO `reddit`.`posts` (`title`, `url`, `owner`) VALUES (?, ?, ?);",
    [bodyTitle, bodyOwner, bodyUrl],
    (err: any, _postedContent: any) => {
      if (err) {
        console.error(`Cannot retrieve data: ${err.toString()}`);
        res.sendStatus(500);
        return null;
      }
    }
  );

  conn.query(
    "SELECT * FROM posts ORDER BY id DESC LIMIT 1",
    (err: any, lastPost: any) => {
      if (err) {
        console.error(`Cannot retrieve data: ${err.toString()}`);
        res.sendStatus(500);
        return null;
      }
      const resultObject = { lastPost };

      return res.status(200).send(resultObject);
    }
  );
});

app.put("/posts/:id/upvote", (_req: Request, _res: Response) => {
  const { id } = _req.params;

  conn.query(
    "UPDATE `reddit`.`posts` SET `score` = score + 1 WHERE (`id` = '" +
      id +
      "');",
    (err: any, _posts: any) => {
      if (err) {
        console.error(`Cannot retrieve data: ${err.toString()}`);
        _res.sendStatus(500);
        return null;
      }
      conn.query(
        "SELECT * FROM posts WHERE id = ?",
        [id],
        (err: any, upvotedPost: any) => {
          if (err) {
            console.error(`Cannot retrieve data: ${err.toString()}`);
            _res.sendStatus(500);
            return null;
          }
          const resultObject = { upvotedPost };

          return _res.status(200).send(resultObject);
        }
      );
    }
  );
});

app.put("/posts/:id/downvote", (_req: Request, _res: Response) => {
  const { id } = _req.params;

  conn.query(
    "UPDATE `reddit`.`posts` SET `score` = score -1 WHERE (`id` = '" +
      id +
      "');",
    (err: any, _posts: any) => {
      if (err) {
        console.error(`Cannot retrieve data: ${err.toString()}`);
        _res.sendStatus(500);
        return null;
      }
      conn.query(
        "SELECT * FROM posts WHERE id = ?",
        [id],
        (err: any, upvotedPost: any) => {
          if (err) {
            console.error(`Cannot retrieve data: ${err.toString()}`);
            _res.sendStatus(500);
            return null;
          }
          const resultObject = { upvotedPost };

          return _res.status(200).send(resultObject);
        }
      );
    }
  );
});

app.delete("/posts/:id", (_req: Request, _res: Response) => {
  const { id } = _req.params;

  conn.query(
    "SELECT * FROM posts WHERE id = ?",
    [id],
    (err: any, deletedPost: any) => {
      if (err) {
        console.error(`Cannot retrieve data: ${err.toString()}`);
        _res.sendStatus(500);
        return null;
      }
      const resultObject = { deletedPost };
      _res.json(resultObject);

      conn.query(
        "DELETE FROM posts WHERE id = ?",
        [id],
        (err: any, _res: any) => {
          if (err) {
            console.error(`Cannot retrieve data: ${err.toString()}`);
            _res.sendStatus(500);
            return null;
          }
        }
      );
    }
  );
});

app.listen(port, () => {
  console.log(`Connected to localhost:${port}`);
});
