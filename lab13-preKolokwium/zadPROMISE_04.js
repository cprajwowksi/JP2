const connect = (funTab, fun) => {
    let tablica = Array.from({length: funTab.length}, () => [])
    funTab.map((x,b) => {
        x().then(value => {
            tablica[b].push(value)
            fun(value)
                .then((res) => tablica[b].push(res))
                .then(() => console.log(tablica))
        })
    })
};

const func1 = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => resolve(4), 5000)
    })
}

const func2 = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => resolve(6), 5000)
    })
}

const func3 = (arg) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => resolve(arg*2), 5000)
    })
}

const tabFun = [func1, func2]

connect(tabFun, func3)