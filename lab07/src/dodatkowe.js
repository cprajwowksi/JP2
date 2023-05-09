const { hogwardArray } = require("./potter");


const resultArray = hogwardArray.reduce((acc, curr) => {
    return acc.some(x => x === curr.house) ? [...acc] : [...acc, curr.house];
}, []).reduce(((acc3, curr3) => [...acc3, {[curr3 === "" ? 'noHouse' : curr3]:
    hogwardArray.filter(x => x.alive===true).reduce((acc2, curr2) =>
            curr2.house === curr3 ? [...acc2, { name: curr2.name,
                type: curr2.hogwartsStudent ? 'student' : curr2.hogwartsStaff ? 'staff' : 'none'}] : [...acc2], [])
}]), []);


console.dir(resultArray, { depth: null });
