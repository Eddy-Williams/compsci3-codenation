// let day = "Monday"

// const person = {
//     firstName: "Sally",
//     lastName: "Evans",
//     age: 27,
//     occupation: "Sales assistant",
//     married: false,
//     homeOwner: false,
//     hobbies: ["tennis", "gardening", "bungee jumping"],
//     marketingOp ( ) {
//         if (this.homeOwner == false && this.age > 25){
//             return "Send mortgage offer email."
//         }
//         else if (this.homeOwner == false && this.age < 25){
//             return "Send summer holiday fun credit card offer."
//         }
//         else if (this.homeOwner == true && this.age > 25){
//             return "Pension investment offer."
//         }
//         else {
//             return "Send sensible savings offer."
//         }
//     }
// }
// person.lastName = "McCarthy"
// console.log(person.marketingOp())
//if(day === "Saturday" || day === "Sunday")

//console.log(`person["hobbies"]`)



// const pet = {
//     petName: "Angus",
//     typeOfPet: "Cat",
//     age: 3,
//     colour: "Ginger",
//     petFeatures: ["cute AF", "cuddly", "cheeky"],
//     foodType: ["kibble", "wet food" , "treats"],
//     drinkType: ["water", "cat milk"],
//     hunger: true,
//     thirst: true,
//     eatanddrink (){
//       if (this.hunger == true && this.thirst == true){
//         return(`${this.foodType[1]} and ${this.drinkType[0]}`)
//       }
//       else if (this.hunger == true && this.thirst == false){
//         return(`${this.foodType[0]} and ${this.drinkType[0]}`)
//       }
//       else {
//         return(`${this.foodType[2]} and ${this.drinkType[1]}`)
//       }
//     }
// }
// console.log(pet.eatanddrink())

// pet.colour = "still ginge"
// console.log(`My ${pet.typeOfPet}, is called ${pet.petName}, he is ${pet.age} and ${pet.colour}. He is also ${pet.petFeatures}`)



class CoffeeShop {
    constructor (drinks, food, cost){
        this.drinks = drinks;
        this.food = food;
    }
    drinksOrdered(drinks){
        this.drinks = drinks;
        return (`You have ordered a ${this.drinks} `)
    }
    foodOrdered(food){
        this.food = food;
        return (`and ${this.food} `)
    }
    totalCost(){
        this.cost = cost;
        return (`your total is £${(this.drinks[[0]] + this.food[[0]])}`)
    }
}

const drinksType = new CoffeeShop (["Americano", "Latte", "Cappucino", "Frappe"])
const foodType = new CoffeeShop (["Panini", "Bagel", "Cookie"])

console.log(drinksType.drinksOrdered([0]))