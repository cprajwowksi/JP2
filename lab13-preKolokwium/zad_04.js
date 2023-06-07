const connect = (funTab, fun) => {
    let tablica = Array.from({ length: funTab.length}, () => [])
    funTab.map((x,b) => {
        x((arg) => {
            tablica[b].push(arg)
            tablica[b].push(fun(arg))
            console.log(tablica);
        }) 
        x
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

const func3 = (cb) => {
    setTimeout(() => {
        cb(3)
    }, 2000)
}


const func4 = (n) => {
    setTimeout(() => {
        n*3
    }, 2000)
}

const tablica2 = [func1, func2, func3]

connect(tablica2, func4)
