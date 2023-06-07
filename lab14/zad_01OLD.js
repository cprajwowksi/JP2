const getRand = () => {
    return Math.floor(Math.random() * 1000);
  };
  
  const getNum = (cb) => {
    setTimeout(() => {
      cb(getRand());
    }, getRand() * 5);
  };

  const asyncSort = (dim) => {
    const wynik = Array(dim).fill(null)
    wynik.map((x, b) => getNum((value) => {
        wynik[b] = value
        if (wynik.every(x => typeof x === "number")){
            console.log(wynik.sort((a, b) => a - b));
        }
    }))
  };

  asyncSort(5)