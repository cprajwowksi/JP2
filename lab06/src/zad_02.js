const ships = require('./ships.js').shipsArray;

const wynik = ships.reduce(((acc, curr) => curr.destroyed ? [...acc] : [...acc, curr]), []); //wszystkie modele
const wynik2 = ships.reduce(((acc, curr) => ({...acc, [curr.manufacturer]:curr } )), []); //
const wynik3 = wynik.reduce(((acc, curr) => ([...acc, curr.manufacturer] )), []); // manufacturerzy dzialajacych statkow
const wynik5 = ships.reduce(((acc, curr) => {
    if (curr.model==='Millenium Falcon'){
        return [{...acc, height:curr.height, speed:curr.maximumSpeed }];
    } else{
        return [...acc];
    }
}
), []);

const wynik4 = wynik3.reduce(((acc, curr) => [...acc, curr, wynik.reduce(((acc2, curr2) => {
    if (curr2.manufacturer===curr){
        return [...acc2, {[curr2.model]:[...wynik]}];
    } else{
        return [...acc2];
    }
}), [])]), []);



// console.log(wynik2);
console.log(wynik4);


