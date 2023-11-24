// ARRAY CON LA FRUTTA
let fruits = ["banana", "mela", "pera", "ciliegia", "arancia", "mandarino", "cocomero", "limone", "fragola"];
console.log(fruits);

// PUSH PER AGGIUNGERE LA PESCA
fruits.push("pesca");
console.log(fruits);

// DICHIARO LA VARIABILE FLAG PER VERIFICARE SE LA CONDIZIONE E' CORRETTA
let flag = false;

let fruit = "cocomero";

// CREO LA CONDIZIONE PER VERIFICARE SE E' PRESENTE IL COCOMERO
for (let i = 0; i < fruits.length; i++) {
    if (fruit == fruits[i]) {
        flag = true;
    }
}

// VERIFICO LA CONDIZIONE
if (flag) {
    console.log("Trovato! Devo solo preparare il cocktail.");
}
else {
    console.log("Oh no, devo uscire a comprare il cocomero!");
}