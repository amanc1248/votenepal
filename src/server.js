const express = require("express");
const app = express();
const morgan = require("morgan");
const serverless =  require('serverless-http')
// h
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(morgan("tiny"));

app.use("/api", require("../routes/routes"));

app.listen(PORT, () => {
  console.log("Server running in port 5000");
});
module.exports.handler = serverless(app);
