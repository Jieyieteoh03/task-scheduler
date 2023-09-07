const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// create an instance of express
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsHandler = cors({
  origin: "*",
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 200,
  preflightContinue: true,
});

app.use(corsHandler);

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/task-scheduler2")
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

const taskRouter = require("./routes/task");
const categoryRouter = require("./routes/category");

app.use("/task", taskRouter);
app.use("/category", categoryRouter);

app.get("/", (req, res) => {
  res.send(
    "<button><a href='/category'>Categorys</a></button><button><a href='/task'>task</a></button>"
  );
});

// start the server
app.listen(5000, () => {
  console.log("Server is running at http://localhost:5000");
});
