function getCounter1(min,max){
    let i = min
    if (i<max){
    return function inc(){
            return i++
            
        }
    }
    else
    {
        return undefined
    }
}

const getCounter = getCounter1(5,7);
const wynik1=getCounter(5,7)
const wynik2=getCounter(5,7)
const wynik4=getCounter(5,7)
const wynik5=getCounter(5,7)
const wynik6=getCounter(5,7)

console.log(wynik6)

