import readline from 'node:readline';
const guessNumber = 1 + Math.trunc(Math.random() * 10);

const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function f() {
    readlineInterface.question('Enter any number: ', (num) => {
        console.log(`Entered number is ${num}`);
        if (num != guessNumber) {
            f();
        } else {
            readlineInterface.close();
        }
    });
}

f();
