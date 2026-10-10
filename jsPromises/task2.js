// Завдання 2

// В цьому завданні вам потрібно використовувати then() та catch() для обробки результатів виконання промісу

// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
// Copy code
// <https://jsonplaceholder.typicode.com/todos/1>
// Функція повинна повертати як результат Promise що повертає об’єкт todo
// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
// Copy code
// <https://jsonplaceholder.typicode.com/users/1>
// Функція повинна повертати як результат Promise що повертає об’єкт user
// Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з викликами функцій з п.п. 1-2.
//  Присвойте значення отримані від цих виразів до змінних

function fetchTodo() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Todo request failed: ${response.status}`);
            }

            return response.json();
        });
}

function fetchUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`User request failed: ${response.status}`);
            }

            return response.json();
        });
}

const allPromises = Promise.all([
    fetchTodo(),
    fetchUser()
]);

allPromises
    .then((results) => {
        console.log("Promise.all result:");
        console.log(results);
    })
    .catch((error) => {
        console.error("Promise.all error:", error.message);
    });

const racePromise = Promise.race([
    fetchTodo(),
    fetchUser()
]);

racePromise
    .then((result) => {
        console.log("Promise.race result:");
        console.log(result);
    })
    .catch((error) => {
        console.error("Promise.race error:", error.message);
    });