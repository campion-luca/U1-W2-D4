/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
console.log("============= ESERCIZIO 1 =============");

function area(B1, A1) {
    return B1 * A1 / 2;
}

console.log(area(3, 6));


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
console.log("============= ESERCIZIO 2 =============");

function crazySum(Val1, Val2) {

    let a = Math.ceil(Val1);
    let b = Math.ceil(Val2);

    if (a === b) {
        return (a + b) * 3;
    } else {
        return a + b;
    }
}

console.log(crazySum(5.9, 5));


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.*/

console.log("============= ESERCIZIO 3 =============");

function crazyDiff(Val3) {

    let a = Math.abs(Val3);
    console.log("differenza assoluta è" + "  " + (a - 19));

    if (a > 19) {
        return (a - 19) * 3
    } else {
        return a - 19;
    }
}

console.log(crazyDiff(27.5));


/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
console.log("============= ESERCIZIO 4 =============");

function boundary(Val4) {

    let a = Math.ceil(Val4);

    if (a > 20 && a <= 100 || a === 400) {
        return "true";
    } else {
        console.log(a);
    }
}

console.log(boundary(20.5));


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
console.log("============= ESERCIZIO 5 =============");

function epify(val5) {

    if (typeof val5 !== 'string') {
        return;
    }
    if (val5.indexOf('EPICODE') === 0) {
        console.log(val5);
    } else {
        console.log('EPICODE' + ' ' + val5);
    }
}

epify('EPICODE ciao');


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

console.log("============= ESERCIZIO 6 =============");

function check3and7(Val6) {

    if (Val6 % 3 === 0 || Val6 % 7 === 0) {
        return console.log(Val6);
    } else {
        return console.log("NON è divisibile");
    }
}
console.log(check3and7(105));


/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
console.log("============= ESERCIZIO 7 =============");

function reverseString(Val7) {

    let inverso = Val7.split(" ");
    inverso.reverse();
    inverso = inverso.join(" ");
    return inverso;
}

console.log(reverseString("hello world !"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
console.log("============= ESERCIZIO 8 =============")

function upperFirst(string) {
    let words = string.split(" ");
    let final = [];
    for (let i = 0; i < words.lenght; i++) {
        let first = words[i].charAt(0);
        first = first.toUpperCase();
        let cut = words[i].slice(1);
        let newWord = first + cut;
        final.push(newWord);
    }
    console.log(final.join(' ')); /* unisce e con uno spazio che dico io */
}

console.log(upperFirst("Ciao mi chiamo Luca"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
console.log("============= ESERCIZIO 9 =============");

function cutString(Val8) {

    Val8 = Val8.lenght;
    console.log(Val8);
}
console.log(cutString("ciao"));


/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
+ prova per non ammettere duplicati */
console.log("============= ESERCIZIO 10 =============");

function giveMeRandom() {

}