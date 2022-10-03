const coffeeShop = {
    branch: ["Chester", "Heswall", "Liverpool"],
    drinks: ["Americano", "Cappucino", "Frappe"],
    food: ["Panini"[3.5], "Bagel"[2.5], "Cookie"[1]],
    drinksOrdered (drinks){
        this.drinks = drinks
        return `${this.drinks}`
    },
    foodOrdered(){
        return (m)
    },
    totalCost(){
        return (l)
    }
}

console.log(`Your order: ${coffeeShop.drinksOrdered()} Thanks for buying from the ${coffeeShop.branch[0]} shop today`)