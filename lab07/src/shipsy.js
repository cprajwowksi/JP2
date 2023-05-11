class Tile {
    type = null;
    x = null;
    y = null;

    constructor(x, y, type){
        this.x = x;
        this.y = y;
        ['LAND', 'WATER','ICE'].some(x => x===type) ? this.type = type : console.log("BŁĄD");
    }

    getTileInfo(){
        console.log(`${this.x} ${this.y} ${this.type}`);
    }
  }

  class Grid {
    height = null; // liczba całkowita

    width = null; // liczba całkowita

    grid = null; // tablica dwuwymiarowa

    ships = null; // tablica jednowymiarowa

    generate(height, width){
        this.height = height;
        this.width = width;
        const tablica = Array(height).fill(Array(width).fill(0));
        this.grid = tablica.map((x, b) => x.map((a, c) => {
            const types = ["LAND", "WATER", "ICE"];
            const itemType = types[Math.floor(Math.random() * types.length)];
            return new Tile(c, b, itemType);
        }));
    }

    generatePredefined(height, width, predefinedTiles){
        this.height = height;
        this.width = width;
        const tablica = Array(height).fill(Array(width).fill(0));
        this.grid = tablica.map((x, b) => x.map((a, c) => {
            const types = ["LAND", "WATER", "ICE"];
            const itemType = types[Math.floor(Math.random() * types.length)];
            return predefinedTiles.some(x => x.x === b && x.y === c) ?
            predefinedTiles.find(x => x.x === b && x.y === c) : new Tile(c, b, itemType);
        }));
    }

    getTile(x, y){
        return x < this.height && y < this.width ? this.grid[x][y] : null;

    }
  }

  class Ship {
    direction = null; // string

    x = null; // liczba całkowita

    y = null; // liczba całkowita

    grid = null; // obiekt klasy Grid

    constructor(direction, x, y, grid){
        this.direction = direction;
        this.x = x;
        this.y = y;
        this.grid = grid;
        this.grid.ships === null ? this.grid.ships = [this] : this.grid.ships.push(this);
    }

    turn(strona){
        return strona === "P" ? (this.direction === 'N' ? this.direction = 'E' : this.direction === 'E' ? this.direction = 'S' : this.direction ===' S' ? this.direction = 'W' : this.direction = 'N')
        : (this.direction === 'N' ? this.direction = 'W' : this.direction === 'W' ? this.direction = 'S' : this.direction ===' S' ? this.direction = 'E' : 'N');
    }

    sail(){
        (this.direction === 'N' ? (this.grid.grid[this.x-1][this.y].type === 'WATER' ? this.x = this.x - 1 : console.log("Nie możemy!"))
        : this.direction === 'E' ? (this.grid.grid[this.x][this.y+1].type === 'WATER' ? this.y = this.y + 1 : console.log("Nie możemy!"))
        : this.direction ===' S' ? (this.grid.grid[this.x+1][this.y].type === 'WATER' ? this.x = this.x + 1 : console.log("Nie możemy!"))
        : (this.grid.grid[this.x][this.y-1].type === 'WATER' ? this.y = this.y - 1 : console.log("Nie możemy!")));
    }


    getShipInfo(){
        return `${this.direction} ${this.x} ${this.y}`;
    }
  }

class IceBreakerShip extends Ship{
    constructor(x, y, grid){
        super("N", x, y, grid);
    }

    turn(){
        this.direction === 'N' ? this.direction = "S" : this.direction === "S" ? this.direction = "N" : this.direction === "W" ? this.direction = "E" : this.direction = 'W';
    }

    sail(){
        this.direction === 'N'
    ? this.grid.grid[this.x - 1][this.y].type === 'WATER' || this.grid.grid[this.x - 1][this.y].type === 'ICE'
    ? this.x = this.x - 1
    : console.log("Nie możemy!")
    : this.direction === 'E'
    ? this.grid.grid[this.x][this.y + 1].type === 'WATER' || this.grid.grid[this.x][this.y + 1].type === 'ICE'
      ? this.y = this.y + 1
      : console.log("Nie możemy!")
    : this.direction === 'S'
    ? this.grid.grid[this.x + 1][this.y].type === 'WATER' || this.grid.grid[this.x + 1][this.y].type === 'ICE'
      ? this.x = this.x + 1
      : console.log("Nie możemy!")
    : this.grid.grid[this.x][this.y - 1].type === 'WATER' || this.grid.grid[this.x][this.y - 1].type === 'ICE'
    ? this.y = this.y - 1
    : console.log("Nie możemy!")
        super.turn();
    }

}

// Przykład użycia:
const grid = new Grid();
grid.generate(10, 10); // generuje planszę o wymiarach 10 x 10
grid.getTile(2, 2).getTileInfo()// 2,2 LAND
grid.generate(10, 10); // na nowo generuje planszę o wymiarach 10 x 5
// Przykład użycia:
const ship = new Ship("N", 5, 5 , grid);
ship.turn("P"); // Statek obrócony o 90 st. w prawo
ship.sail(); // Statek poruszył się o 1 kafelek na wschód
console.log(ship.getShipInfo());
ship.sail(); // Statek poruszył się o 1 kafelek na wschód
console.log(ship.getShipInfo());

// Przykład użycia:
const icebreaker = new IceBreakerShip(3, 5, grid);
icebreaker.sail();
console.log(icebreaker.getShipInfo());


