const _ = require('lodash');

function detectChanges(original, modified) {
    return _.reduce(modified, (acc, value, key) => _.isEqual(value, original[key]) ? acc : [...acc, [key, value]], []);
    // return _.reduce(modified, (acc, value, key) => [...acc, _.differenceWith(value, original[key], _.isEqual)], []);
  }
  const object1 = {
    id: 2,
    name: 'Przyjaciele',
    startYear: 1994,
    endYear: 2004,
    type: ["Komedia"],
    seasons: 10
  };
  const object2 = {
    id: 2,
    name: 'Przyjaciele edytowany',
    startYear: 1994,
    endYear: 2010,
    type: ["Komedia"],
    seasons: 10
  };

  const object3 = {
    value: { field: "old value" },
    name: 'test'
  }
  
  const object4 = {
    value: { field: "new value" },
    name: 'test'
  }
const wynik = detectChanges(object1, object2);
console.log(wynik);


const wynik5 = _.differenceWith([{id: 0,
                                k:4 }], [{id: 2, k: 4}], _.isEqual)

console.log(wynik5);


const objects = [{ 'x': 1, 'y': 2, 'c': 5}];
 
const wynik6 = _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
// => [{ 'x': 2, 'y': 1 }]
console.log(wynik6);


