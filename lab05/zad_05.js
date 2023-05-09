const wishlist = [   
    { name: 'Czajnik', netto: 100 },  
    { name: 'Lodówka', netto: 2730 },  
    { name: 'Mikrofalówka', netto: 940 },  
    { name: 'Mikser', netto: 120 },  
    { name: 'Piekarnik', netto: 3100 }, 
    { name: 'Zmywarka', netto: 2400 },
    { name: 'Toster', netto: 260 }
  ]
  const wynik5a = wishlist.reduce(((acc,element) =>acc + (element.netto)*1.23),0)
  console.log(wynik5a);

  const wynik5b = wishlist.reduce(((acc,element)=>[...acc,element.netto]),[])
  console.log(wynik5b)

  function funkcja5c(array,func){
      return array.reduce((acc, curr) => [...acc,func(curr)],[])
  }
  
  const newArray = funkcja5c(wishlist, (x) => x.name + ": " + x.netto);
  console.log(newArray);// wypisanie nowej tablicy

  function funkcja5d(array,func){
    return array.reduce((acc, curr) => func(curr) ? [...acc,curr] : [...acc], [])
  }
  const wynik5d = funkcja5d(wishlist,(x) => x.netto < 500)
  console.log(wynik5d);

  // function funkcja5e(array,func){
  //   return array.reduce((acc, curr, index) => {func(curr) ? acc=curr : acc=undefined }, [])
  // }

  function funkcja5e(array,func){
    return array.reduce((acc, curr, index) => {
      if (func(curr)==true){
        return curr
      } 
      else if (index==array.length-1 && acc==""){
          console.log(index)
          return undefined
        }
      else {
        return acc
      }
      
    }
      ,"")
  }
  const wynik5e = funkcja5e(wishlist,(x) => x.name === 'Mikser')
  console.log(wynik5e);