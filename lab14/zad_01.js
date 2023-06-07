const getRand = () => {
    return Math.floor(Math.random() * 1000);
  };
  
  const getNum = (cb) => {
    setTimeout(() => {
      cb(getRand());
    }, getRand() * 5);
  };

  const asyncSort = (dim) => {
    const takiFor = Array(dim).fill(null)
    let tabela = []
    takiFor.map(() => {
        getNum((value) => {
                tabela.push(value)
                if (tabela.length === dim){
                    console.log(tabela.sort((a,b) => a-b));
                }
            })
    })
  };

console.log(asyncSort(5));