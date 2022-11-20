const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(express.json());
app.use(morgan("tiny"));

app.use("/", require("./routes/routes"));

app.listen(5000, () => {
  console.log("Server running in port 5000");
});
