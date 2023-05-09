'use strict'
let b = [3,2,1,4,5,6,7,8,9,10,11,12,13,14];
const c=b.length
let min=b[0]
let max=b[0]
for(let i=0;i<c;i++)
{
    console.log(b[i]);
    if (min>b[i]){
        min=b[i];
    }
    if (max<b[i]){
        max=b[i];
    }
}
console.log(max);
console.log(min);
for(let i=0;i<(c/2);i++){
    let temp=b[i]
    b[i]=b[(c-1)-i]
    b[c-i-1]=temp
}
console.log(b)