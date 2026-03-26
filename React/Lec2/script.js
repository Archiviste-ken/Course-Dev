// React js - Library for building user interfaces

// gsap.to("#box", {duration: 2, x: 100});



// var container = document.querySelector('#container');

// var root = ReactDOM.createRoot(container);  

// root.render(h1);

// var h1 = React.createElement('h1', {id:'hero'}, 'Hello World!');
// var h2 = React.createElement('h2', {className: 'heroine'}, 'Hello from React!');


// var div = React.createElement('div',{id:'parent'},[h1,h2]);

// var root = ReactDOM.createRoot(document.querySelector('#container'));

//  root.render(div);
// function h1(){
//     return React.createElement('h1', null, 'Hello from h1!');
// }

// var root = ReactDOM.createRoot(document.querySelector('#container'));

// root.render(hello);




// var h1 = document.createElement('h1');

// h1.innerHTML = 'Hello from JavaScript!';

// document.body.appendChild(h1);



var h1 = React.createElement('h1',null, 'Mai hoon Sp!');
var h2 = React.createElement('h2', null, 'Mai hoon Sp!');
var div = React.createElement('div',null , [h1 , h2])

var  container = document.querySelector('#container');

const root = ReactDOM.createRoot(container)


root.render(div); // accepts only one argument.


