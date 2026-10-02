// Створіть клас "Книга" (Book) з властивостями, такими як "назва", "автор" і "рік видання". 
// Додайте метод до класу Book, який буде виводити повний опис книги наприклад printInfo. Створіть кілька об'єктів 
// цього класу та викличте printInfo для кожного екземпляру.
// В окремому файлі створіть клас "Електронна книга" (EBook), який буде успадковувати властивості та методи класу 
// Book. Додайте до класу EBook нову властивість, наприклад, "формат файлу". Сторіть метод printInfo для EBook таким 
// чином щоб друкувалась вся доступна інформація про екземляр EBook (все те саме що і для Book але ще формат файлу). 
// Створіть інстанс (екземпляр) класу EBook та викличте метод printInfo
// Геттери та сеттери: Додайте геттери та сеттери для всіх властивостей класу Book та EBook. В сеттерах необхідно 
// додати валідацію для переданих значень. Використовуйте їх для зміни та отримання значень властивостей.
// Створіть статичний метод в класі Book, який буде приймати масив об'єктів(екземрлярів) книг та повертати найдавнішу
//  книгу за роком видання. Викличте його в коді передавши масив книг (серед них мають бути екземляри обох класів 
// Book та EBook)
// Створіть статичний метод для EBook який буде приймати як аргументи екземпляр класу Book і формат файлу як 
// рядок ****та повертати екземпляр класу EBook





const Book = require("./Book");
const EBook = require("./EBook");

// Создаём несколько обычных книг
const book1 = new Book(
    "Harry Potter",
    "J. K. Rowling",
    1997
);

const book2 = new Book(
    "1984",
    "George Orwell",
    1949
);

// Создаём электронную книгу
const ebook1 = new EBook(
    "Clean Code",
    "Robert C. Martin",
    2008,
    "PDF"
);

// Вызываем printInfo для каждого экземпляра
book1.printInfo();
book2.printInfo();
ebook1.printInfo();

// Используем сеттеры для изменения значений
book1.title = "Harry Potter and the Philosopher's Stone";
book1.year = 1998;
ebook1.fileFormat = "EPUB";

// Используем геттеры для получения значений
console.log("Changed title:", book1.title);
console.log("Changed year:", book1.year);
console.log("Changed format:", ebook1.fileFormat);

// Ищем самую старую книгу
const books = [book1, book2, ebook1];
const oldestBook = Book.findOldestBook(books);

console.log("Oldest book:");
oldestBook.printInfo();

// Создаём EBook на основании обычной книги
const convertedBook = EBook.createFromBook(book2, "MOBI");

console.log("Converted book:");
convertedBook.printInfo();