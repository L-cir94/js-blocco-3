
/* consegna
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.

Crea un nuovo array con la lista dei mammiferi.
*/

/* strumenti: 

*/
let animali = [
    {
        nome: 'leone',
        famiglia: 'felidi',
        classe: 'mammiferi'
    },
    {
        nome: 'cane',
        famiglia: 'canidi',
        classe: 'mammiferi'
    },
    {
        nome: 'gallina',
        famiglia: 'fasianidi',
        classe: 'uccelli'
    },
]

//Crea un nuovo array con la lista dei mammiferi.
const mammiferi = animali.filter((mammiferi) => mammiferi ["classe"] === "mammiferi")
console.log(mammiferi);