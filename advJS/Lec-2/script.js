// Understanding 'Constructor' and 'Prototype' - ['this keyword', 'call', 'apply', 'bind'] 

//call apply bind
// ek function mein this ki value window hoti hai, and if want ki vo value window na ho and vo koi dusra object ho ,to uske liye hum call apply bind use karte hain

let obj = {
    name: "Rohan",
}

function abcd(a,b,c) {
    console.log(this, a,b,c);
    
}
abcd.call(obj, [1, 2, 3]);

abcd.apply(obj, [1, 2, 3]);
function abcd(a,b,c) {
    console.log(this, a,b,c);
    
}

abcd.apply(obj, [1, 2, 3]); // this will point to obj

// apply mein hum array ke form mein arguments pass karte hain , above first value is this, second is array of arguments.


// bind dont call the function immediately, instead it returns a new function with the specified this value and arguments.


function abcd(a,b,c) {
    console.log(this, a,b,c);
    
}

let newfnc = abcd.bind(obj, [1, 2, 3]);


newfnc();

// call -> fnc chalata hai and
// this ki value set karta hai

// apply -> wahi karta hai jo
// call karta hai and arguments
// mein pahli value this ki and
// doosri value array hoti hai

// bind -> wahi karta hai jo
// call karta hai and aapko naya
// fnc deta hai







