const http = require("http");
const express = require("express");
const app = express();
const bearerToken = require("express-bearer-token");
const server = http.createServer(app);
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bearerToken());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

dotenv.config();

app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

const { userRouters, fiturRouters } = require("./routers");

app.use("/user", userRouters);
app.use("/fitur", fiturRouters)

const port = 8081;
server.listen(port, () => console.log("this server running on port", port));
