class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("Book title must be a non-empty string");
        }

        this._title = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("Book author must be a non-empty string");
        }

        this._author = value;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        const currentYear = new Date().getFullYear();

        if (
            typeof value !== "number" ||
            !Number.isInteger(value) ||
            value <= 0 ||
            value > currentYear
        ) {
            throw new Error(
                `Book year must be between 1 and ${currentYear}`
            );
        }

        this._year = value;
    }

    printInfo() {
        console.log(
            `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`
        );
    }

    static findOldestBook(books) {
        if (!Array.isArray(books) || books.length === 0) {
            throw new Error("Books must be a non-empty array");
        }

        let oldestBook = books[0];

        for (const book of books) {
            if (!(book instanceof Book)) {
                throw new Error(
                    "Every array element must be an instance of Book"
                );
            }

            if (book.year < oldestBook.year) {
                oldestBook = book;
            }
        }

        return oldestBook;
    }
}

module.exports = Book;