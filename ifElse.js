// let food = "ice cream"
// let hunger = "full"

// if (hunger == "full" && food =="ice cream"){
//     console.log ("Of course, who wouldn't")
// }

// else if(hunger == "hungry" && food == "ice cream"){
//     console.log("Yes please, I'm starving, could I also have a pizza")
// }

// else if (hunger == "hungry" && food == "sprouts"){
//     console.log("Actually, I can wait")
// }

// else {
//     console.log("No thanks, I'm stuffed")
// }

// let music = ""

// if (music == "classical"){
//     console.log("Oh, how relaxing")
// }

// else if (music == "disco"){
//     console.log("Where are my dancing shoes?")
// }

// else if (music == "dance"){
//     console.log("Where's the party?!")
// }

// else {console.log("Turn it down!")}

// if (4 === "4"){
//     console.log(true)
// }
// else{
//     console.log(false)
// }

// let age = "17"
// let country = "UK"

// if (age < "21" && country == "USA"){
//     console.log("Sorry, you're too young")
// }

// else if (age >= "18" || age >= "21" && country == "USA"){
//     console.log("Yes, we can serve you")
// }

// else {
//     console.log("Sorry, you're too young")
// }

// let pizzaTopping = "ham"

// switch(pizzaTopping){
//     case "mushrooms":
//     case "olives":
//     case "pepperoni":
//     case "peppers":
//         console.log(`${pizzaTopping} is important for my pizza`)
//         break
//     case "pineapple":
//     case "BBQ sauce":
//         console.log(`I don't mind having ${pizzaTopping} on my pizza`)
//         break
//     default:
//         console.log(`${pizzaTopping} should not be on my pizza`)
//     }

// let day = "Saturday"

// if (day == "Saturday" || day == "Sunday"){
//     console.log("Yay, it's the weekend")
// }
// else {
//     console.log("Oh no, work again")
// }

// let password = "Password"

// if(password.length < "8"){
//     console.log("Sorry, your password is too short")
// }
// else{
//     console.log(`Your password is ${password}`)
// }

// let num = "20202"
// let reverseNum = num.split("").reverse().join("")
// if (reverseNum == num){
//     console.log([true])
// }
// else {
//     console.log([false])
// }

// let num = "34"

// if (num % 3 == 0 && num % 5 == 0 ){
//     console.log("fizz buzz")
// }
// else if(num % 3 == 0){
//     console.log("fizz")
// }
// else if (num % 5 == 0){
//     console.log("buzz")
// }
// else {
//     console.log(`${num}`)
// }



// let time = 0829
// const placeOfWork = "The shop"
// const townOfHome = "Willaston"

// if (time >= 0830 && time <=1700){
//     console.log(`${placeOfWork}`)
// }
// else if(time >0800 && time <0830 || time >1700 && time <1730){
//     console.log("On the commute")
// }
// else {
//     console.log(`${townOfHome}`)
// }



// let string = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
// let vowels = ["a", "e", "i", "o", "u"]
// let array = (string.split(""))
// let count = 0;

// for (let i = 0; i < array.length; i++){
//     for (let x = 0; x < vowels.length; x++){
//         if (array[i] == vowels[x]){
//             count = i;
//         }
//     }
// }

// console.log(count)


let word = "target"
const wordArray = word.split("")

if(wordArray.shift() == wordArray.pop()){
    console.log(true)
}
else{
    console.log(false)
}



// let num1 = 4
// let num2 = 5

// if ((num1 + num2) % 2 == 0){
//     console.log(num1 + num2)
// }
// else{
//     console.log(num1 * num2)
// }



// let age = "17"
// let country = "UK"
// const ageTest = (age, country) => {
//     if (age >= 21) {
//         return true;
//     } else if (country == "UK" && age >= 18) {
//         return true;
//     } else {
//         return false;
//     }
// }

// if (ageTest(18, "UK")) {
//     console.log("We can serve you")
// } else {
//     console.log("We can't serve you")
// }
// if (ageTest(18, "UK")) {
//     console.log("We can serve you")
// } else {
//     console.log("We can't serve you")
// }
// if (ageTest(18, "UK")) {
//     console.log("We can serve you")
// } else {
//     console.log("We can't serve you")
// }