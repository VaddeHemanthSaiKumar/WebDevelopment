// operators(operand)
// operators(operands)

// arithmetic operators (+ - * / % **)
console.log(10 + 10);   // 20
console.log(20 - 10);   // 10
console.log(10 * 10);   // 100
console.log(10 / 5);    // 2
console.log(10 % 5);    // 0
console.log(10 ** 2);   // 100
console.log(10 ** 10);  // 10000000000

// relational operators (> < <= >= == === != !==)
console.log(10 > 5);     // true
console.log(10 < 5);     // false
console.log(10 <= 10);   // true
console.log(10 >= 20);   // false
console.log(10 == 10);   // true
console.log(10 == "10"); // true (loose equality, type conversion)
console.log(10 === 10);  // true (strict equality)
console.log(10 === "10");// false (different types)
console.log(10 != 10);   // false
console.log(10 != "10"); // false (loose inequality)
console.log(10 !== "10");// true (strict inequality)

// logical operators (&& || !)
console.log((10 < 5) && (5 == 5)); // false
console.log((10 < 5) || (5 == 5)); // true
console.log(((10 == 10) && (10 > 20)) || (20 == "20") && (10 <= 10)); // true

// assignment operators (= += -= *= /= %= **=)
let number = 10;      // assignment
console.log(number = 20);   // re-assignment
console.log(number += 5);   // compound-assignment (25)
console.log(number -= 10);  // subtract assignment (15)
console.log(number *= 10);  // multiply assignment (150)
console.log(number /= 5);   // divide assignment (30)
console.log(number %= 5);   // modulus assignment (0)
console.log(number **= 5);  // exponent assignment (0 because 0^5 = 0)

// unary operators (++ -- typeof delete void)
let gameScore = 0;
console.log(++gameScore); // 1
console.log(++gameScore); // 2

let playerLives = 3;
console.log(--playerLives); // 2
console.log(--playerLives); // 1
console.log(--playerLives); // 0

console.log(10, typeof 10); // 10 'number'