let arrayOfShips = [];

class Ship {
    constructor(name, health, width, height, damagetaken) {
        this.name = name;
        this.health = health;
        this.width = width;
        this.height = height;
        this.damagetaken = damagetaken;
    }

    loseHealth() {
        this.health - this.damagetaken
    }
}

class MotherShip extends Ship {
    constructor(name, health, width, height, damagetaken) {
        super((name, health, width, height, damagetaken));
    }

    destroyAllShips() {
        arrayOfShips.forEach
    }

}

const createNewGame = () => {
    arrayOfShips = []
    const motherShip = new MotherShip('Mothership', 100, 100, 100, 9);
    const defenceShip = new Ship('defenceship', 80, 80, 80, 10)
    const attackShip = new Ship('attackship', 45, 45, 45, 12)
    arrayOfShips.push(motherShip, defenceShip, attackShip)
    console.log(arrayOfShips)
    displayShips(motherShip)
}

const displayShips = (ships) => {}
const fireAtShip = () => {
    arrayOfShips[Math.floor(Math.random() * arrayOfShips.length)].loseHealth()

}