//stores active TCP connection
let connection;

//treats all user input as actuals
const setupInput = function(conn) {
  const stdin = process.stdin;
  connection = conn;
  
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  //on Ctrl + c exit
  stdin.on('data',(key) => {
    handleUserInput(key);
    keyCheck(key);
  });

  return stdin;
}

//callback for exiting on Ctrl + C
const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
};

//key checks
const keyCheck = (key) => {
  
  switch (key) {
    case 'w': connection.write('Move: up'); break;
    case 'a': connection.write('Move: left'); break;
    case 's': connection.write('Move: down'); break;
    case 'd': connection.write('Move: right'); break;
  }

};

module.exports = { setupInput };