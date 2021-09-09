const express = require("express");
const app = express();
const { getData } = require("./data");

app.get("/:cardType", function (req, res) {
    console.log('hello');
    const data = getData();

    const reviews = data['reviews'];

    res.send("insert Data here" + data);
});
