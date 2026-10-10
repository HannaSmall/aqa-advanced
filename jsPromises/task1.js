// Завдання 1

// Напишіть функцію яка буде приймати 2 аргументи - довільний текст як перший аргумент та кількість мілісекунд як
//  другий аргумент. Функція повинна вивести в консоль переданий текст через вказану кількість мілісекунд

function showTextWithDelay(text, milliseconds) {
    setTimeout(() => {
        console.log(text);
    }, milliseconds);
}

showTextWithDelay("Hello after 2 seconds", 2000);