const multiplyAsync = (x, y) => {
    return new Promise((resolve, reject) => {
        if (typeof x !== "number" || typeof y !== "number"){
            reject(err)
        } else{
            resolve(x+y)
        }
    }).then((res) => console.log(res), (err) => undefined)
}

multiplyAsync(5,"S")