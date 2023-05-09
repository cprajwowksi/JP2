const games = require('./games.js').games;


const tab = games.reduce(((acc, curr) => { 
    if(curr.imageUrl!==''&&acc.length<4)
    {
        return [...acc,curr.imageUrl]
    } 
    else {
        return [...acc]
    }
}),[])
console.log(tab);