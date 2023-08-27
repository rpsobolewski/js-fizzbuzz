//stampare numeri da 1 100
//se multiplo di 3 stampare fizz, se multiplo di 5 buzz se entrambi fizzbuzz


const listaEl = document.getElementById('lista');

for( let i = 1; i <= 100; i++){
    console.log(i)
    
    



    const itemEl = document.createElement('li')
    itemEl.append(i)
    listaEl.append(itemEl)                               //---------opzione 2---------
}