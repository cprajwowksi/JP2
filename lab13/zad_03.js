

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
const grupuj = (funTab1, funTab2, cb) => {
    
    const tablica = [[],[]]
    // console.log(funTab1.map((x,b) => x(() => funTab2[b](() => tablica[b] = b))));
    funTab1.map((x,b) => x((y) => {
        tablica[b].push(y)
        if (tablica.every(x => x.length == 2)){
            cb(tablica);
        }
    }))
    funTab2.map((x,b) => x((y) => {
        tablica[b].push(y)
        if (tablica.every(x => x.length == 2)){
            cb(tablica);
        }
    }))
};

const funcTab1 = [func1, func2]

grupuj(funcTab1, funcTab1, (x) => console.log(x))