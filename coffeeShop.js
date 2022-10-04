coffeeShop = {
    branch: ["Chester", "Heswall", "Liverpool"],
    drinks: [["Americano", 2], ["Cappucino", 2], ["Latte", 2.5], ["Frappe", 3]],
    food: [["Panini", 2.5], ["Bagel", 2], ["Cookie", 1]],
    drinksOrdered (d){
        return this.drinks[d][0]
    },
    foodOrdered(f){
        return this.food[f][0]
    },
    totalCost(c){
        return this.drinks[c][1] + this.food[c][1]
    }
}

console.log(`Your order: ${coffeeShop.drinksOrdered([0])} ${coffeeShop.foodOrdered([0])}  Thanks for buying from the ${coffeeShop.branch[0]} shop today`)



// const coffeeShop = {
//     branch: "Costarbucks",
//     drinks: [["Tea", 2], ["Coffee", 3], ["Expensive water", 540.29]],
//     food: [["Cake", 2.99], ["Fruit", 1.25], ["Doughnut", 5]],
//     drinksOrdered (i) {
//         return `Welcome to ${this.branch}! Your order is: ${this.drinks[i][0]}. That will be £${this.drinks[i][1]} please!`
//     },
//     foodOrdered (j) {
//         return `Welcome to ${this.branch}! Your order is: ${this.food[j][0]}. That will be £${this.food[j][1]} please!`
//     }
// }
// console.log(coffeeShop.drinksOrdered(0))
// console.log(coffeeShop.foodOrdered(2))