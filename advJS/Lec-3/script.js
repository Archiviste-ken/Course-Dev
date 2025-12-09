// More topics in OOPS - [class expression , hoisting , inheritance , getter and setter]

// let Animal = class{
//     Constructor(){
//         this.name = "dodo"
//         this.type = "dog"
//     }
// };

// let an1 = new Animal();  // hoisting not work here // i cant create object before class expression


// class Animal {
//     Constructor(){
//         this.hands = 2;
//         this.legs = 2;
//         this.breed = "dog";
//     }
//     eat(){}
//     breathe(){}
// }

// class kekda extends Animal{
//     Constructor(){
//       supeer();
//         this.legs = 8;
//         this.hands = 0;
//     }
//     crawl(){}
// }

// let k1 = new kekda();

//inheritance

// agr koi class hai jismein kuch likha hai and aap maante ho ek nayi class usi ki extension hai to aap vo saare features puraani class borrow kar skte ho and nayi class mein use kr skte ho and apne naye feratures bhi bana skte ho
// iss process ko inheritance bolte hain

// class Animal {
//     constructor(){
//         this._age = 12;
//     }
//     set age(val){
//         if(val<0){
//             throw new Error("age cannot be negative")
//             return;
//         }
//         this._age = val;
//         // return this._age;

//     }
//     get age(){

//         return this._age;
//     }
// }

// let a1 = new Animal();
// console.log(a1.age);


// let user1 = {
//     name: "harsh",
//     email: "adkmjndw",
//     login(){
//         console.log("user logged in");
//     },
// };

// let user2 = {
//     name: "harsh",
//     email: "adkmjndw",
//     login(){
//         console.log("user logged in");
//     },
// };

// let user3 = {
//     name: "harsh",
//     email: "adkmjndw",
//     login(){
//         console.log("user logged in");
//     },
// };

// let user4 = {
//     name: "harsh",
//     email: "adkmjndw",
//     login(){
//         console.log("user logged in");
//     },
// };

// let user5 = {
//     name: "harsh",
//     email: "adkmjndw",
//     login(){
//         console.log("user logged in");
//     },
// };


// class User{
//     constructor(name,email){

// this.name = name;
// this.email = email;
//     }
// loggedIn(){
//     console.log("Loggedin");
    
// }
// }

// let user1 = new User("harsh","adkmjndw");
// let user2 = new User("harsh","adkmjndw");
// let user3 = new User("harsh","adkmj ndw");
// let user4 = new User("harsh","adkmjndw");
// let user5 = new User("harsh","adkmjndw");

// let product = {
//     name: "cap",
//     price: 3300,
//     discountedPrice: function(){
//         return this.price - 200;

//     },
// };

// console.log(product.discountedPrice());


// class Car{
//     constructor(brand, speed){
//         this.brand = brand;
//         this.speed = speed;

//     }

//     drive(){
//         console.log(this.brand + " - " + this.speed);   
//     }
// }


// let car1 = new Car("Hyundai", 200);
// let car2 = new Car("BMW", 300);
// let car3 = new Car("Audi", 250);


// let obj = {
//     sayName: function(){
//         console.log(this);
//     },
//     sayArrowName: () => {
//         console.log(this);
//     }
// };

// obj.sayName();
// obj.sayArrowName();


//bina class ke bhi constructor bnta hai
//es6 se pahle constructor function aaise bnta tha


// function Animal(val){
//     this.name = val;
// }

// Animal.prototype.loggedin = function(){
//     console.log("user logged in");
// };

// let an1 = new Animal("harsh");
// let an2 = new Animal("mohit");


// function abcd(){
//     console.log(this.name);
// }

// let obj = {
//     name: "harsh",
// }

// abcd.call(obj);

// function abcd(a,b,c,d){
//     console.log(this.name);
// }

// let obj = {
//     name: "harsh",
// };

// abcd.apply(obj, [1,2,3,4]);


function abcd(a, b, c, d){
    console.log(this.name);
}

let obj = {
    name: "harsh",
};

let boundFunc = abcd.bind(obj);

boundFunc(1, 2, 3, 4);

