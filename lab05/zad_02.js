const tab = [ -5, 4, -2, 4, -5 ]
const wynik = tab.reduce((acc,n)=> n > 0 ? [...acc,n] : [...acc, n*n],[])
console.log(wynik);