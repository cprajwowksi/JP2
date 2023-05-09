const tab = [ 
    { id: 'abc', name: 'Ala' }, 
    { id: 'def', name: 'Tomek' }, 
    { id: 'ghi', name: 'Jan' } 
  ]
const wynik  = tab.reduce(((acc,persons) => ({...acc,[persons.id]:persons } )),[])
console.log(wynik);