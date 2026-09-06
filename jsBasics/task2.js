// Завдання 2: Конкатенація радків та шаблонний рядок

// Створіть дві змінні, які містять імена двох осіб. Використовуючи конкатенацію рядків, 
// створіть новий рядок, який містить вітання для обох осіб. Виведіть результат в консоль. 
// Потім використайте шаблонний рядок для створення того ж вітання. Виведіть результат в консоль.

const myName = "Hanna";
const husbandName = "Andrii";

// Join the text and names using + (concatenated)
const concatenatedGreeting = "Hello " + myName + " and " + husbandName; 

console.log(concatenatedGreeting);

// Add the names to the text using ${} (template literal)
const templateGreeting = `Hello ${myName} and ${husbandName}`;

console.log(templateGreeting);