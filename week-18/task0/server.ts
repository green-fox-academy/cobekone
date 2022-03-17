declare var require: any;
import * as express from "express"; //ha a tsconfigban a esModuleInterop: false van, akkor ez kell
import { Request, Response } from "express";
/* import { Posts } from "./types"; */
/* const mysql = require("mysql"); */
const app = express();
const port = 3000;
var cors = require("cors");
app.use(cors());
app.use(express.json());

app.use(express.static(__dirname + "/assets"));

app.get("/", (_req: Request, res: Response) => {
  res.sendFile(__dirname + "/assets/index.html");
  return;
});
app.listen(port, () => {
  console.log(`Connected to localhost:${port}`);
});
