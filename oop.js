// class Pet {
//     constructor(name, age, type, breed, colour, time){
//         this.name = name;
//         this.age = age;
//         this.type = type;
//         this.breed = breed;
//         this.colour = colour;
//         this.lastFed = time;
//     }
//     feedPet (time) {
//         this.lastFed = time;
//         return `Last feed updated to: ${this.lastFed} for ${this.name}`;
//     }
// }

// class PetMeds extends Pet {
//     constructor(name, age, type, breed, colour, time, mtime) {
//         super(name, age, type, breed, colour, time);
//         this.lastMeds = mtime;
//     }
//     // "time" can be used again as it is seperate from the 1st "time"
//     giveMeds (time) {
//         this.lastMeds = time;
//         return `Last meds updated to ${this.lastMeds} for ${this.name}`;
//     }
// }

// const angus = new Pet("Angus", 3, "cat", "House cat", "ginge", "5 mins ago");
// const bella = new Pet("Bella", 2, "Dog", "GS", "B&T", "15:00")
// const barney = new PetMeds("Barney", 4, "Cat", "Dom-Short", "B&G", "10:00", "13:00");

// console.log(angus.feedPet(8))


//getters and setters
class Pet {
    constructor(firstname, surname, age, type, breed, colour, time) {
        this.firstname = firstname;
        this.surname = surname;
        this.age = age;
        this.type = type;
        this.breed = breed;
        this.colour = colour;
        this.lastFed = time;
    }
    get petInfo () {
        return `${this.firstname} is a ${this.type}, ${this.age} year(s) old`;
    }
    set fullName (name) {
        const array = name.split(' ');
        this.firstname = array[0];
        this.surname = array[1];
    }
    get fullName() {
        return `${this.firstname} ${this.surname}`
    }
    feedPet (time) {
        this.lastFed = time;
        return `Last feed updated to: ${this.lastFed} for ${this.firstname}`;
    }
}

const bella = new Pet("Bella", "", 2, "Dog", "GS", "B&T", "08:00");
console.log(bella);
Bella.fullName = "Bella Crompton"
console.log(bella);
console.log(bella.fullName)