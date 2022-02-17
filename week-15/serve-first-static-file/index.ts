/* import { express } from "express"; */ //Ez nekem sem akar működni...
/* const express = require("express"); */
import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.listen(port, function () {});

app.use(express.static(__dirname + "/assets"));

app.get("/", (req: any, res: any) => {
  res.sendFile(__dirname + "/index.html");
});
