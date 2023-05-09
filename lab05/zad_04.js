const tab = [ 1, 3, 6, 2, 9 ]
const wynik = tab.reduce(((acc,n,index) => [...acc,index+': '+n]),[])
console.log(wynik);