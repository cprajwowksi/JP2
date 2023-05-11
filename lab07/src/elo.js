const { series } = require("./series");

const miniseries = series.filter(x => x.seasons === 1)
        .sort((x, y) => x.startYear - y.startYear)
        .sort((x, y) => x.endYear - y.endYear)
        .sort((x) => x.endYear === null ? 1 : -1).map(x => ({name: x.name, type: x.type.reduce((acc, curr, index) => acc +(index > 0 ? " " : "") + curr, "")}));
console.log(miniseries);


const moje = [
        series.filter(x => x.seasons !== 1)
        .reduce((acc, curr) => curr.startYear < 2010 ? [...acc, curr] : [...acc], [])
            ,
        series.filter(x => x.seasons !== 1)
        .reduce((acc, curr) => (curr.startYear > 2010 && curr.startYear < 2020) ? [...acc, curr] : [...acc], [])
            ,
        series.filter(x => x.seasons !== 1)
        .reduce((acc, curr) => curr.startYear > 2020 ? [...acc, curr] : [...acc], [])
            ].map(x => x.sort((x, y) => x.endYear - y.endYear)
                .sort((x, y) => x.startYear - y.startYear)
                .sort((x) => x.endYear === null ? -1 : 1));
console.log(moje);


// function getCounter(min, max) {
//     let counter = min; // Zmienna lokalna przechowująca aktualną wartość licznika
//     return function() {
//       if (counter <= max) {
//         const currentValue = counter; // Zapisanie aktualnej wartości licznika
//         counter++; // Zwiększenie licznika o 1
//         return currentValue; // Zwrócenie poprzedniej wartości licznika
//       } else {
//         return undefined; // Zwrócenie undefined, jeśli osiągnięto wartość maksymalną
//       }
//     };
//   }

function getCounter(min, max){
    let counter = min;
    return function(){
        return counter <= max ? counter++ : undefined;
    }
}

const counter = getCounter(5, 7);

console.log(counter()); // Output: 5
console.log(counter()); // Output: 6
console.log(counter()); // Output: 7
console.log(counter()); // Output: undefined

const getCounter2= (function(min, max) {
    let counter = min;
    return function() {
      if (counter <= max) {
        const currentValue = counter;
        counter++;
        return currentValue;
      } else {
        return undefined;
      }
    };
  })(5, 7);

console.log(getCounter2(5, 7));
console.log(getCounter2(5, 7));
console.log(getCounter2(5, 7));
