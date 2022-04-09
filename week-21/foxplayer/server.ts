declare var require: any;
import * as express from "express"; //ha a tsconfigban a esModuleInterop: false van, akkor ez kell
import { Request, Response } from "express";
import * as fs from 'fs';
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
  database: "cobekoneplayer",
});

conn.connect((err: Error) => {
  if (err) {
    console.error("Cannot connect to the database", err);
    return;
  }
  console.log("Connection established");
});

let fileList:string[] = [];
let currentDatabaseFileList:string[] = [];

function generateFileList() {
    fileList = []
    fs.readdir(__dirname + "/public/mp3", function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        files.forEach(function (file) {
            fileList.push(`${file}`)
        })
    })
    return Promise.resolve(42);
}

app.get("/", (_req: Request, res: Response) => {
  res.sendFile(__dirname + "/public/index.html");
  return;
});

app.get("/api/songs", (_req: Request, res: Response) => {
    conn.query("SELECT * FROM mp3files", (err: any, files: any) => {
      if (err) {
        console.error(`Cannot retrieve data: ${err.toString()}`);
        res.sendStatus(500);
        return null;
      }
      const resultObject = { files };
      return res.status(200).send(resultObject);
    });
  });

app.post("/api/updatesongs", (_req: Request, res: Response) => {

    //Ez itt kitörli, amit nem talál a fájlrendszerben
    generateFileList().then(()=>{
    conn.query("SELECT * FROM mp3files",(err: any, files: any) => {
      if (err) {
        console.error(`Cannot retrieve data: ${err.toString()}`);
        res.sendStatus(500);
        return null;
      }
      currentDatabaseFileList = [];
      for (let i = 0; i < files.length; i++) {
        currentDatabaseFileList.push(files[i].filename)
        
      }

      for (let i = 0; i < currentDatabaseFileList.length; i++) {
        if (!fileList.find(e => e == `${currentDatabaseFileList[i]}`)) {

          conn.query("DELETE FROM mp3files WHERE filename = ?",[currentDatabaseFileList[i]],(err: any, _files: any) => {
            if (err) {
              console.error(`Cannot retrieve data: ${err.toString()}`);
              res.sendStatus(500);
              return null;
            }})
        }
        
      }
      //Ez itt hozzáadja ami új a fájlrendszerben
      for (let i = 0; i < fileList.length; i++) {
        if (!currentDatabaseFileList.find(e => e == `${fileList[i]}`)) {

          conn.query("INSERT INTO `cobekoneplayer`.`mp3files` (`filename`) VALUES (?);", [fileList[i]],(err: any, _files: any) => {
            if (err) {
              console.error(`Cannot retrieve data: ${err.toString()}`);
              res.sendStatus(500);
              return null;
            }})
        }
        
      }
    })
    })
  return res.sendStatus(200)
  });

app.listen(port, () => {
    console.log(`Connected to localhost:${port}`);
  });