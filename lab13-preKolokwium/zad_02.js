const razem = (fun1, fun2, cb) => { 
    const tablica = []
    fun1((arg) => {
        tablica.push(arg)
        if (tablica.length===2){
            cb(tablica)
        }
    })
    fun2((arg) => {
        tablica.push(arg)
        if (tablica.length===2){
            cb(tablica)
        }
    })
};

const func1 = (cb) => {
    setTimeout(() => {
        cb(2)
    }, 3000)
}

const func2 = (cb) => {
    setTimeout(() => {
        cb(1)
    }, 2000)
}

razem(func1, func2, (arg) => console.log(arg))