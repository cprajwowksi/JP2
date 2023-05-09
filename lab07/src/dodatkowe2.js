const { hogwardArray } = require("./potter");


const tablica = ['student', 'staff', 'none'];

const resultArray = hogwardArray.reduce((acc, curr) => {
    return acc.some(x => x === curr.house) ? [...acc] : [...acc, curr.house];
            }, []).reduce(((acc3, curr3) => [...acc3, {[curr3 === "" ? 'noHouse' : curr3]:
            hogwardArray.reduce((acc2, curr2) =>
                curr2.house === curr3 ? [...acc2, { name: curr2.name,
                    type: curr2.hogwartsStudent ? 'student' : curr2.hogwartsStaff ? 'staff' : 'none'}] : [...acc2], [])
                    }]), []).map(x => ({[Object.keys(x)]: Object.values(x)
                        .map(b => tablica.reduce(((acc10, curr10) => [...acc10, {[curr10]:
                            b.reduce(((acc9, curr9) => curr9.type === curr10 ? [...acc9, curr9] : [...acc9]), []) 
                            }]), [])
                            )}));

// const bezpowtorzen2 = tablica.reduce(((acc10, curr10) => [...acc10, {[curr10]: 
//     hogwardArray.reduce((acc2, curr2) =>
//         curr2.house === "Gryffindor" ?
//         [...acc2, { name: curr2.name, type: curr2.hogwartsStudent ? 'student' : curr2.hogwartsStaff ? 'staff' : 'none'}] : [...acc2], [])
//         .reduce(((acc9, curr9) => curr9.type === curr10 ? [...acc9, curr9] : [...acc9]), [])
// }]), []);


// const wyniczek = tablica.reduce(((acc10, curr10) => [...acc10, {[curr10]: hogwardArray.reduce((acc2, curr2) =>
//         [...acc2, { name: curr2.name, type: curr2.hogwartsStudent ? 'student' : curr2.hogwartsStaff ? 'staff' : 'none'}], [])
//          }]), [])



console.dir(resultArray, { depth: null });


// const wypisanie2 = _.mapKeys(_.mapValues(_.groupBy(hogwardArray.map(a => ({name: a.name, house: a.house, type: a.hogwartsStudent ? 'student' : a.hogwartsStaff ? 'staff' : 'none'}))
//             , x => x.house), x => _.mapValues(_.groupBy(x, x => x.type), x => x.map(x => x.name))), function(value, key) {
//                 return key === "" ? "noHouse" : key;
//               });
