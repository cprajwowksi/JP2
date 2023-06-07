const poKolei = (fun1, fun2, fun3, cb) => {
    fun1()
    .then((response) => fun2(response), (err) => fun2(err))
    .then((response2) => fun3(response2), (err) => fun3(err))
    .then((response3) => cb(response3), (err) => cb(5))
    .then((value) => console.log(value))
  };

const func1 = () => {
    return new Promise((resolve, reject) => {
        resolve("Elo")
    })
}

const func2 = (response) => {
    return new Promise((resolve, reject) => {
        if (typeof response === "number"){
            resolve(2*response)
        } else{
            reject("lecimy dalej ")
        }
        
    })
}

const func3 = (response) => {
    return new Promise((resolve, reject) => {
        if (typeof response === "number"){
            resolve(2*response)
        } else{
            reject("lecimy dalej ")
        }
        
    })
}

const fcb = (response) => {
    return new Promise((resolve, reject) => {
        if (typeof response === "number"){
            resolve(1/response)
        } else{
            reject("lecimy dalej ")
        }
    })
}

poKolei(func1, func2, func3, fcb)