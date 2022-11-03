const { program } = require("commander");

const books = require("./books");

const invokeAction = async({action, id, title, author}) => {
    switch(action) {
        case "getAll":
            const allBooks = await books.getAll();
            console.log(allBooks);
            break;
        case "getById":
            const oneBook = await books.getById(id);
            console.log(oneBook);
            break;
        case "addBook":
            const newBook = await books.addBook(title, author);
            console.log(newBook);
            break;
        case "removeById":
            const deleteBook = await books.removeById(id);
            console.log(deleteBook);
            break;
        default:
            console.log("Unknown action");
    }
}

program
    .option("-a, --action <type>")
    .option("-i, --id <type>")
    .option("-t, --title <type>")
    .option("-at, --author <type>")

program.parse(process.argv);

const options = program.opts();

invokeAction(options);