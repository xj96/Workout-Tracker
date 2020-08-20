// Dependencies
const express = require("express");
const logger = require("morgan");
const mongojs = require("mongojs");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


