const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jobs = require("./middlewares/jobs");
const app = express();
const port = 5000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse various different custom JSON types as JSON
app.use(bodyParser.json());

app.use(cors());

app.get("/", (req, res) => res.send("Hello World!"));

app.use("/jobs", jobs);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
