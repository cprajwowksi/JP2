const poKolei = (fun1, fun2, fun3, cb) => {
    return fun1(2)
        .then(value => fun2(value))
        .then(value2 => fun3(value2))
        .then(value3 => cb(value3))

  };

const func1 = (elo) => {
    return new Promise((resolve, reject) => {
        resolve(elo*5)
    })
}


poKolei(func1,func1,func1,(arg) => console.log(arg))