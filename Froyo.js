//user is prompted to enter flavors
function froyoOrder() {
let userInput = prompt("Enter the flavors you want sperated by commas", "Vanilla, Chocalate, Strawberry, etc");

const froyoArray = userInput.split(",").map(flavor => flavor.trim())


let order = {}

for (let i = 0; i < froyoArray.length; i++) {
   let flavors = froyoArray[i]
    if (order[flavors]) {
        order[flavors] +=1
    } else {
        order[flavors] = 1
        }
    }

}
console.log(froyoOrder())
