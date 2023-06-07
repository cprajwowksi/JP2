
const func1 = (cb) => {
    setTimeout(() => {
        cb(1)
    }, 1000)
}

const func2 = (cb) => {
    setTimeout(() => {
        cb(2)
    }, 1000)
}

const func3 = (y, cb) => {
    setTimeout(() => {
        y*2
        cb(y*2)
    }, 1000)
}

const connect = (funTab, fun) => {
    const tablica = [[], []]
    funTab.map((x, b) => {
        x((y) => {
            tablica[b].push(y)
            tablica[b].push(fun(y, () => console.log(tablica)))

        })
    }
    )
};

connect([func1, func2], func3)