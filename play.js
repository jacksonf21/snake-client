const { connect } = require('./client');

console.log('Connection ...');
connect();

//treats all user input as actuals
const setupInput = function(callback) {
  const stdin = process.stdin;
  
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  //on Ctrl + c exit
  stdin.on('data',(key) => {
    callback(key);
  });

  return stdin;
}

//callback for exiting on Ctrl + C
const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
};

setupInput(handleUserInput);