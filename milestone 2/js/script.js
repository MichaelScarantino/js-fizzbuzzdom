// Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.

let boxContainer = document.querySelector('.container');

// Print number for 1 to 100
for( let i = 1; i <= 100; i++) {

    // Variable Declaration
    let NumberFizzBuzz;

    // Comparison of multiples of 3 and 5
    if( i % 3 === 0 && i % 5 === 0) {
        NumberFizzBuzz = 'FizzBuzz';

    } else if( i % 5 === 0 ) {
        NumberFizzBuzz = 'Buzz';

    } else if( i % 3 === 0 ) {
        NumberFizzBuzz = 'Fizz';

    } else {
        NumberFizzBuzz = i;
        
    }
    
    // Add class
    const newBoxNumber = `
        <div class="box">${NumberFizzBuzz}</div>`;
        boxContainer.innerHTML += newBoxNumber;
    

    

}