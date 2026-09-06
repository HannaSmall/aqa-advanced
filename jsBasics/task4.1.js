// Завдання 4.1

// π - число “пі”. Ви можете використати Math.PI у вашому дз для вираження цього числа

// Створіть змінну radius і присвойте їй числове значення радіуса кола.
// Обчисліть площу кола за формулою π * radius^2 і виведіть результат.

const radius = 30;
const circleArea = Math.PI * radius ** 2;  //radius ** 2 — the square of the radius

console.log(circleArea.toFixed(2)); // Show the result with two digits after the decimal point