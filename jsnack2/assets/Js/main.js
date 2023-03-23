
/* consegna
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, 
modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto 
a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array.
*/

/* strumenti: 

*/
let cars = [
    {
        "marca": "Fiat",
        "modello": "Punto",
        "alimentazione": "benzina"
    },
    {
        "marca": "Audi",
        "modello": "A8",
        "alimentazione": "benzina"
    },
    {
        "color": "Audi",
        "modello": "q-2",
        "alimentazione": "benzina"
    },
        {
        "marca": "Fiat",
        "modello": "Punto",
        "alimentazione": "metano"
    },
    {
        "marca": "Audi",
        "modello": "A8",
        "alimentazione": "metano"
    },
    {
        "color": "Audi",
        "modello": "q-2",
        "alimentazione": "metano"
    },
        {
        "marca": "Fiat",
        "modello": "Punto",
        "alimentazione": "elettrico"
    },
    {
        "marca": "Audi",
        "modello": "A8",
        "alimentazione": "elettrico"
    },
    {
        "color": "Audi",
        "modello": "q-2",
        "alimentazione": "elettrico"
    },
        {
        "marca": "Fiat",
        "modello": "Punto",
        "alimentazione": "gpl"
    },
    {
        "marca": "Audi",
        "modello": "A8",
        "alimentazione": "gpl"
    },
    {
        "color": "Audi",
        "modello": "q-2",
        "alimentazione": "gpl"
    },
        {
        "marca": "Fiat",
        "modello": "Punto",
        "alimentazione": "diesel"
    },
    {
        "marca": "Audi",
        "modello": "A8",
        "alimentazione": "diesel"
    },
    {
        "color": "Audi",
        "modello": "q-2",
        "alimentazione": "diesel"
    },


]
/* const autoBenza = cars.filter((cars) => {
  return cars["alimentazione"] === "benzina";
})
console.log(autoBenza);
const autoDiesel = cars.filter((cars) => {
  return cars["alimentazione"] === "diesel";
})
console.log(autoDiesel);
const altrAlimentazione = cars.filter((cars) => {
  return cars["alimentazione"] !== "diesel" && cars["alimentazione"] !== "benzina" ;
})
console.log(altrAlimentazione) */

//meno codice:
const autoBenza = cars.filter((cars) => cars ["alimentazione"] === "benzina")
console.log(autoBenza);

const autoDiesel = cars.filter((cars) => cars ["alimentazione"] === "diesel")
console.log(autoDiesel);
const altrAlimentazione = cars.filter((cars) => cars["alimentazione"] !== "diesel" && cars ["alimentazione"] !== "benzina")
console.log(altrAlimentazione)