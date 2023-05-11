class Vector2{
    constructor(x, y){
        this.x = x;
        this.y =y;
    }
    diff(vector){
        if (vector !== undefined && this !== undefined){
        this.x = this.x - vector.x
        this.y = this.y - vector.y
        } else{
            console.log("NIE DA SIE!!");
        }
    }
    multiplyBy(number){
        this.x = this.x*number;
        this.y = this.y*number;
    }
    toString(){
        return `x: ${this.x}, y: ${this.y}`
    }

}

//TYP VECTOR2 W POSTION
class Ships{
    constructor(faction, position,strength, health){
        this.faction = faction;
        this.position = position;
        this.strength = strength;
        this.health = health;
    }
    getDistance(enemyShip){
        this.position.diff(enemyShip.position) 
    }
    checkHealth(){
        this.health < 0 ? console.log("Został zniszczony") : undefined
    }
    getDamage(amount){
        this.health = this.health - amount;
        this.checkHealth()
    }
    makeDamage(enemyShip){
        enemyShip.getDamage(this.strength)
    }
}

class RebelShip extends Ships{
    constructor(position, strength, health){
        super('Rebel Alliance', position, strength, health);
    }
    hyperspeed(){
        this.position = undefined
    }
}

class DeathStar extends Ships{
    constructor(position){
        super('Empire', position)
        this.deathRayAvailable = true;
    }
}


const vector1 = new Vector2(10, 10);
const vector2 = new Vector2(5, 10);

console.log(vector1.toString()); // x: 10 y: 10

vector1.diff(vector2);
console.log(vector1.toString()); // x: 5 y: 0

vector1.multiplyBy(2);
console.log(vector1.toString()); // x: 10 y: 0