// React js - Library for building user interfaces

// gsap.to("#box", {duration: 2, x: 100});



// var container = document.querySelector('#container');

// var root = ReactDOM.createRoot(container);  

// root.render(h1);

var h1 = React.createElement('h1', null, 'Hello World!');
var h2 = React.createElement('h2', null, 'Hello from React!');


var div = React.createElement('div',null,h1,h2)

var root = ReactDOM.createRoot(document.querySelector('#container'));

 root.render(h2);