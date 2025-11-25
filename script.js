// DOM -> Document Object Model
// frontend ki JS
// like how we write js in frontend to interact with HTML elements

//DOM 4 pillars
//- selection of an elements
// -querySelector
// -getElementById
// -getSelectorAll
// changing HTML
    // - textContent
    // - innerHTML
// changing css
  // h1.style.color = 'red'
// event listeners

// you can call html a document, document means html file.

// var h1 = document.querySelector('h1')

// var kuch = document.querySelector('h2')

// console.log(h1);
// console.log(kuch);


// var h1 = document.querySelector('h1') // selection of an element

// h1.innerHTML = 'Change HTML' // changing HTML

// h1.style.color = 'pink' // changing CSS


// var box = document.querySelector('#box')

// box.innerHTML = 'hey hey'

// box.style.backgroundColor = 'gold'

// h1.addEventListener('click',function(){
//     console.log('hello');
    
// })

// var h1 = document.querySelector('h1')
// var btn = document.querySelector('button')

// btn.addEventListener('click',function(){
//     h1.innerHTML =  'I am Batman'
//     h1.style.color = 'red'
//     h1.style.fontSize = '50px'
    
// })
// var h1 = document.getElementById('hero')
// console.log(h1);

// id is unique and class can be same for multiple elements

// var h1 = document.getElementsByClassName('elem')
// console.log(h1);

// var h1 = document.querySelectorAll('h1')

// console.log(h1);


// var h1 = document.querySelector('h1')

// h1.innerHTML = 'Hello World'
// h1.style.color = 'blue'
// h1.style.textAlign = 'center'
// h1.style.fontSize = '40px'

// h1.textContent = 'Welcome to DOM Manipulation'  


// var inc = document.querySelector('#inc')
// var dec = document.querySelector('#dec')
// var h2 = document.querySelector('h2')

// var a = 0

// inc.addEventListener('click',function(){
//     a++
//     console.log(a);
//     h2.innerHTML = a
    
// })
// dec.addEventListener('click',function(){
//     a--
//     h2.innerHTML = a
    
// })



// DOM - document object model.

// 4 pillars of DOM
// 1. Selection of an element
// 2. Changing HTML
// 3. Changing CSS
// 4. Event Listeners


// var h1 = document.querySelector('h1')

// console.log(h1);

// h1.innerHTML = 'Hello World'
// h1.style.color = 'green'
// h1.style.textAlign = 'center'
// h1.style.fontSize = '50px'


// h1.style.color = "red"
// h1.style.backgroundColor = "aqua"

// h1.addEventListener('click',function(){
//     h1.style.color = "blue"
//     h1.style.backgroundColor = "yellow"
// })


// var a = Math.random()*100

// var b = Math.floor(a);

// var a = Math.floor(Math.random()*100);

// console.log(a);

// var btn = document.querySelector('button')
// var box = document.querySelector('#box')

// btn.addEventListener('click',function(){
//   var c1 = Math.floor(Math.random()*256
// )
//   console.log(c1);
  
// })

// var btn = document.querySelector('button')
// var box = document.querySelector('#box')

// btn.addEventListener('click',function(){
//  var c1 = Math.floor(Math.random()*256)
//  var c2 = Math.floor(Math.random()*256)
//  var c3 = Math.floor(Math.random()*256)

//   box.style.backgroundColor = `rgb(${c1},${c2},${c3})`  
  
// })

// var arc = [10,20,30,40,50,60,70,80,90,100]

//   var a = Math.floor(Math.random()*arc.length)

//   console.log(arc[a]);



