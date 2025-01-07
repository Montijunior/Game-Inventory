require("dotenv").config();
const express = require("express");
const CategoryRoutes = require("./routes/CategoryRoutes");
const DeveloperRoutes = require("./routes/DeveloperRoutes");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");

app.use("/categories", CategoryRoutes);
app.use("/developers", DeveloperRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(process.env.PORT, () =>
  console.log("Server is running on localhost:3000")
);
