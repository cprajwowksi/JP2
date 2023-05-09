const shoppingList = require('./shoppingList.js').shoppingList

const wynik1 = shoppingList.reduce(((acc,curr) => {
    if (curr.typ==="nabiał"){
        return acc+curr.cena
    }
    else{
       
        return acc
    }
}),0)
console.log(wynik1);

const wynik2 = shoppingList.reduce(((acc,curr) => {
    if (curr.jednostka==="kg"){
        return [...acc,curr.produkt]
    }
    else{
        return [...acc].sort()
    }
}),[])

console.log(wynik2);

const wynik3 = shoppingList.reduce(((acc,curr)=> {
    return acc+curr.typ+":\n"+(shoppingList.reduce(((acc,curr2)=>{
        if (curr2.typ==curr.typ){
            return [...acc,curr2]
        }
        else{
            return [...acc]
        }
    }),[])).reduce(((acc2,curr2,index)=>{
        return acc2+(index+1)+". "+curr2.produkt+"\n"
    }),"") +"\n"
 }),"")

 console.log(wynik3);