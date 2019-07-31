//stores active TCP connection
let connection;

//treats all user input as actuals
const setupInput = function(conn) {
  const stdin = process.stdin;
  connection = conn;
  
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data',(key) => {
    //exit on ctrl+c
    handleUserInput(key);
    //checks valid user input
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

//key prompts
const keyCheck = (key) => {
  
  switch (key) {
    //movements
    case 'w': connection.write('Move: up'); break;
    case 'a': connection.write('Move: left'); break;
    case 's': connection.write('Move: down'); break;
    case 'd': connection.write('Move: right'); break;
    
    //messages
    case 'p': connection.write('Say: YUT'); break;
    case 'l': connection.write('Say: POP'); break;
  };

};

module.exports = { setupInput };
