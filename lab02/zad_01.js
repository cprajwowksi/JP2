'use strict';
const numbers = [4, 3, 5, 1, 3, 2, 21, 1, 65, -43, 9];
let uniq=[]
let sprawdzenie=0
for (let element of numbers)
{
    sprawdzenie=0
    for (let i of uniq){    
        if (element===i){
            sprawdzenie += 1 
        }
    }
    if (sprawdzenie==0){
        uniq[uniq.length]=element
    }
}
console.log(uniq);