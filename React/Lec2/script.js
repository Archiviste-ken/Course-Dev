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

// var h1 = React.createElement('h1',{id: 'parent'}, 'Mai hoon Sp!'); 
// also can be written like this. here we are passing an object as the second argument which contains the attributes of the element. in this case we are passing id attribute with value 'parent'. we can pass any attribute in this object like className, style etc. and we can also pass multiple attributes in this object.

var h2 = React.createElement('h2', null, 'Mai hoon Sp!');  // nul is for attributes, we can pass any attribute in place of null. like id, className, style etc. and the third argument is for content. we can pass any content in place of 'Mai hoon Sp!' like number, boolean, array, object etc. but if we pass an array then it will be treated as children and it will render all the elements in the array as children of the parent element.
var div = React.createElement('div',null , [h1 , h2])

var  container = document.querySelector('#container');

const root = ReactDOM.createRoot(container)


root.render(div); // accepts only one argument.


