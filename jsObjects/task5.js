// Завдання 5
// Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
// Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
// Зробіть деструктуризацію в циклі


const users = [
    {
        name: "Anna",
        email: "anna@example.com",
        age: 27
    },
    {
        name: "Alex",
        email: "alex@example.com",
        age: 30
    },
    {
        name: "Maria",
        email: "maria@example.com",
        age: 22
    }
];

for (const { name, email, age } of users) {
    console.log(name, email, age);
}