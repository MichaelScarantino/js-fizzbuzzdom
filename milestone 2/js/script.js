// Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.

let boxContainer = document.querySelector('.container');

// Print number for 1 to 100
for( let i = 1; i <= 100; i++) {

    // Variable Declaration
    let NumberFizzBuzz;

    // Comparison of multiples of 3 and 5
    if( i % 3 === 0 && i % 5 === 0) {
        NumberFizzBuzz = 'FizzBuzz';
        console.log(NumberFizzBuzz);
        const newBoxNumber = `
        <div class="box">${NumberFizzBuzz}</div>`;
        boxContainer.innerHTML += newBoxNumber;

    } else if( i % 5 === 0 ) {
        NumberFizzBuzz = 'Buzz';
        console.log(NumberFizzBuzz);
        const newBoxNumber = `
        <div class="box">${NumberFizzBuzz}</div>`;
        boxContainer.innerHTML += newBoxNumber;

    } else if( i % 3 === 0 ) {
        NumberFizzBuzz = 'Fizz';
        console.log(NumberFizzBuzz);
        const newBoxNumber = `
        <div class="box">${NumberFizzBuzz}</div>`;
        boxContainer.innerHTML += newBoxNumber;

    } else {
        console.log(i);
        const newBoxNumber = `
        <div class="box">${i}</div>`;
        boxContainer.innerHTML += newBoxNumber;
        
    }
    
    

    

}