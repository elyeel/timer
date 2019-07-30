const args = process.argv; // get the string
const strPass = args.slice(2); // remove first 2 elements
// process.stdout.write('\x07');
console.log(strPass);

for(let time of strPass) {
  if (Number(time) >= 1) {
    setTimeout(() => {
      process.stdout.write('\x07')
    }, Number(time) * 1000);
  } else if (time === isNaN) {
    return false
  } 
}
// if(strPass.length < 1) {
  
// } else if (num ){

// }