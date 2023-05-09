const ships = require('./ships.js').shipsArray;


const osoby = ships.reduce(((acc, curr) => [...acc, curr.crew]), []);
const osobySplaszczone = osoby.reduce(((acc, curr) => [...acc, ...curr])).sort();
const osobyBezPowtorzen = [...new Set(osobySplaszczone)];

const wynik2 = osobyBezPowtorzen.reduce(((acc, curr) => acc + curr+"\n"+ ships.reduce(((acc2, curr2, index) => {
    if (curr2.crew.some(x => x === curr)){
        return acc2+index+". "+curr2.model+', '+"manufacturer: "+curr2.manufacturer+"\n";
    }else{
        return acc2;
    }
}), "")+"\n\n"), "");
console.log(wynik2);

// const wynik2 = osobyBezPowtorzen.reduce(((acc, curr) => acc + curr+"\n"+ ships.reduce(((acc2, curr2) => {
//     if (curr2.crew.some(x => x === curr)){
//         return [...acc2, curr2.model];
//     }else{
//         return [...acc2];
//     }
// }), []).reduce(((acc3, curr3, index3) => acc3+"\n"+(index3+1)+". "+curr3 ), "")+"\n\n"), "");

// console.log(wynik2);