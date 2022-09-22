const express = require("express");

const app = express();

app.use(express.json());

const port = process.env.PORT || 7500;

// let apiRouter = require("/routers/api");
// app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send(`<h1>My Travel Wishlist API</h1>`);
});

app.listen(port, () => console.log(`Server listening at port ${port}`));
