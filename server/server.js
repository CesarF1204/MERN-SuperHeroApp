const express = require('express');
const superheroRouter = require('./router/superhero.router');
const registerRouter = require('./router/register.router');
const loginRouter = require('./router/login.router');
const cors = require('cors');
const mongoose = require('mongoose');

const dbName = "login-and-registration";

( async () => {
    try {
        await mongoose.connect(`mongodb://localhost:27017/${dbName}?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false`);
        console.log('Successfully Connected to MongoDB!')
    } catch(err) {
        console.log(err);
    }

    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.use('/', superheroRouter);
    app.use('/user/register', registerRouter);
    app.use('/user/login', loginRouter);

    //port
    app.listen(8000, () => {
        console.log("Listening to port 8000");
    });

})();