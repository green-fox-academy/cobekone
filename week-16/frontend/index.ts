/* import { express } from "express"; */ //Ez nekem sem akar működni...
/* const express = require("express"); */
import express, { Request, Response } from "express";
import { factor, sumUntil } from "./math";
/* var bodyParser = require('body-parser') */

const app = express();
const port = 3000;
app.use(express.json());

app.listen(port, function () {
  console.log(`App listens on http:localhost:${port}`);
});

app.use(express.static(__dirname + "/assets"));

app.get("/", (req: any, res: any) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/doubling", (req: any, res: any) => {
  let resultObject = {
    received: parseInt(req.query.input),
    result: req.query.input * 2,
  };
  if (!req.query.input) {
    return res.json({ error: "Please provide an input!" });
  }

  return res.json(resultObject);
});

app.get("/greeter", (req: any, res: any) => {
  let receivedName = req.query.name;
  let receivedTitle = req.query.title;

  let resultObject = {
    welcome_message: `Oh, hi there ${receivedName}, my dear ${receivedTitle}!`,
  };
  if (!req.query.name && !req.query.title) {
    return res.status(400).send({
      error: "Please provide a name and a title!",
    });
  }
  if (!req.query.name) {
    return res.status(400).send({
      error: "Please provide a name!",
    });
  }
  if (!req.query.title) {
    return res.status(400).send({
      error: "Please provide a title!",
    });
  }

  return res.json(resultObject);
});

app.get("/appenda/:input", (req: any, res: any) => {
  let resultObject = {
    appended: `${req.params.input}a`,
  };

  return res.json(resultObject);
});

app.get("/appenda", (req: any, res: any) => {
  if (!req.params.input) {
    return res.status(404).send();
  }
});

app.post("/dountil/:input", (req: any, res: any) => {
  let inputValue: unknown | number = Object.values(req.body)[0];
  let inputTask = req.params.input;
  /*   let inputKey = input[0].key;
  let inputValue = input[0].value; */
  let resultObject = {};
  if (typeof inputValue == "number" && inputTask == "sum") {
    resultObject = {
      result: sumUntil(inputValue),
    };
  }

  if (typeof inputValue == "number" && inputTask == "factor") {
    resultObject = {
      result: factor(inputValue),
    };
  }

  return res.json(resultObject);
});
