/* 
Accept a random integer within any range, and return "even" or "not even"
*/

const even = (input) => { 
  return input % 2 === 0 ? console.log("Even", input) : console.log("Not Even", input); 
}

for(i = 0; i < 10; i += 1) {
  even(Math.floor(Math.random() * 1000));
}