const net = require('net');
const { IP, PORT, USER} = require('./constants'); 

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.setEncoding('utf8');
  
  //on successful connection
  conn.on('connect', () => {
    console.log('Successfully connected to game server');

    //send name credentials
    conn.write(`Name: ${USER}`);
    //conn.write(`Say: ${MSG}`);

  })

  //listens to server responses
  conn.on('data', (data) => {
    console.log('Server says: ', data);
    process.exit();
  })

  return conn;
};

module.exports = { connect };