const poKolei = (funTab, cb) => (n) => {
    return funTab[0](funTab, cb, n)
};

const func1 = (tab, cb, n) => {
    setTimeout(() => {
        if (tab.length >= 1){
            n = n*2 
            tab[0](tab.slice(1), cb, n)
        }
        else {
            cb(n)
        }
    }, 3000)
} 

const func3 = (tab, cb, n) => {
    setTimeout(() => {
        if (tab.length >= 1){
            tab[0](tab.slice(1), cb, n)
        }
        else {
            cb(n)
        }
    }, 1000)
} 

poKolei([func1, func3, func1, func1], (arg) => console.log(arg))(3)