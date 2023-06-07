const grupuj = (funTab1, funTab2, cb) => {
    let tablica
    if (funTab1.length > funTab2.length){
        tablica = Array.from({ length: funTab1.length }, () => []);
    } else {
        tablica = Array.from({ length: funTab2.length }, () => []);
    }
    funTab1.map((x, b) => {
        x((arg) => {
            tablica[b].push(arg)
            if (b+1 > funTab2.length){
                tablica[b].push(0)
            }
            if(tablica.every(x => x.length === 2)){
                console.log(tablica);
            }
        })
    })
    funTab2.map((x, b) => {
        x((arg) => {
            tablica[b].push(arg)
            if (b+1 > funTab1.length){
                tablica[b].push(0)
            }
            if(tablica.every(x => x.length === 2)){
                console.log(tablica);
            }

        })
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

const tablica1 = [func1, func2]

const tablica2 = [func1, func2, func3]

grupuj(tablica1, tablica2, () => console.log())