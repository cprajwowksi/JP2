let czasSukces;

const checkTime = (arg, maxTries) => {
    const czas = new Date().getTime()+(arg*1000);
    let i = 1;
    const x = setInterval(() => {
        let czas2 = new Date().getTime()
        if ( czas2 > czas){
            console.log("Czas Upłynął");
            clearInterval(x)
            czasSukces = `${new Date().getHours()}:${new Date().getMinutes()}`
            console.log(czasSukces);
        } 
        else if (i>maxTries){
            console.log("Limit prób przekroczony");
            clearInterval(x)
            checkTime(arg-1, maxTries)
        } else {
            console.log("Sprawdzam ponownie");
            i = i + 1
        }
    }, 1000)
}
checkTime(5, 2)
console.log(czasSukces); // Wywołanie musi być zawarte poza funkcją checkTime

