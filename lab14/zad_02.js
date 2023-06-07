const razemTab = (funTab, cb) => {
    let wynik = []
    funTab.map((x, b) => {
        x((arg) => {
            wynik[b] = arg
            if (wynik.filter(n => n).length === funTab.length){
                cb(wynik)
            }
        } )
    })


};

const func1 = (cb) => {
    setTimeout(() => {
        cb(5)
    }, 3000)
}

const func2 = (cb) => {
    setTimeout(() => {
        cb(3)
    }, 2000)
}

const func3 = (cb) => {
    setTimeout(() => {
        cb(7)
    }, 2000)
}

const funcTab = [func1,func2,func3]

razemTab(funcTab, (value) => console.log(value))


