// const fs = require("fs");

// fs.readFile("./files/file.txt", (error, data) => {
//     console.log(data);
// });

// const fs = require("fs/promises");
// // const fs = require("fs").promises;

// fs.readFile("./files/file.txt")
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message))

const fs = require("fs/promises");

const fileOperation = async(filePath, action, data) => {
    switch(action) {
        case 'read':
            const file = await fs.readFile(filePath);
            const text = file.toString();
            console.log(text);
            break;
        case 'add':
            await fs.appendFile(filePath, data);
            break;
        case 'replace':
            await fs.writeFile(filePath, data);
            break;
        default:
            console.log('Unknown action')
    }
}


// fileOperation('./files/file.txt', 'add', '\nHi, it is John');
fileOperation('./files/file.txt', 'replace', 'New text');
fileOperation('./files/file.txt', 'read');