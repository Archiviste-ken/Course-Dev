// console.log("Hello");

/**
 *  string, number, boolean, array, tuple, void, never
 */

/**
 *  Array => fixed type but not the lenghts
 * tuple => fixed size and type
 */

// const a = "world";
// const b = 5;

// console.log(a / b);

// const a: boolean = true;

// console.log(a);

// const a: number[] = [1,2]

// a.push(3)

// console.log(a);

// const a: [number, string, number] = [1, "hello", 3];

// console.log(a);

// function greet(name: string): string {
//   return `Hello ${name}`;
// }

// greet("cohort");

// function greet(name: string): never {
//   throw new Error("Something went wrong");
// }

// type USER = {
//   name: string;
//   age: number;
//   isMale: boolean;
// };

// const user: USER = {
//   name: "test",
//   age: 30,
//   isMale: true,
// };

// function greet(data: USER): void {
//   console.log("hello " + data.name + " your age is " + data.age);
// }

// greet(user);

/**
 *  any, unknown
 */

let a: unknown;

a = "hello";

if (typeof a === "string") {
  console.log(a.toUpperCase());
}
