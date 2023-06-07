const { default: axios } = require("axios");
function razem(promisesTab, callback){
   const tablica = []
   promisesTab.map((x) => x.then((value) => {
    tablica.push(value)
    if (promisesTab.length === tablica.length){
        console.log(tablica);
        callback()
    }
}))

  }


const tablica = [1, 24, 65, 77, 94];
const promisy = tablica.map(x => axios.get(`https://jsonplaceholder.typicode.com/posts/${x}`))
promisy.push(new Promise((resolve, response) => {
    setTimeout(x => resolve("elo"), 3000)
}))
promisy.push(new Promise((resolve, response) => {
    setTimeout(x => resolve("elo3"), 1000)
}))
promisy.push(new Promise((resolve, response) => {
    setTimeout(x => resolve("elo4"), 3000)
}))
razem(promisy, () => console.log("Koniec"))