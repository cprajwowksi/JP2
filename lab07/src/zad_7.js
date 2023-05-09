const _ = require('lodash');

const detectChanges = (original, modified) => {
    return Object.keys(original).reduce(((acc, curr) => [...acc,
        original[curr]===modified[curr] ? undefined : [curr, modified[curr]]]), [])
        .filter(x => x!==undefined);
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

const wynik = detectChanges(object1, object2)


const checkExchange = (arr) => {
    const kasa1 = [];
    const kasa2 = [];
    const kasa3 = [];
    const wynik = arr.reduce((acc, curr) => {
      if (curr === 5) {
        kasa1.push(curr);
      } else if (curr === 10) {
        if (kasa1.length > 0) {
          kasa1.pop();
          kasa2.push(curr);
        } else {
          return false;
        }
      } else if (curr === 20) {
        if (kasa1.length > 0 && kasa2.length > 0) {
          kasa1.pop();
          kasa2.pop();
          kasa3.push(curr);
        } else if (kasa1.length > 2) {
            kasa1.pop();
            kasa1.pop();
            kasa1.pop();
            kasa3.push(curr);
        } else{
            return false;
        }
      }
      return acc;
    }, 0);
    return wynik === false ? false : true;
  };

const wynik6 = checkExchange([5, 5, 5, 20])// => true
console.log(wynik6);


