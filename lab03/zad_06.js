function isAnyEven(array){
    function even(element){
        return element % 2 === 0 
    }
    const wynik=array.some(even)
    return wynik 
}
console.log(isAnyEven([1,1,3,1,5]));
