function razem(promisesTab, callback) {
    let tablica = []
    promisesTab.map(x => {
        x.then(value => {
            tablica.push(value)
            if (promisesTab.length === tablica.length){
                callback(tablica)
            }
        })
    })
  }

const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 16000)
}) 

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 11000)
}) 

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(3), 15000)
}) 

const tablicaPromise = [promise, promise2, promise3]

razem(tablicaPromise, (arg) => console.log(arg))

