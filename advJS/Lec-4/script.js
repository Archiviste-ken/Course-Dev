// js -> single threaded, synchronous, blocking
// ek kaam ek baar mein kar payengi, baari baari kaam hota hai
// synchronous approach
// asynchronous approach


// callback -> ek function jo turant nahi chalega ye chalega jab aapka koi kaam complete hoga


// setTimeout(function() {
//     console.log("hey");
    
// }, 2000);

// cb -> function mein pass krte ho


function abcd(fn){
    fn();
}

abcd(function(){
    console.log("hello");   
})