class Log {

    history = [];

    write(...args){
        console.log(args.toString().replace(",", ""));
        this.history[this.history.length] = (args.toString().replace(",", ""));
        console.log(this.history);
    }

    printHistory(range = [0, this.history.length]){
        if ((range[0] < range[1] && range[1]<this.history.length) && range[0]>0 && range[1]>0) {
        const copy = this.history;
        copy.forEach((a, index) => {if (index>=range[0]-1 && index < range[1] ) console.log(a)});
        }else{
            console.log("BŁĄD");
        }
    }

    clearHistory(){
        this.history = [];
    }

}
const elo = new Log

// elo.write("test: ", () => {
//     return "komunikat1";
//   });
//   elo.write("test: ", () => {
//     return "komunikat2";
//   });
//   elo.write("test: ", () => {
//     return "komunikat3";
//   });
//   elo.write("test: ", () => {
//     return "komunikat5";
//   });
//   elo.write("test: ", () => {
//     return "komunikat6";
//   });
//   elo.write("test: ", () => {
//     return "komunikat7";
//   });

// console.log("stop");
// elo.printHistory([1, 5]); // tylko komunikaty od 1 do 5 włącznie
// elo.clearHistory();
// elo.write("test: ", () => {
//     return "komunikat3";
//   });
//   elo.write("test: ", () => {
//     return "komunikat4";
//   });


class CoffeeShop{
    constructor(name, menu, orders=[]){
        this.name = name;
        this.menu = menu;
        this.orders = orders;
    }

    addOrder(zam){
        if (this.menu.find(a => a.item === zam)) {
            this.orders[this.orders.length] = zam;
            console.log("Orders Added");
        } else{
            console.log("This item is currently unavailable!");
        }
    }

    fulfillOrder(){
        if (this.orders.length !== 0){
            console.log(`The ${this.orders[0]} is ready!`);
            this.orders.shift();
        }else{
            console.log("All orders have been fulfilled!");
        }
    }

    listOrder(){
        console.log(this.orders);
    }

    dueAmount(){
        console.log(
            this.menu.reduce(((acc, curr) => this.orders.find(x => x === curr.item ) ? acc+curr.price : acc), 0)
        );
    }

    cheapestItem(){
        console.log(this.menu.reduce(((acc, curr) => acc < curr.price ? acc : curr.item), this.menu[0]));
    }

    drinkOnly(){
        return this.menu.reduce(((acc, curr) => curr.type === "drink" ? [...acc, curr.item] : [...acc]), [])
    }

    foodOnly(){
        return this.menu.reduce(((acc, curr) => curr.type === "food" ? [...acc, curr.item] : [...acc]), [])
    }
}

const obj = new CoffeeShop("sklep1",[
    { item: "cinnamon roll", type: "food", price: 4.99 },
    { item: "hot chocolate", type: "drink", price: 2.99 },
    { item: "lemon tea", type: "drink", price: 2.5 }
  ]
   );

obj.addOrder("espresso"); // "This item is currently unavailable!" (Sklep nie sprzedaje espresso)
obj.addOrder("hot chocolate"); // "Order added!"
obj.addOrder("cinnamon roll"); // "Order added!"
obj.listOrder(); // ["hot chocolate", "cinnamon roll"]

obj.dueAmount(); // 7.98 (suma cen za hot chocolate i cinnamon roll)

obj.fulfillOrder(); // "The hot chocolate is ready!"
obj.fulfillOrder(); // "The cinnamon roll is ready!"
obj.fulfillOrder(); // "All orders have been fullfilled

obj.listOrder(); // []
obj.dueAmount(); // 0.0
obj.cheapestItem(); // "lemon tea"
console.log(obj.drinkOnly()); // ["hot chocolate", "lemon tea"]
console.log(obj.foodOnly()); // ["cinnamon roll"]