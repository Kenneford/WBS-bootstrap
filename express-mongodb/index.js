const express = require("express");
const mongoose = require("mongoose");
const Student = require("./model/student");

const mongodbPassword = "CodeWithKenn88.";
const mongodbConnection = `mongodb+srv://kenneford88:${mongodbPassword}@cluster0.0qyauhc.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(mongodbConnection);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection failed"));

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());

const port = 8083;

//Helper Function
function _makeApiSTudent(dbStudent) {
  return {
    id: dbStudent._id,
    name: dbStudent.name,
    firstName: dbStudent.first_name,
    email: dbStudent.email,
    address: dbStudent.address,
  };
}

// app.post("/student", (req, res) => {
//   console.log(req.body);
//   Student.create({
//     name: req.body.name,
//     first_name: req.body.firstName,
//     email: req.body.email,
//   }).then((newStudent) => {
//     res.send(newStudent);
//   });
//   console.log("Creation in progress");
// });

//Posting data
app.post("/student", async (req, res) => {
  console.log(req.body);
  const newStudent = await Student.create({
    name: req.body.name,
    first_name: req.body.firstName,
    email: req.body.email,
    address: req.body.address,
  });
  // .then((newStudent) => {
  res.send(newStudent);
  // });
  console.log("Creation in progress");
});

//Getting all data
app.get("/student", async (req, res) => {
  const studentsArray = await Student.find({});
  res.send(studentsArray.map((e) => _makeApiSTudent(e)));
});

//Getting a data by ID
app.get("/student/:id", async (req, res) => {
  const { id } = req.params;
  const e = await Student.findById(id);
  res.send(_makeApiSTudent(e));
});

//Deleting
app.delete("/student/:id", async (req, res) => {
  const { id } = req.params;
  const e = await Student.deleteOne({ _id: id });
  res.send({ status: "Deleted" });
});

//Patching/Updating One
app.patch("/student/:id", async (req, res) => {
  const { id } = req.params;
  const e = await Student.updateOne(
    { _id: id },
    {
      set: {
        name: req.body.name,
        first_name: req.body.firstName,
        email: req.body.email,
        address: req.body.address,
      },
    }
  );
  res.send(e);
});

//Patching/Updating Many
app.patch("/student/:id", async (req, res) => {
  const { id } = req.params;
  const criteria = req.query;
  const e = await Student.updateMany(
    { criteria },
    {
      set: {
        name: req.body.name,
        first_name: req.body.firstName,
        email: req.body.email,
        address: req.body.address,
      },
    }
  );
  res.send(e);
});

//Updating via PUT method by ID
app.put("/student/:id", async (req, res) => {
  const { id } = req.params;
  const e = await Student.updateOne(
    { _id: id },
    {
      name: req.body.name || "",
      first_name: req.body.firstName || "",
      email: req.body.email || "",
      address: req.body.address || "",
    }
  );
  res.send(e);
});

app.listen(port, () => console.log(`Server listening at port ${port}`));
