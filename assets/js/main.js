//stampare numeri da 1 100
//se multiplo di 3 stampare fizz, se multiplo di 5 buzz se entrambi fizzbuzz


const listaEl = document.getElementById('lista');

for( let i = 1; i <= 100; i++){
    console.log(i)
    
    
if (i%3==0 && i%5==0){
    const itemEl = document.createElement('li')
    itemEl.append("FizzBuzz")
    listaEl.append(itemEl) 

} else if (i%5==0){

     const itemEl = document.createElement('li')
    itemEl.append("Buzz")
    listaEl.append(itemEl) 

} else if (i%3==0){
    const itemEl = document.createElement('li')
    itemEl.append("Fizz")
    listaEl.append(itemEl) 
} else{
    const itemEl = document.createElement('li')
    itemEl.append(i)
    listaEl.append(itemEl) 
}



}