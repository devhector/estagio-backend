const express = require("express");
const helmet = require("helmet");
const router = require("./routes");

const app = express();

app.use(express.json());
app.use(helmet());
app.use(router);


app.use((request, response, next) => {

    const error = new Error('404 - Not found');
    error.status = 404;
    next(error);

})


app.use((error, request, response, next) => {

    response.status(error.status || 500);
    response.json({ error: error.message});

})

const port = process.env.PORT || 3939;

app.listen(port, () => {

    console.log("server running on port 3131!");

});