const poKolei = (fun1, fun2, cb) => {
    return fun1(fun2, cb)
};


const func1 = (fun2, cb) => {
    setTimeout(() => {
        fun2(4, cb)
    }, 2000)
}

const func2 = (arg, cb) => {
    setTimeout(() => {
        cb(arg)
    }, 2000)
}

poKolei(func1, func2, (arg) => console.log(arg))