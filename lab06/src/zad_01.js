const arr = [ { x: 4, y: 2}, { x: 1, y: 8 }, { x: 4, y: 2 } ];

const wynik = (tab, zmienna) => (tab.reduce(((acc, curr) => acc+curr[zmienna]), 0)/tab.length);

console.log(wynik(arr, "x"));