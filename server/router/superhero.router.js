const express = require('express');
const axios = require("axios");
const superheroRouter = express.Router();

superheroRouter.get('/', (req, res) => {
    res.send('Hello World');
});

let superherourl = "https://www.superheroapi.com/api/4394190690700966/";

// get superhero by search
superheroRouter.get(`/search/:hero`, function(request, response){
    let params = request.params.hero;
    // use the axios .get() method - provide a url and chain the .then() and .catch() methods
    axios.get(`${superherourl}/search/${params}`)
    .then(data => {
        // log the data before moving on
        console.log(data.data);
        // rather than rendering, just send back the json data
        response.json(data.data);
    })
    .catch(error => {
        // log the error before moving on
        console.log(error);
        response.json(error);
    });
});

// get superhero by search
superheroRouter.get(`/search/:hero`, function(request, response){
    let params = request.params.hero;
    // use the axios .get() method - provide a url and chain the .then() and .catch() methods
    axios.get(`${superherourl}/search/${params}`)
    .then(data => {
        // log the data before moving on
        console.log(data.data);
        // rather than rendering, just send back the json data
        response.json(data.data);
    })
    .catch(error => {
        // log the error before moving on
        console.log(error);
        response.json(error);
    });
});

// get superhero by id
superheroRouter.get(`/:id`, function(request, response){
    let params = request.params.id;
    // use the axios .get() method - provide a url and chain the .then() and .catch() methods
    axios.get(`${superherourl}/${params}`)
    .then(data => {
        // log the data before moving on
        console.log(data.data);
        // rather than rendering, just send back the json data
        response.json(data.data);
    })
    .catch(error => {
        // log the error before moving on
        console.log(error);
        response.json(error);
    });
});

// adding superhero from favorites
superheroRouter.post(`/:id`, function(request, response){
    let params = request.params.id;
    // use the axios .post() method - provide a url and chain the .then() and .catch() methods
    axios.get(`${superherourl}/${params}`)
    .then(data => {
        // log the data before moving on
        console.log(data.data);
        // rather than rendering, just send back the json data
        response.json(data.data);
    })
    .catch(error => {
        // log the error before moving on
        console.log(error);
        response.json(error);
    });
});

// removing superhero from favorites
superheroRouter.delete(`/:id `, function(request, response){
    let params = request.params.id;
    // use the axios .delete() method - provide a url and chain the .then() and .catch() methods
    axios.get(`${superherourl}/${params}`)
    .then(data => {
        // log the data before moving on
        console.log(data.data);
        // rather than rendering, just send back the json data
        response.json(data.data);
    })
    .catch(error => {
        // log the error before moving on
        console.log(error);
        response.json(error);
    });
});

module.exports = superheroRouter;