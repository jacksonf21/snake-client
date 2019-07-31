const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  conn.setEncoding('utf8');
  
  //on successful connection
  conn.on('connect', () => {
    console.log('Successfully connected to game server');

    //send name credentials
    conn.write('Name: JKF');

    //up key
    function upKey() {
      setTimeout(() => {
        conn.write('Move: up');
        upKey();
      }, 50);
    };

    //down key
    function upKey() {
      setTimeout(() => {
        conn.write('Move: down');
        upKey();
      }, 50);
    };

  })

  //listens to server responses
  conn.on('data', (data) => {
    console.log('Server says: ', data);
    process.exit();
  })

  return conn;
};

module.exports = { connect };