//stampare numeri da 1 100
//se multiplo di 3 stampare fizz, se multiplo di 5 buzz se entrambi fizzbuzz


const listaEl = document.getElementById('lista');

for( let i = 1; i <= 100; i++){
    
    
    
if (i%3==0 && i%5==0){
    const itemEl = document.createElement('li')
    itemEl.append("FizzBuzz")
    listaEl.append(itemEl) 
    console.log("FizzBuzz")
    itemEl.classList.add("fizzbuzz")
} else if (i%5==0){

     const itemEl = document.createElement('li')
    itemEl.append("Buzz")
    listaEl.append(itemEl) 
    console.log("Buzz")
    itemEl.classList.add("buzz")
} else if (i%3==0){
    const itemEl = document.createElement('li')
    itemEl.append("Fizz")
    listaEl.append(itemEl) 
    console.log("Fizz")
    itemEl.classList.add("fizz")
} else{
    const itemEl = document.createElement('li')
    itemEl.append(i)
    listaEl.append(itemEl)
    console.log(i)
}



}