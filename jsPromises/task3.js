// Завдання 3

// Виконайте завдання 2 але використовуючи конструкцію async/await для функції що виконує запити

async function fetchTodo() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
    );

    if (!response.ok) {
        throw new Error(`Todo request failed: ${response.status}`);
    }

    const todo = await response.json();

    return todo;
}

async function fetchUser() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
    );

    if (!response.ok) {
        throw new Error(`User request failed: ${response.status}`);
    }

    const user = await response.json();

    return user;
}

async function executeRequests() {
    try {
        const allResults = await Promise.all([
            fetchTodo(),
            fetchUser()
        ]);

        console.log("Promise.all result:");
        console.log(allResults);

        const raceResult = await Promise.race([
            fetchTodo(),
            fetchUser()
        ]);

        console.log("Promise.race result:");
        console.log(raceResult);
    } catch (error) {
        console.error("Request error:", error.message);
    }
}

executeRequests();