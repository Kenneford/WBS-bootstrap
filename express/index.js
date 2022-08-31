import express from "express";
// import eje from "ejs";

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json({}));
const port = 5000;

function greetings(req, res) {
  res.send("Hello World!");
}

const greetingData = {
  greeting: "Hello Kenn",
  details: "it's fine evening",
};

app.get("/", greetings);
app.get("/greetings/:name", (req, res) => {
  //   res.send(`Special greeting, ` + req.params.name);
  res.render("greetings", { name: req.params.name });
});

app.get("/register", (req, res) => {
  console.log(req.query);
  res.send("User added. Hello " + req.query.name);
});

app.get("/api/greetings", (req, res) => {
  res.send(greetingData);
});

app.post("/api/user", (req, res) => {
  console.log(req.body);
  res.status(201).send({ status: "ok" });
});

app.listen(port, () => console.log("Server listening at " + port));
