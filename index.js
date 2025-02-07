const express = require('express');
const app = express();

app.use(express.json());

app.get("/", function (req, res) {});

app.get('/todo', function (req, res) {});

app.post("/todos", function (req, res) {});

app.put("/completed", function (req, res) {});