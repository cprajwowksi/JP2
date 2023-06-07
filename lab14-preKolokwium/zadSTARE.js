const soonerThan = (funTab, maxtime) => {
    let tabela = []
    funTab.map(x => {
        x().then(value => tabela.push(value))
    })
    setTimeout(() => console.log(tabela), maxtime)  
}

const func1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(3), 3000)
    })
}

const func2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(5), 6000)
    })
}

const func4 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(6), 1000)
    })
}

const func3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(4), 4001)
    })
}

const funTab = [func1, func2, func3, func4]

soonerThan(funTab, 4000)