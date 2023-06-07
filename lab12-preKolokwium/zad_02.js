const { default: axios } = require("axios");

const tabela = Array(5).fill(null)
const tabelaLiczb = tabela.map(() => Math.floor(Math.random() * 100) + 1)
console.log(tabelaLiczb);

const promisyPost = Promise.all(tabelaLiczb.map(x => axios.get(`https://jsonplaceholder.typicode.com/posts/${x}`)))
    .then(value => value)
const promisyComment = Promise.all(tabelaLiczb.map(x => axios.get(`https://jsonplaceholder.typicode.com/posts/${x}/comments`)))
    .then(value => value)

Promise.all([promisyPost, promisyComment])
    .then((value) => value[0].map((x, b) => {
        return {"entry": {
            "title": x.data.title,
            "body": x.data.body
        },
        "comments": {
            "name": value[1][b].data.map(x => x.name),
            "email": value[1][b].data.map(x => x.email),
            "body": value[1][b].data.map(x => x.body)
        }
    }
    }))
    .then(res => console.dir(res, {depth: null}))

