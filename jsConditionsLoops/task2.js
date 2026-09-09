// Завдання 2: Виконайте попереднє завдання але використовуючи конструкцію switch/case

const averageGrade = 91;

switch (true) {
    case averageGrade < 60:
    console.log("Незадовільна");
    break;
    case averageGrade <= 70:
    console.log("Задовільно");
    break;
    case (averageGrade <= 80):
    console.log("Добре");
    break;
    case averageGrade <= 90:
    console.log("Дуже добре");
    break;
    default:
    console.log("Відмінно");
} 
