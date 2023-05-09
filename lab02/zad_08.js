const person1 = {
    name: 'Agata',
    age: '21'
}
const person2 = {
    name: 'Tomasz',
    age: '25'
}
const person3 = {
    name: 'Alicja',
    age: '31'
}
const person4 = {
    name: 'Jan',
    age: '20'
}
let sum=0
let wiek=0
const array = [person1,person2,person3,person4]
for (let element of array){
    wiek=element.age
    sum=sum+Number(wiek)
}
srednia=sum/4
console.log(sum);
console.log(srednia)
array1=[]
array2=[]
for(let elementy of array){
    wiek=elementy.age
    if (wiek>=srednia){
        array1[array1.length]=elementy
    }
    else{
        array2[array2.length]=elementy
    }
}
console.log(array1);
console.log(array2);


