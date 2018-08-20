console.log(`Let's find roots of the equation`);
console.log('\nx^2+5x+6 ')
findRoots(1, 5, 6);
console.log('\nx^2+2x+1 ')
findRoots(1, 2, 1);
console.log('\n2x^2+x+1 ')
findRoots(2, 1, 1);

console.log('\nIs this number prime?');
console.log('\n1 ')
isPrime(1);
console.log('\n4 ')
isPrime(4);
console.log('\n7 ')
isPrime(7)

console.log("\nLet's find a sum");
console.log('\n1 ')
sumOfNumSeries(1);
console.log('\n1 +1/2 + 1/3 +1/4 +1/5 ')
sumOfNumSeries(5);

console.log("\nLet's reverse the number 37524");
reverse(37524);

console.log(`\nLet's make distribution of array's elements`);
distributionOfNumbers([-2, -1, 0, 1, 2]);

console.log(`\nLet's find a number of every element repeats`);
disctributionOfSymbols([0, 0, 0, 1, 1, 2]);

console.log(`\nLet's check, are two strings annagram`);
isAnagramm('ball', 'lab');
isAnagramm('ball', 'abll');

console.log('\n')
let fridge = new Fridge(300);
console.log(fridge.getFood());
console.log(fridge.addFood('bread'));
console.log(fridge.getFood());
console.log(fridge.enable());
console.log(fridge.addFood('meat'));
console.log(fridge.getFood());
console.log(fridge.addFood('vegetables','fruits'));
console.log(fridge.getFood());
console.log(fridge.addFood('bread'));