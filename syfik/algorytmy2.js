const fs = require('fs');
const encoding = 'utf-8';

const k1 = (k, m) => k % m;
const k2 = (k, m) => 1 + (k % (m - 2));

fs.readFile('nazwiska.txt', { encoding }, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const lines = data.split('\n');
  const l = lines.map((line) => line.replace('\n', '').replace("\r", ""));
  const elo = l.map(x => x.split(" "));
  console.log(elo);

  const wstaw = (tablica, nazwisko) => {
    let i = 0;
    while (i <= tablica.length) {
      if (tablica[k1(nazwisko[0], tablica.length)] !== "BLANK") {
        i++;
      } else {
        tablica[k1(nazwisko[0], tablica.length)] = { [nazwisko[1]]: i };
        return k1(nazwisko[0], tablica.length); // Zwraca indeks wstawienia
      }
    }
  };


  const wynik = Array(2000).fill("BLANK");
const indeksWstawienia = wstaw(wynik, elo[0]);
const indeksWstawienia2 = wstaw(wynik, elo[0]);
console.log(wynik[indeksWstawienia2]);
});