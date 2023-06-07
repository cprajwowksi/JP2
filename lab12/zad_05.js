const funkcja = (func, x, y) => {
    const wywo = setInterval(() => func(), x*1000)
    setTimeout(() => clearTimeout(wywo), y*1000)
}

funkcja(() => console.log("Elo"),1, 5)