const fs = require('fs');
const encoding = 'utf-8';

const k1 = (k,m) => k%m
const k2 = (k,m) => 1+(k%(m-2))

fs.readFile('nazwiska.txt', { encoding }, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const lines = data.split('\n');
  const l = lines.map((line) => line.replace('\n', '').replace("\r", ""));
  const elo = l.map(x => x.split(" "))
  console.log(elo);
  const wstawOL = (tablica, nazwisko) => {
    let i = 0 

    while (i<tablica.length){
        if (tablica[(k1(nazwisko[0], tablica.length)+i)%tablica.length] !== "BLANK"){
            i++   
        } else{
            tablica[(k1(nazwisko[0], tablica.length)+i)%tablica.length] = ([[nazwisko[1]], i])
            return tablica 
        } 
    }
}

const wstawOK = (tablica, nazwisko) => {
    let i = 0 

    while (i<tablica.length){
        if (tablica[(k1(nazwisko[0], tablica.length)+(i*i))%tablica.length] !== "BLANK"){
            i++   
        } else{
            tablica[(k1(nazwisko[0], tablica.length)+(i*i))%tablica.length] = ([[nazwisko[1]], i])
            return tablica 
        } 
    }
}
const wstawOD = (tablica, nazwisko) => {
    let i = 0 

    while (i<tablica.length){
        if (tablica[(k1(nazwisko[0], tablica.length)+(i*k2(nazwisko[0], tablica.length)))%tablica.length] !== "BLANK"){
            i++   
        } else{
            tablica[(k1(nazwisko[0], tablica.length)+(i*k2(nazwisko[0], tablica.length)))%tablica.length] = ([[nazwisko[1]], i])
            return tablica 
        } 
    }
}
    const wielkosctablic = 20000
    const wynikOL = Array(wielkosctablic).fill("BLANK");
    const wynikOK = Array(wielkosctablic).fill("BLANK");
    const wynikOD = Array(wielkosctablic).fill("BLANK");
    
    elo.map((x, b) => {
       if (b<wielkosctablic*0.5){
       wstawOL(wynikOL,x)
       return x}
    })

    elo.map((x, b) => {
        if (b<wielkosctablic*0.5){
        wstawOK(wynikOK,x)
        return x}
     })
     elo.map((x, b) => {
        if (b<wielkosctablic*0.5){
        wstawOD(wynikOD,x)
        return x}
     })


    console.log(`srednia 50%`);
    const mianownik = wynikOL.length*0.5;
    
    console.log("W + OL");
    console.log(wynikOL.filter(x => x!=="BLANK").reduce(((acc, curr) => acc + curr[1]/mianownik),0));
    console.log("W + OK");
    console.log(wynikOK.filter(x => x!=="BLANK").reduce(((acc, curr) => acc + curr[1]/mianownik),0));
    console.log("W + OD");
    console.log(wynikOD.filter(x => x!=="BLANK").reduce(((acc, curr) => acc + curr[1]/mianownik),0));
    ////////////////////
    console.log("");
    const wynik2OL = Array(wielkosctablic).fill("BLANK");
    const wynik2OK = Array(wielkosctablic).fill("BLANK");
    const wynik2OD = Array(wielkosctablic).fill("BLANK");
    
    elo.map((x, b) => {
       if (b<wielkosctablic*0.7){
       wstawOL(wynik2OL,x)
       return x}
    })

    elo.map((x, b) => {
        if (b<wielkosctablic*0.7){
        wstawOK(wynik2OK,x)
        return x}
     })
     elo.map((x, b) => {
        if (b<wielkosctablic*0.7){
        wstawOD(wynik2OD,x)
        return x}
     })


    console.log(`srednia 70%`);
    const mianownik2 = wynik2OL.length*0.7;
    console.log("W + OL");
    console.log(wynik2OL.filter(x => x!=="BLANK").reduce(((acc, curr) => acc + curr[1]/mianownik2),0));
    console.log("W + OK");
    console.log(wynik2OK.filter(x => x!=="BLANK").reduce(((acc, curr) => acc + curr[1]/mianownik2),0));
    console.log("W + OD");
    console.log(wynik2OD.filter(x => x!=="BLANK").reduce(((acc, curr) => acc + curr[1]/mianownik2),0));
    ///////////////////////////
    console.log("");
    const wynik3OL = Array(wielkosctablic).fill("BLANK");
    const wynik3OK = Array(wielkosctablic).fill("BLANK");
    const wynik3OD = Array(wielkosctablic).fill("BLANK");
    
    elo.map((x, b) => {
       if (b<elo.length*0.9){
       wstawOL(wynik3OL,x)
       return x}
    })

    elo.map((x, b) => {
        if (b<elo.length*0.9){
        wstawOK(wynik3OK,x)
        return x}
     })
     elo.map((x, b) => {
        if (b<elo.length*0.9){
        wstawOD(wynik3OD,x)
        return x}
     })


    console.log(`srednia 90%`);
    const mianownik3 = wynik2OL.length*0.9;
    console.log("W + OL");
    console.log(wynik3OL.filter(x => x!=="BLANK").reduce(((acc, curr) => acc + curr[1]/mianownik3),0));
    console.log("W + OK");
    console.log(wynik3OK.filter(x => x!=="BLANK").reduce(((acc, curr) => acc + curr[1]/mianownik3),0));
    console.log("W + OD");
    console.log(wynik3OD.filter(x => x!=="BLANK").reduce(((acc, curr) => acc + curr[1]/mianownik3),0));
});

