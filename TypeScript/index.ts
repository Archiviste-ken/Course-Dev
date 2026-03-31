/**
 * string, number, boolean, array , tuple, void, never 
 */

// const a: number = 123;

// console.log(a);



// array = fixed type but not the length
// tuple = fixed size and type

const a: [number,number, number] = [1,2,3]


function greet(name:string): string{
    return ("Hello " + name);
    
}

greet("cohort")



function greet1(name:string): void{
   console.log("Hello " + name);
    
}


function greet2(name:string): never{  // never means this function will never return anything, which is useful for functions that throw errors or have infinite loops
   throw new Error("something went wrong !")  
}


   