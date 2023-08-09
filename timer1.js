/* //define a const to store the command line parameters in an array, we use process.argv and slice the node and filename elments and map the remain
const parameters = process.argv.slice(2).map(Number);
console.log('The timer will beep at ' + parameters + ' seconds'); // Output: The timer will beep at [10, 3, 5, 15, 9] seconds
parameters.forEach(function (parameter, index) {
    setTimeout(() => {
        process.stdout.write('\x07');
        console.log('It beeped at ' + parameter + ' seconds!');
    }, (parameter * 1000));
});
 */

// Define a const to store the command line parameters in an array
const parameters = process.argv.slice(2).map(Number);

// Check if there are no numbers provided
if (parameters.length === 0) {
  console.log('No numbers provided. The timer will not beep.');
} else {
  console.log('The timer will beep at ' + parameters + ' seconds');

  // Iterate over the parameters and schedule beeps
  parameters.forEach(function (parameter, index) {
    // Check if the parameter is a valid positive number
    if (!isNaN(parameter) && parameter >= 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
        console.log('It beeped at ' + parameter + ' seconds!');
      }, (parameter * 1000));
    } else {
      console.log('Skipping invalid parameter: ' + parameter);
    }
  });
}
