const { hogwardArray } = require("./potter");

// const resultArray = hogwardArray.reduce((acc2, curr2) =>
// acc2.some(x => x===curr2.house) ? [...acc2] : [...acc2, curr2.house], []).reduce((acc4, curr4) =>
//             [...acc4, {[curr4]:
//                 hogwardArray.filter(x => x.alive).reduce(((acc3, curr3) =>
//                 curr3.house === curr4 ?
//                 [...acc3, {name: curr3.name, type: curr3.hogwartsStudent ? 'student' : curr3.hogwartsStaff ? 'staff' : 'none' }]
//                  : [...acc3]), [])
//             }]
//             ,[]);


// console.dir(resultArray, { depth: null });


const sklejanie = hogwardArray.reduce((acc, curr) =>
    acc.some(x => x===curr.house) ? [...acc] : [...acc, curr.house], []).reduce((acc4, curr4) => [...acc4, {[curr4]:
        ['student', 'staff', 'none'].reduce((acc5, curr5) => {
        return [...acc5, {[curr5]: hogwardArray.reduce((acc2, curr2) =>
            curr2.house === curr4 ? [...acc2,
                {name: curr2.name, type: curr2.hogwartsStudent ? 'student' : curr2.hogwartsStaff ? 'staff' : 'none'}
                ] : [...acc2], []).reduce((acc3, curr3) =>
                curr3.type === curr5 ? [...acc3, curr3.name] : [...acc3], [])}];
        }, [])
    }], []);

console.dir(sklejanie, { depth: null });

const multiply = (x, y) => (z) => x*y*z;

console.log(multiply(2, 3)(5));