const { hogwardArray } = require("./potter");


// const resultArray = hogwardArray.reduce((acc, curr) => {
//     const itemType = curr.hogwartsStudent ? 'student' : curr.hogwartsStaff ? 'staff' : 'none';
//     if (curr.house === "") {
//         curr.house = "noHouse";
//     }
//     if (!acc[curr.house]) {
//         acc[curr.house] = [];
//     }
//     if (acc[curr.house]) {
//         acc[curr.house].push({name: curr.name, type: itemType});
//     } else {
//         acc[curr.house] = [{name: curr.name, type: itemType}];
//     }
//     return acc;

//   }, []);

//   console.dir(resultArray, { depth: null });


// const resultArray = hogwardArray.reduce((acc, curr) => {
//     const itemType = curr.hogwartsStudent ? 'student' : curr.hogwartsStaff ? 'staff' : 'none';
//     if (curr.house === "") {
//         curr.house = "noHouse";
//     }
//     if (acc[curr.house]) {
//         if (acc[curr.house][itemType]){
//             acc[curr.house][itemType].push(curr.name);
//         }else{
//             acc[curr.house][itemType] = [];
//             acc[curr.house][itemType].push(curr.name);
//         }
//     } else{
//         acc[curr.house] = {};
//         acc[curr.house][itemType] = [];
//         acc[curr.house][itemType].push(curr.name);
//     }
//     return acc;
//   }, []);

//   console.dir(resultArray, { depth: null });

const ships = require('./ships.js').shipsArray;

// const result = ships.reduce((acc, curr) => {
//     if (!curr.destroyed){
//     if (acc[curr.manufacturer]){
//         acc[curr.manufacturer].push({[curr.model]: {height: curr.height, maximumSpeed: curr.maximumSpeed}});
//     } else{
//         acc[curr.manufacturer] = [];
//         acc[curr.manufacturer].push({[curr.model]: {height: curr.height, maximumSpeed: curr.maximumSpeed}});
//     }
//     }
//     return acc;
// }
// , {});

// console.dir(result, { depth: null });

// const bezpowtorzen = ships.reduce((acc, curr) => typeof curr.crew === "object" ? [...acc, ...curr.crew] : [...acc, curr], []).reduce(((acc2, curr2) => 
//                         acc2.some(x => x===curr2) ? [...acc2] : [...acc2, curr2] ), []);

// const result = bezpowtorzen.reduce((acc, curr) => {
//         return acc+curr+"\n"+ships.reduce((acc4, curr4) => curr4.crew.some(x => x === curr) ? [...acc4, curr4.model+", "+"manufacturer: "+curr4.manufacturer] : [...acc4], [])
//         .reduce((acc5, curr5, index5) => acc5+(index5+1)+". "+ curr5 + "\n", "") +"\n";
//         // acc+curr+ships.reduce((acc3, curr3) => curr3.crew ==="object" ? curr3.some(x => x===curr) ? curr.model :  ,"")

// }, "");


// console.log(result);

const books = require('./books.js').booksArray;

const result = books.reduce((acc, curr) => {
    if (typeof curr.genre ==="object"){
        curr.genre.map(x => {
            if (acc[x]){
                acc[x].push({title: curr.title, author: curr.author});
            } else{
                acc[x] = [];
                acc[x].push({title: curr.title, author: curr.author});
            }
        });
    } else{
        if (acc[curr.genre]){
            acc[curr.genre].push({title: curr.title, author: curr.author});
        } else{
            acc[curr.genre] = [];
            acc[curr.genre].push({title: curr.title, author: curr.author});
        }
    }
    return acc;
}, {});

console.dir(result, { depth: null });