const Book = require("./Book");

class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this.fileFormat = fileFormat;
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("File format must be a non-empty string");
        }

        this._fileFormat = value;
    }

    printInfo() {
        console.log(
            `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Format: ${this.fileFormat}`
        );
    }

    static createFromBook(book, fileFormat) {
        if (!(book instanceof Book)) {
            throw new Error(
                "The first argument must be an instance of Book"
            );
        }

        return new EBook(
            book.title,
            book.author,
            book.year,
            fileFormat
        );
    }
}

module.exports = EBook;