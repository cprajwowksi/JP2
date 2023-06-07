const obetnica = new Promise((resolve, reject) => {
    setTimeout(() => resolve("string"), 5000)
}).then((value) => console.log(value))