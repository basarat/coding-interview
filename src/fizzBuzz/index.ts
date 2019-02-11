/**
 * Print the integers from 1 to 100 (inclusive)
 * But:
 *  - for multiples of three, print Fizz (instead of the number)
 *  - for multiples of five, print Buzz (instead of the number)
 *  - for multiples of both three and five, print FizzBuzz (instead of the number)
 */

for (let index = 1; index < 101; index++) {
  let result = '';

  if (index % 3 == 0) result += 'Fizz';
  if (index % 5 == 0) result += 'Buzz';

  if (result == '') result = index.toString();

  console.log(result);
}
