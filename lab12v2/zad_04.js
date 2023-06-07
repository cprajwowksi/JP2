let czasSukces;

const checkTime = (arg, maxTries) => {
    const czas = new Date().getTime()
    const teraz = new Date();
    const godzina = String(teraz.getHours()).padStart(2, '0');
    const minuta = String(teraz.getMinutes()).padStart(2, '0');
    const czas3 = `${godzina}:${minuta}`;
    console.log(`Aktualny ${czas3}`);
    let i = 0
    setInterval(() => {
        i++
        if (i>maxTries){
            console.log("Limit prób przekroczony");
            return checkTime(arg-(10), maxTries)
        }
        if (new Date().getTime()>=czas+(arg*1000)){
            console.log(new Date().getTime());
            console.log(czas+(arg*1000));
            czasSukces = new Date().getTime()
            const teraz = new Date();
            const godzina = String(teraz.getHours()).padStart(2, '0');
            const minuta = String(teraz.getMinutes()).padStart(2, '0');
            const czas2 = `${godzina}:${minuta}`;
            console.log(`Czas upłynął ${czas2}`);
            
        }
        console.log("Sprawdzam ponownie");
    }
        ,1000)
}
checkTime(10, 3)
console.log(czasSukces); // Wywołanie musi być zawarte poza funkcją checkTime

