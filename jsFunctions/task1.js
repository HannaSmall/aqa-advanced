// Завдання 1

// Створіть функцію яка приймає два параметри: width і height.
// Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
// Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
// Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)

// function declaration

function calculateAreaDeclaration(width, height) {
    const area = width * height;
    return area;
}

console.log(calculateAreaDeclaration(5, 10));

// function expression

const calculateAreaExpression = function (width, height) {
    const area = width * height;
    return area;
};

console.log(calculateAreaExpression(5, 10));

// arrow function

const calculateAreaArrow = (width, height) => {
    const area = width * height;
    return area;
};

console.log(calculateAreaArrow(5, 10));