const b = [1, 5, 6, 5, 5, 1, 5];
const c = b.length;
let lista=[]
let licznik=0;
let slowo = "";
let sprawdzenie = 1;
for(let i=0;i<c;i++){
    for(let j=0;j<c;j++){
        if (b[i]===b[j]){
            licznik=licznik+1;
        }
    }
    if (licznik===1){
        slowo="raz";
    }
    else
    {
        slowo="razy";
    }
    let d = lista.length;
    for(let s=0;s<d;s++){
        if (b[i]==lista[s]){
            sprawdzenie = 0;
        }
    }
    if (sprawdzenie===1){
    console.log(b[i],"wystepuje",licznik,slowo);
    }
    licznik=0;
    lista[i]=b[i];
    sprawdzenie=1
}