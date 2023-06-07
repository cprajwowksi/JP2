const obetnica = new Promise((resolve, reject) => {
    setTimeout(() => reject("error"), 5000)
}).catch((value) => console.log(value))

const obetnica2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("error"), 3000)
}).then((res) => console.log(res), (err) => console.log(err))