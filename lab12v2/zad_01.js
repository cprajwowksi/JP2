// const { default: axios } = require("axios");


// const tablica = [1, 24, 65, 77, 94]
// const promisy = 
//     tablica.map(x => axios.get(`https://jsonplaceholder.typicode.com/posts/${x}`))
// const jeden = Promise.all(promisy).then((values) => values.map(x => {
//     return {
//         title: x.data.title,
//         body: x.data.body
//     }
//     }
//     )).then((values) => values)
// console.log(jeden);


const { default: axios } = require("axios");

const tablica = [1, 24, 65, 77, 94];
const promisy = Promise.all(tablica.map(x => axios.get(`https://jsonplaceholder.typicode.com/posts/${x}`))).then((value) => value);
const promisy2 = Promise.all(tablica.map(x => axios.get(`https://jsonplaceholder.typicode.com/posts/${x}/comments`))).then((value) => value);

Promise.all([promisy, promisy2]).then((value) => value[0].map((x, b) => {
  return {
    "entry": {
      "title": `title ${b+1}`,
      "body": x.data.body
    },
    "comments": value[1][b].data.map(x => {
        return {"name": x.name,
                "email": x.email,
                "body": x.body
      }
        
      })   
  }
})).then((respone) => console.dir(respone, {depth: null}))