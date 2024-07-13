import { error } from 'console';
// import  fs from 'fs';
import fs from 'fs/promises';

// // readfile() -callback

// fs.readFile('./test.txt', 'utf8', (err, data) => {
//     if(err) {
//         throw err;
//     }
//     console.log(data);
// });

// // readfile sync- syncronous version

// const data = fs.readFileSync('./test.txt', 'utf8');

// console.log(data);

// readfile() -promise .then()
// fs.readFile('./test.txt', 'utf8')
//     .then((data) => console.log("where?", data))
//     .catch((err) => console.log(err));


// readfile() - async/await
const readFile = async () => {
    try {
        const data = await fs.readFile('./test.txt', 'utf8');
        console.log(data);
    } catch (error) {
        console.log(error);

    }
}

// write file

const writefile = async () =>
{
    try {
        await fs.writeFile('./test.txt', 'kese ghaib ho raha hai');
        console.log('written!');
    } catch (error) {
        console.log(error);
    }
};

// appendfile rather that overwriting it

const appendfile = async () => {
    try {
        await fs.appendFile('./test.txt', '\nThis is appended');
        console.log('file text is appended txt');
    } catch (error) {
        console.log(error);
        
    }
};

writefile();
appendfile();
readFile();