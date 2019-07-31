
//treats all user input as actuals
const setupInput = function() {
  const stdin = process.stdin;
  
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  //on Ctrl + c exit
  stdin.on('data',(key) => {
    handleUserInput(key);
  });

  return stdin;
}

//callback for exiting on Ctrl + C
const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
};

module.exports = { setupInput };