class Tile {
    type = null;

    x = null;

    y = null;

    constructor(x, y, type){
        this.x = x;
        this.y = y;
        this.type = type;
    }

    getTileInfo(){
        console.log(`${this.x}, ${this.y}, ${this.type}`);
    }
  }

  class Grid {
    height = null; // liczba całkowita

    width = null; // liczba całkowita

    grid = null; // tablica dwuwymiarowa

    ships = null; // tablica jednowymiarowa

    generate(height, width){
        this.height=height;
        this.width=width;
        this.grid = Array(this.height).fill(Array(this.width).fill(0))
                                   .reduce((acc, curr, index) => {
                                    return [...acc, curr.reduce(((acc2, curr2, index2) => {
                                        const types = ["LAND", "WATER", "ICE", "FIRE"];
                                        const itemType = types[Math.floor(Math.random() * types.length)];
                                        return [...acc2, new Tile(index+1, index2+1, itemType)]
                                    }), [])];
                                   }, []);
        return this.grid;
    }

    generatePredefined(height, width, predefinedTiles = []){
        this.height=height;
        this.width=width;
        this.grid = Array(this.height).fill(Array(this.width).fill(0))
                                   .reduce((acc, curr, index) => {
                                    return [...acc, curr.reduce(((acc2, curr2, index2) => {
                                        const types = ["LAND", "WATER", "ICE", "FIRE"];
                                        const itemType = types[Math.floor(Math.random() * types.length)];
                                        return [...acc2,
                                            predefinedTiles.some(a => a.x === index+1 && a.y === index2+1) ?
                                            predefinedTiles.find(a => a.x === index+1 && a.y === index2+1) :
                                            new Tile(index+1, index2+1, itemType)
                                        ];
                                    }), [])];
                                   }, []);
        return this.grid;
    }

    getTile(x, y){
        const tabela = this.grid.reduce(((acc, curr) => [...acc,
            curr.reduce(((acc2, curr2) => (curr2.x === x && curr2.y === y) ? [...acc2, curr2] : [...acc2]), [])]), [])

        return tabela.some(a => a.length !==0) ? tabela.find(a => a.length !== 0)[0] : new Tile(null, null, null);

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
        if (this.grid.grid[x][y].type === "WATER"){
            return this.grid.grid[x][y] = this.Ship;
        } else {
            return this.grid.grid;
        }
    }
  }

const predefTiles = [
    new Tile(1, 2, "LAND"),
    new Tile(2, 2, "WATER"),
    new Tile(5, 5, "ICE")
  ];

const grid = new Grid();
const wynik = grid.generatePredefined(3, 3, predefTiles);

const ship = new Ship("N", 1, 1, grid);
console.log(ship);
console.log(ship.grid.grid);



