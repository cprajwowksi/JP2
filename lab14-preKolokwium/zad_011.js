const myPromises = (promises) => promises.reduce((acc, promise) => {
    return acc.then(results => {
      return promise.then(value => {
        console.log(value);
        results.push(value);
        return results;
      });
    });
  }, Promise.resolve([]));
  
  const promise1 = Promise.resolve('1');
  const promise2 = Promise.resolve('2');
  const promise3 = Promise.resolve('3');
  
  const promises = [promise1, promise2, promise3];
  
  myPromises(promises)
    .then(results => {
      console.log(results); // Tablica z wynikami promisów
    })
    .catch(error => {
      console.error(error); // Obsługa błędu
    });
  