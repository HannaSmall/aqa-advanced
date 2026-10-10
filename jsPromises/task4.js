// Завдання 4 (Опціонально)

// Створіть 2 класи, які будуть мати в собі методи що реалізують функції з попереднього завдання.

class TodoService {
    async fetchTodo() {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
        );

        if (!response.ok) {
            throw new Error(
                `Todo request failed: ${response.status}`
            );
        }

        return response.json();
    }
}

class UserService {
    async fetchUser() {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        if (!response.ok) {
            throw new Error(
                `User request failed: ${response.status}`
            );
        }

        return response.json();
    }
}

async function executeRequests() {
    const todoService = new TodoService();
    const userService = new UserService();

    try {
        const allResults = await Promise.all([
            todoService.fetchTodo(),
            userService.fetchUser()
        ]);

        console.log("Promise.all result:");
        console.log(allResults);

        const raceResult = await Promise.race([
            todoService.fetchTodo(),
            userService.fetchUser()
        ]);

        console.log("Promise.race result:");
        console.log(raceResult);
    } catch (error) {
        console.error("Request error:", error.message);
    }
}

executeRequests();