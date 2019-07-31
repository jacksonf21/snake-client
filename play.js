const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connection ...');

setupInput(connect());