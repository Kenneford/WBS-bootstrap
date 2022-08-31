const express = require("express");

const app = express();
app.set("view engine", "ejs");

const books = [
  {
    author: "Mark twain",
    title: "Huckleberry Finn",
    releasedYear: 1884,
  },
  {
    author: "Frank Herbert",
    title: "Dune",
    releasedYear: 1965,
  },
];

const port = process.env.PORT || 4000;

app.get("/", (req, res) => res.render("greeting"));

app.get("/api/book", (req, res) => res.json(books));

app.listen(port, () => console.log("server listening at " + port));
