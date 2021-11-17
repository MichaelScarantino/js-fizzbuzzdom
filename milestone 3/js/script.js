// Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, 
// per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.


let boxContainer = document.querySelector('.container');

// Print number for 1 to 100
for( let i = 1; i <= 100; i++) {

    // Variable Declaration
    let NumberFizzBuzz;

    // Comparison of multiples of 3 and 5
    if( i % 3 === 0 && i % 5 === 0) {
        NumberFizzBuzz = 'fizzbuzz';
        // Add class and style
        const newBoxNumber = `
        <div class="box ${NumberFizzBuzz}">${NumberFizzBuzz}</div>`;
        boxContainer.innerHTML += newBoxNumber;
    
    } else if( i % 5 === 0 ) {
        NumberFizzBuzz = 'buzz';
        // Add class and style
        const newBoxNumber = `
        <div class="box ${NumberFizzBuzz}">${NumberFizzBuzz}</div>`;
        boxContainer.innerHTML += newBoxNumber;

    } else if( i % 3 === 0 ) {
        NumberFizzBuzz = 'fizz';
        // Add class and style
        const newBoxNumber = `
        <div class="box ${NumberFizzBuzz}">${NumberFizzBuzz}</div>`;
        boxContainer.innerHTML += newBoxNumber;

    } else {
        // Add class
        const newBoxNumber = `
        <div class="box">${i}</div>`;
        boxContainer.innerHTML += newBoxNumber;
        
    }
    
    

    

}