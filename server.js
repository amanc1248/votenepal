const express = require("express");
const app = express();
const morgan = require("morgan");

const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(morgan("tiny"));

app.use("/", require("./routes/routes"));

app.listen(PORT, () => {
  console.log("Server running in port 5000");
});
