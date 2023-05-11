const { hogwardArray } = require('./potter');

const resultArray = hogwardArray.reduce((acc, item) => {
    const item_type = item.hogwartsStudent ? "students" : (item.hogwartsStaff ? "staff" : "none");
    if (item.house === "") {
        item.house = "noHouse";
    }
    if (!acc[item.house]) {
        acc[item.house] = {};
    }
    if (acc[item.house][item_type]) {
        acc[item.house][item_type].push(item.name);
    } else {
        acc[item.house][item_type] = [item.name];
    }
    return acc;
}, {});

console.log(resultArray);