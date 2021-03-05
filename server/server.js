const express = require("express");
const helmet = require("helmet");
const router = require("./routes");

const app = express();

app.use(express.json());
app.use(helmet());
app.use(router);

app.listen(3131, () => {
    console.log("server on!");
});