const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/user");
const employeeRoutes = require("./routes/employee");
const { mongoURI } = require("./config");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(`${mongoURI}/manage_content`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.use("/api/user", userRoutes);
app.use("/api/employees", employeeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
