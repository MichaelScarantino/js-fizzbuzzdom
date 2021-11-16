// Per i multipli di 3 stampi in console “Fizz” al posto del numero e per i multipli di 5 stampi in console Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi in console FizzBuzz.

// Print number for 1 to 100
for( let i = 1; i <= 100; i++) {

    // Variable Declaration
    let numberFizz = 'Fizz';
    let numberBuzz = 'Buzz';
    let NumberFizzBuzz = 'FizzBuzz';
    console.log(i);

    // Comparison of multiples of 3 and 5
    if( i % 3 === 0 && i % 5 === 0) {
        console.log(NumberFizzBuzz);
        
    } else if( i % 5 === 0 ) {
        console.log(numberBuzz);

    } else if( i % 3 === 0 ) {
        console.log(numberFizz);

    }
    
}