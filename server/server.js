const express = require("express");
const app = express();

app.use(express.json());
app.get('/', (request, response) => {
    response.send("<h1>O pai tá on</h1>");
});

app.listen(3131, () => {
    console.log("server on!");
});