const express = require('express');
const superheroRouter = require('./router/superhero.router');
const cors = require('cors');

const app = express();

app.use(cors());
app.use('/', superheroRouter);

//port
app.listen(8000, () => {
    console.log("Listening to port 8000");
});