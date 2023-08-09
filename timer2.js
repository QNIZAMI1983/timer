const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const beep = () => process.stdout.write('\x07');

rl.on('line', (input) => {
  input = input.trim();

  if (input === 'b') {
    beep();
  } else if (input >= 1 && input <= 9) {
    console.log(`Setting timer for ${input} seconds...`);
    setTimeout(beep, input * 1000);
  }
});

rl.on('SIGINT', () => {
  console.log('\nThanks for using me, ciao!');
  rl.close();
});
