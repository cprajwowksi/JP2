const getRand = () => {
    return Math.floor(Math.random() * 1000);
  };
  
  const getNum = (cb) => {
    setTimeout(() => {
      cb(getRand());
    }, getRand() * 5);
  };

  const asyncSort = (dim) => {
    let tablica = Array.from({length: dim}, () => null)
    tablica.map((x, b) => getNum((arg) => {
        tablica[b] = arg
        if(tablica.every(x => typeof x ==="number")){
            console.log(tablica);
        }
    }))

  };


  asyncSort(5)