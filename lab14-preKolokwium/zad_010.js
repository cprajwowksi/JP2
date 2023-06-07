const axios = require('axios');


const prom1 = axios
    .get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.data.id);

const prom2 = axios
    .get('https://jsonplaceholder.typicode.com/posts/2')
    .then(response => response.data.id);

const prom3 = axios
    .get('https://jsonplaceholder.typicode.com/posts/3')
    .then(response => response.data.id);

const prom4 = axios
    .get('https://jsonplaceholder.typicode.com/posts/4')
    .then(response => response.data.id);
    
const prom5 = axios
    .get('https://jsonplaceholder.typicode.com/posts/5')
    .then(response => response.data.id);


const myPromises = (promises) => promises.reduce((acc, promise) => {
    return acc.then(value => {
        console.log(value);
        return promise;
    });
    }).then(value => console.log(value));

myPromises([prom1, prom2, prom3, prom4, prom5])
