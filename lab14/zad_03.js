const poKolei = (funTab, cb) => (n) => {
    return funTab[0](n, funTab.slice(1), cb)

};

// const func1 = (n, tabFunc2) => {
//     setTimeout(() => {
//         cb(n*3)
//     }, 2500)
// }

const func2 = (n, tabFunc3, cb) => {
    setTimeout(() => {
        if (tabFunc3.length === 0){
            cb(n*2)
        } else {
            console.log("ale oro robie ", n);
            tabFunc3[0](n*2, tabFunc3.slice(1), cb)
        }
    }, 1500)
}

const func3 = (n, tabFunc3, cb) => {
    setTimeout(() => {
        if (tabFunc3.length === 0){
            cb(n*2)
        } else {
            console.log("ale oro robie 2", n);
            tabFunc3[0](n*2, tabFunc3.slice(1), cb)
        }
    }, 2500)
}

const funcTab = [func2, func2,func3, func2]

poKolei(funcTab, (elo) => console.log(elo))(5)
