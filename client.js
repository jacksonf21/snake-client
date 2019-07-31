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
  })

  //listens to server responses
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  })



  return conn;
};

module.exports = { connect };