/* 
Accept a random integer within any range, and return "odd" or "not odd"
*/

const odd = (input) => { 
  return input % 2 !== 0 ? console.log("odd", input) : console.log("Not odd", input); 
}

for(i = 0; i < 10; i += 1) {
  odd(Math.floor(Math.random() * 1000));
}