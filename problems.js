var fruits = ['Apple', 'Banana', 'Orange'];
var bananaIndex = fruits.indexOf('Banana');
fruits[bananaIndex] = 'Mango'
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.push('Watermelon');
console.log(fruits);


var num1 = 13;
var num2 = 79;
var num3 = 45;

if (num1 > num3) {
    console.log(num1);
}
else if (num1 > num2) {
    console.log(num1);
}
else if (num2 > num3) {
    console.log(num2);
}
else {
    console.log(num3);
}


var side1 = 9;
var side2 = 8;
var side3 = 9;

if (side1 == side2 || side1 == side3 || side2 == side3) {
    console.log('Isosceles => two side equal');
}
else {
    'Isosceles => two side Not equal';
}