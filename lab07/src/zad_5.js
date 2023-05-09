const { booksArray } = require("./books");
const { shipsArray } = require("./ships");
const { shoppingList } = require("./shoppingList (1)");


const bezpowtorzen = shoppingList.reduce(((acc, curr) =>
                                  acc.find(x => x===curr.typ) ? [...acc] : [...acc, curr.typ]), []);
const wynik = bezpowtorzen.reduce(((acc4, curr4) => acc4 +curr4 + "\n" +
                                        shoppingList.reduce(((acc2, curr2) =>
                                        curr2.typ === curr4 ? [...acc2, curr2.produkt] : [...acc2]
                                ), []).reduce(((acc3, curr3, index3) => acc3 + (index3+1)+". " + curr3 +"\n"), "")
), "");


const niezniszczone = shipsArray.filter(x => x.destroyed===false);

const bezpowtorzen2 = shipsArray.reduce(((acc, curr) =>
                                    acc.find(x => x===curr.manufacturer) ? [...acc] : [...acc, curr.manufacturer]), []);

const wynik2 = bezpowtorzen2.reduce(((acc5, curr5) => [...acc5, {[curr5]: niezniszczone.reduce(((acc3, curr3) =>
    curr3.manufacturer === curr5 ?
     [...acc3, {[curr3.model]: {height: curr3.height, maximumSpeed: curr3.maximumSpeed} }] : [...acc3]),[])}]),[])



const bezpowtorzen3 = booksArray.reduce(((acc, curr) =>
                                    typeof curr.genre ==="object" ? [...acc, ...curr.genre] : [...acc, curr.genre]), [])
                                    .reduce(((acc2, curr2) => acc2.find(x => x===curr2) ? [...acc2] : [...acc2, curr2]), []);

const wypisane = booksArray.reduce(((acc3, curr3) => typeof curr3.genre === "object" ?
                                (curr3.genre.some(x => x ==="fiction") ? [...acc3, {title: curr3.title, author: curr3.author}] : [...acc3])
                                 : (curr3.genre === "fiction" ? [...acc3, {title: curr3.title, author: curr3.author}] : [...acc3])
                                 ), []);

const result = bezpowtorzen3.reduce(((acc4, curr4) => [...acc4, {[curr4]: booksArray.reduce(((acc3, curr3) => typeof curr3.genre === "object" ?
                                        (curr3.genre.some(x => x===curr4)
                                        ? [...acc3, {title: curr3.title, author: curr3.author}] : [...acc3])
                                        : (curr3.genre === curr4 ? [...acc3, {title: curr3.title, author: curr3.author}] : [...acc3])
                                        ), [])
                                        }]), []);

console.dir(result, { depth: null });

