const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  conn.setEncoding('utf8');

  //listens to server responses
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  })

  return conn;
};

console.log('Connection ...');
connect();