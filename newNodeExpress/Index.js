const dotenv = require("dotenv");
dotenv.config();
// import * from 'dotenv';

const express = require("express");
const { Pool } = require("PG");

const app = express();
app.use(express.json());
app.set("view engine", "ejs");

// const books = [
//   {
//     author: "Mark twain",
//     title: "Huckleberry Finn",
//     releasedYear: 1884,
//   },
//   {
//     author: "Frank Herbert",
//     title: "Dune",
//     releasedYear: 1965,
//   },
// ];

const port = process.env.PORT || 4000;

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
  ssl: true,
  ssl: { rejectUnauthorized: false },
});

app.get("/", (req, res) => res.render("greeting"));

app.get("/api/book", (req, res) => {
  pool
    .query("SELECT * FROM books;")
    .then((data) => {
      res.json(data.rows);
    })
    .catch((err) => {
      res.status(400).send({
        error: err.message,
      });
    });
});

// Params
app.get("/api/book/:id", (req, res) => {
  const { id } = req.params;
  pool
    .query("SELECT * FROM books WHERE id=$1;", [id])
    .then((data) => {
      res.json(data.rows);
    })
    .catch((err) => {
      res.status(400).send({
        error: err.message,
      });
    });
});

app.post("/api/book", (req, res) => {
  console.log(req.body);
  pool
    .query(
      `
  insert into books(author, title, release_year) 
  values ($1, $2, $3) returning *;
  `,
      [req.body.author, req.body.title, req.body.releasedYear]
    )
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(400).send({
        error: err.message,
      });
    });
  //   res.status(201).send({ status: "created" });
});

console.log(process.env.PG_DATABASE);
// app.listen(port, () => console.log("server listening at " + port));
app.listen(port, () => console.log("connected to Postgre"));
