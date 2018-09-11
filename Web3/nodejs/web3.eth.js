/**
 * web3-eth la package cho phep tuong tac voi blockchain va ethereum
 */
var Web3 = require('web3');
var web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
// console.log('> web3.eth : ', web3.eth);

