let container = document.getElementById("container"); // definisco la variabile container associandola al corrispettivo elemento HTML

for (let i = 1; i <= 100; i++) { // genera numeri da 1 a 100, partendo da 1 e includendo 100
  
  if((i%3 == 0) && (i%5 == 0)){ // stampa FizzBuzz se multiplo di 3 e 5
    console.log ("FizzBuzz");
    container.innerHTML += '<div class="box fizzbuzz">FizzBuzz</div>';
  } else if((i%3 == 0)) { // stampa Fizz se multiplo di 3
    console.log ("Fizz");
    container.innerHTML += '<div class="box fizz">Fizz</div>';
  } else if ((i%5 == 0)) { // stampa Buzz se multiplo di 5
    console.log ("Buzz");
    container.innerHTML += '<div class="box buzz">Buzz</div>';
  } else {
    console.log (i); // scrive i numeri generati in console
    container.innerHTML += '<div class="box">' + i + '</div>';
}

}