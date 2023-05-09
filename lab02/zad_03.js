const testArray = [1, 2, null, [4, undefined, 11, 10], 6, [7, null, 0], null, 9]; 
let splaszczona = []
for (let element of testArray){
   if (typeof element === "object" && element !== null){
    for (let i in element){
        console.log(element[i])
        splaszczona[splaszczona.length]=element[i]
    }
   }
   else{
    splaszczona[splaszczona.length]=element
   }

}
console.log(splaszczona);
