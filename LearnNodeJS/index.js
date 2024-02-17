import express from "express";
import path from "path"; // to get the path from scratch
import mongoose from "mongoose";

const app = express();

// connecting database
mongoose
  .connect("mongodb://127.0.0.1:27017", {
    dbName: "backend",
  })
  .then(() => console.log("database connected"))
  .catch((e) => console.log(e));

//creating schema
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// creating model
const message = mongoose.model("Message", messageSchema);

// using middleware
// to link the static files ( the public folder )
app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));

// setting up view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { name: "Jai" });
});

app.post("/contact", async (req, res) => {

// saving data to database 
  await message.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  res.redirect("/success");
});

app.get("/success",(req, res) => {
    res.render("success");
})

app.get("/users", (req, res) => {
  res.json({
    users,
  });
});

app.listen(5000, () => {
  console.log("Server is running");
});
