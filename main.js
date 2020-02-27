let arrayOfShips = [];
const motherShipContainer = document.getElementById('mothership'),
    defenceShipContainer1 = document.getElementById('defenceship1'),
    defenceShipContainer2 = document.getElementById('defenceship2'),
    defenceShipContainer3 = document.getElementById('defenceship3'),
    defenceShipContainer4 = document.getElementById('defenceship4'),
    defenceShipContainer5 = document.getElementById('defenceship5'),
    attackShipContainer1 = document.getElementById('attackship1'),
    attackShipContainer2 = document.getElementById('attackship2'),
    attackShipContainer3 = document.getElementById('attackship3'),
    attackShipContainer4 = document.getElementById('attackship4'),
    attackShipContainer5 = document.getElementById('attackship5'),
    attackShipContainer6 = document.getElementById('attackship6'),
    attackShipContainer7 = document.getElementById('attackship7'),
    attackShipContainer8 = document.getElementById('attackship8');

class Ship {
    constructor(name, health, damagetaken) {
        this.name = name;
        this.health = health;
        this.damagetaken = damagetaken;
    }

    loseHealth() {
        this.health = this.health - this.damagetaken
    }
}

class MotherShip extends Ship {
    constructor(name, health, damagetaken) {
        super(name, health, damagetaken);
    }

    destroyAllShips() {
        arrayOfShips.forEach(setHealthToZero)


    }

}

const setHealthToZero = (ship) => {
    ship.health = '0';
}

const generateNewShips = () => {
    arrayOfShips = [];
    const motherShip = new MotherShip('Mothership', 100, 9),
        defenceShip1 = new Ship('Defenceship 1', 80, 10),
        defenceShip2 = new Ship('Defenceship 2', 80, 10),
        defenceShip3 = new Ship('Defenceship 3', 80, 10),
        defenceShip4 = new Ship('Defenceship 4', 80, 10),
        defenceShip5 = new Ship('Defenceship 5', 80, 10),
        attackShip1 = new Ship('Attackship 1', 45, 12),
        attackShip2 = new Ship('Attackship 2', 45, 12),
        attackShip3 = new Ship('Attackship 3', 45, 12),
        attackShip4 = new Ship('Attackship 4', 45, 12),
        attackShip5 = new Ship('Attackship 5', 45, 12),
        attackShip6 = new Ship('Attackship 6', 45, 12),
        attackShip7 = new Ship('Attackship 7', 45, 12),
        attackShip8 = new Ship('Attackship 8', 45, 12);
    arrayOfShips.push(motherShip, defenceShip1, defenceShip2, defenceShip3, defenceShip4, defenceShip5, attackShip1, attackShip2, attackShip3, attackShip4, attackShip5, attackShip6, attackShip7, attackShip8)
    console.log(arrayOfShips)
    updateShipHealth()
}

const chooseShipToFireAt = () => {
    let chosenShip = arrayOfShips[Math.floor(Math.random() * arrayOfShips.length)]
    fireAtShip(chosenShip)
}

const fireAtShip = (ship) => {
    ship.loseHealth()
    // arrayOfShips.forEach(updateShipHealth)
    updateShipHealth()
}

const updateShipHealth = () => {
    motherShipContainer.innerHTML = arrayOfShips[0].name + ' <br> ' + arrayOfShips[0].health
    defenceShipContainer1.innerHTML = arrayOfShips[1].name + ' <br> ' + arrayOfShips[1].health
    defenceShipContainer2.innerHTML = arrayOfShips[2].name + ' <br> ' + arrayOfShips[2].health
    defenceShipContainer3.innerHTML = arrayOfShips[3].name + ' <br> ' + arrayOfShips[3].health
    defenceShipContainer4.innerHTML = arrayOfShips[4].name + ' <br> ' + arrayOfShips[4].health
    defenceShipContainer5.innerHTML = arrayOfShips[5].name + ' <br> ' + arrayOfShips[5].health
    attackShipContainer1.innerHTML = arrayOfShips[1].name + ' <br> ' + arrayOfShips[1].health
    attackShipContainer2.innerHTML = arrayOfShips[2].name + ' <br> ' + arrayOfShips[2].health
    attackShipContainer3.innerHTML = arrayOfShips[3].name + ' <br> ' + arrayOfShips[3].health
    attackShipContainer4.innerHTML = arrayOfShips[4].name + ' <br> ' + arrayOfShips[4].health
    attackShipContainer5.innerHTML = arrayOfShips[5].name + ' <br> ' + arrayOfShips[5].health
    attackShipContainer6.innerHTML = arrayOfShips[6].name + ' <br> ' + arrayOfShips[6].health
    attackShipContainer7.innerHTML = arrayOfShips[7].name + ' <br> ' + arrayOfShips[7].health
    attackShipContainer8.innerHTML = arrayOfShips[8].name + ' <br> ' + arrayOfShips[8].health
    if (arrayOfShips[0].health < 1) {
        motherShip.destroyAllShips()
    }
}