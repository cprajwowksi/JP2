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


