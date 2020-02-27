let arrayOfShips = [];

class Ship {
    constructor(name, health, damagetaken, id) {
        this.name = name;
        this.health = health;
        this.damagetaken = damagetaken;
        this.id = id;
    }

    loseHealth() {
        this.health = this.health - this.damagetaken
        if (this.health < 0) {
            this.health = 0
            // arrayOfShips.splice(this, 1)
            console.log(arrayOfShips)
        }
    }
}

class MotherShip extends Ship {
    constructor(name, health, damagetaken, id) {
        super(name, health, damagetaken, id);
    }

    destroyAllShips() {
        arrayOfShips.forEach(setHealthToZero)
    }
}

const setHealthToZero = (ship) => {
    ship.health = '0';
}

const generateNewShips = () => {
    document.getElementById('output').innerHTML = '';
    arrayOfShips = [];
    const motherShip = new MotherShip('Mothership', 100, 9, 'ms1'),
        defenceShip1 = new Ship('Defenceship 1', 80, 10, 'ds1'),
        defenceShip2 = new Ship('Defenceship 2', 80, 10, 'ds2'),
        defenceShip3 = new Ship('Defenceship 3', 80, 10, 'ds3'),
        defenceShip4 = new Ship('Defenceship 4', 80, 10, 'ds4'),
        defenceShip5 = new Ship('Defenceship 5', 80, 10, 'ds5'),
        attackShip1 = new Ship('Attackship 1', 45, 12, 'as1'),
        attackShip2 = new Ship('Attackship 2', 45, 12, 'as2'),
        attackShip3 = new Ship('Attackship 3', 45, 12, 'as3'),
        attackShip4 = new Ship('Attackship 4', 45, 12, 'as4'),
        attackShip5 = new Ship('Attackship 5', 45, 12, 'as5'),
        attackShip6 = new Ship('Attackship 6', 45, 12, 'as6'),
        attackShip7 = new Ship('Attackship 7', 45, 12, 'as7'),
        attackShip8 = new Ship('Attackship 8', 45, 12, 'as8');
    arrayOfShips.push(motherShip, defenceShip1, defenceShip2, defenceShip3, defenceShip4, defenceShip5, attackShip1, attackShip2, attackShip3, attackShip4, attackShip5, attackShip6, attackShip7, attackShip8);
    arrayOfShips.forEach(createShipHealthInHtml)
}

const createShipHealthInHtml = (ship) => {
    document.getElementById('output').innerHTML += `<p id='${ship.id}'> ${ship.name}<br>${ship.health}</p>`;
}

const chooseShipToFireAt = () => {
    let chosenShip = arrayOfShips[Math.floor(Math.random() * arrayOfShips.length)];
    fireAtShip(chosenShip);
}

const fireAtShip = (ship) => {
    ship.loseHealth();
    arrayOfShips.forEach(updateShipHealth)
}

const updateShipHealth = (ship) => {
    document.getElementById(ship.id).innerHTML = `${ship.name}<br>${ship.health}`
    if (arrayOfShips[0].health < 1) {
        arrayOfShips[0].destroyAllShips()
    }
}