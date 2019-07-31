// we meed to have input be able to set a timer by the number it says
// we b to make a beeping sound each time its typed
// te user can escape with ctrl c
const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  process.stdout.write(key);
  // \u0003 maps to ctrl+c input
  if (key === 'b') { // if 'b' pressed then this will execute 'beep'
    process.stdout.write('\x07');
  }
  if (Number(key) >= 1) {
    process.stdout.write('setting timer for ' + key + ' seconds');
    setTimeout(() => {
      process.stdout.write('\x07')
    }, Number(key) * 1000);
  } else if (key === isNaN) {
    return false
  } 
  if (key === '\u0003') { // if ctrl+c pressed then this will execute
    console.clear();
    console.log('Thanks for using me, ciao!');
    process.exit();
  }

});
  console.log('after callback');
