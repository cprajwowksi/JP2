function toArray(a,b){
    let tab = []
    if(typeof a === "object" && a !== null){
        for (let i of a)
        tab[tab.length]=i
    }
    else{
        tab[tab.length]=a
    }
    if(typeof b === "object" && b !== null){
        for (let i of b)
        tab[tab.length]=i
    }
    else{
        tab[tab.length]=b
    }
    return tab
}

console.log(toArray([1], null));