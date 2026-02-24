console.log("Ohaiyo!")


// * How to run script outside of the browser?

// if you want to run the js file outside of the browser, use node <filename> in the terminal.

//  node <filename>



// * What are packages.
// packages are such code which are written by other developers but has been made available publically so that the other developers can also make the use of it in their projects or anything.

// -> How to install packages?

// to install packages we use npm which stands for node package manager. It is a tool which helps us to install packages in our project.

// How to use packages ?

// What is package.json??
// the packages on which the js code is dependent on are stored as dependencies and gets listed in the package.json file it maintains it.


// node_modules contains the already written code of the package, like jo package use kr rhe hai uska code kahi to store hoga na, to node_modules do this task of storing the code related to the package.


//package-lock.json handles the further dependencies of the the package which we have downloaded.

// What is a server?


// server is a machine which has its own os,processor, storage, ram.

// how is it different from the regular devices and machines having the same things?

// its different in terms of request and a proper response


// const catMe = require("cat-me")


// console.log(catMe())


const catMe = require("cat-me")

console.log(catMe());
