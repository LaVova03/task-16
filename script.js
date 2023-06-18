function Human(name, gender) {
    this.name = name;
    this.gender = gender;
};

function Flat() {
    const inhabitants = [];

    this.getPeople = function () {
        return inhabitants;
    };

    this.addPerson = function (person) {
        inhabitants.push(person);
    };
};

function Building(name, flatQunatity) {
    this.name = name;
    const flats = [];

    this.getFlat = function () {
        return flats;
    };

    this.addFlat = function (flat) {
        if (flats.length <= (flatQunatity - 1)) {
            flats.push(flat);
        } else {
            console.log('The number of apartments has reached its maximum');
        };
    };
};


Flat.prototype = new Human();
Building.prototype = new Flat();


const person1 = new Human("Ivan", "Male");
const person2 = new Human("Denis", "Male");
const person3 = new Human("Alisa", "Female");

const myFlat1 = new Flat();
const myFlat2 = new Flat();
const myFlat3 = new Flat();

const myHouse1 = new Building('East', 3);

myFlat1.addPerson(person1);
myFlat2.addPerson(person2);
myFlat3.addPerson(person3);

myHouse1.addFlat(myFlat1);
myHouse1.addFlat(myFlat2);
myHouse1.addFlat(myFlat3);

console.log(myFlat1.getPeople());
console.log(myFlat2.getPeople());
console.log(myFlat3.getPeople());

console.log(myHouse1.getFlat());




