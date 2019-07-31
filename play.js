const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connection ...');
connect();

setupInput();