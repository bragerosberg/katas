/*
Go through the number 1 and up to 100. Return the number while counting upwards. 
However, there are some more criterias:
- if the number is a factor/divisable by 3 return -> "Fizz"
- if the number is a factor/divisable by 5 return -> "Buzz"
- if the number is a factor/divisable by both 3 & 5, return -> "FizzBuzz"
*/

for(i = 0; i <= 100; i += 1){
  i % 15 === 0 ? console.log('FizzBuzz', i) : 
  i % 3 === 0 ? console.log('Fizz', i) :
  i % 5 === 0 ? console.log('Buzz', i) : console.log(i);
}