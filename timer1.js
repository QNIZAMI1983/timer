//define a const to store the command line parameters in an array, we use process.argv and slice the node and filename elments and map the remain
const parameters = process.argv.slice(2).map(Number);
console.log('The timer will beep at ' + parameters + ' seconds'); // Output: The timer will beep at [10, 3, 5, 15, 9] seconds
parameters.forEach(function (parameter, index) {
    setTimeout(() => {
        process.stdout.write('\x07');
        console.log('It beeped at ' + parameter + ' seconds!');
    }, (parameter * 1000));
});
