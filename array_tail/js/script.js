// DICHIARO L'ARRAY VUOTO
let num_array = [];
console.log(num_array);

// CREO IL CICLO NEL QUALE VERRANO PESCATI NUMERI RANDOM FINO AD UN MASSIMO DI 10 VOLTE
for (let i = 1; i <= 10; i++) {
    num_array.push(Math.floor(Math.random() * 100 + 1));
    console.log(num_array);
}

// STAMPO SOLO GLI ULTIMI 5 ELEMENTI DELL'ARRAY
let new_num = num_array.slice(5,10)
console.log(new_num);