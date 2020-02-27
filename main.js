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
        this.health = this.health - this.damagetaken
    }
}

class MotherShip extends Ship {
    constructor(name, health, width, height, damagetaken) {
        super(name, health, width, height, damagetaken);
    }

    destroyAllShips() {
        arrayOfShips.forEach
    }

}

const generateNewShips = () => {
    arrayOfShips = []
    const motherShip = new MotherShip('Mothership', 100, 100, 100, 9);
    const defenceShip = new Ship('defenceship', 80, 80, 80, 10)
    const attackShip = new Ship('attackship', 45, 45, 45, 12)
    arrayOfShips.push(motherShip, defenceShip, attackShip)
    console.log(arrayOfShips)
    displayShips(arrayOfShips)
    updateShipHealth()

}

const displayShips = (arrayOfShips) => {
    document.getElementById('mothership').innerHTML = arrayOfShips[0].health
    document.getElementById('defenceship').innerHTML = arrayOfShips[1].health
    document.getElementById('attackship').innerHTML = arrayOfShips[2].health
}

const chooseShipToFireAt = () => {
    console.log(arrayOfShips[Math.floor(Math.random() * arrayOfShips.length)])
    let chosenShip = arrayOfShips[Math.floor(Math.random() * arrayOfShips.length)]
    fireAtShip(chosenShip)
}

const fireAtShip = (ship) => {
    ship.loseHealth()
    updateShipHealth()
}

const updateShipHealth = () => {
    document.getElementById('mothership').innerHTML = arrayOfShips[0].health
    document.getElementById('defenceship').innerHTML = arrayOfShips[1].health
    document.getElementById('attackship').innerHTML = arrayOfShips[2].health
}