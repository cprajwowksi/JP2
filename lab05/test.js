const wishlist = [   
    { name: 'Czajnik', netto: 100 },  
    { name: 'Lodówka', netto: 2730 },  
    { name: 'Mikrofalówka', netto: 940 },  
    { name: 'Mikser', netto: 120 },  
    { name: 'Piekarnik', netto: 3100 }, 
    { name: 'Zmywarka', netto: 2400 },
    { name: 'Toster', netto: 260 }
  ]

function func1(array,func){
    return array.reduce(((acc,curr)=>[...acc,func(curr)]),[])
} 


function func2(array,func){
    return array.reduce(((acc,curr)=> func(curr) ? [...acc,curr] : [...acc]),[])
} 


const newArray = func1(wishlist, (x) => x.name + ": " + x.netto);
console.log(newArray);// wypisanie nowej tablicy

const newArray2 = func2(wishlist, (x) => x.netto < 500)
console.log(newArray2); // wypisanie tablicy obiektów

function func3(array,func){
    return array.reduce(((acc,curr)=> func(curr) ? [...acc,curr] : [...acc]),[])
} 
const result = func3(wishlist, (x) => x.name === 'Mikser' );  
console.log(result); // wypisanie obiektu