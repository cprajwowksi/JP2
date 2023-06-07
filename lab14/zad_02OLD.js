const razemTab = (funTab, cb) => {
    funTab.map((x, b) => x(() => ))

};

const func1 = (cb) => {
    setTimeout(() => {
        cb(2)
    }, 2000)
}

const func2 = (cb) => {
    setTimeout(() => {
        cb(7)
    }, 2000)
}

const tablica = [func1, func2]

razemTab(tablica, (value) => console.log(value))