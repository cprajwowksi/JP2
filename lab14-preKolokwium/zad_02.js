const razemTab = (funTab, cb) => {
    let tabela = Array.from({length: funTab.length}, () => null)
    funTab.map((x,b) => {
        x((arg) => {
            tabela[b] = arg
            if(tabela.every(x => x !== null)){
                cb(tabela)
            }
        })
    })
};

const func1 = (cb) => {
    setTimeout(() => {
        cb(3)
    }, 3000)
} 

const func2 = (cb) => {
    setTimeout(() => {
        cb(4)
    }, 4000)
} 

const func3 = (cb) => {
    setTimeout(() => {
        cb(5)
    }, 1000)
} 

const tabelaFun = [func1,func2,func3]

razemTab(tabelaFun, (arg) => console.log(arg))